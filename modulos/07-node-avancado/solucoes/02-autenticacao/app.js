/** SOLUÇÃO-MODELO — 02-autenticacao (app) | Enunciado: exercícios 2, 3 e 4 (+ hash-demo do 1) de ../02-autenticacao/exercicios.md | Como rodar: npm install express bcryptjs jsonwebtoken && JWT_SEGREDO='segredo-forte-aqui' node app.js
 *
 * Exercício 1 — rodar `node hash-demo.js` nesta pasta (hash não volta atrás).
 * Exercício 2 — POST /registrar: recusa senha curta (400), salva SOMENTE o
 *   hash bcrypt e responde 201 sem ecoar o hash.
 * Exercício 3 — POST /login: compareSync contra o hash e JWT assinado com
 *   JWT_SEGREDO; email inexistente e senha errada devolvem a MESMA
 *   mensagem genérica 401 ("Credenciais inválidas").
 * Exercício 4 — rotas protegidas via middleware/auth.js (Bearer token).
 *
 * Bloco bash do fluxo completo (comandos anotados):
 *   export TOKEN=$(curl -s -X POST http://localhost:3004/registrar \
 *     -H "Content-Type: application/json" \
 *     -d '{"nome":"Bruna","email":"bruna@loja.com","senha":"senhaSegura1"}' | node -pe 'JSON.parse(require("fs").readFileSync(0)).token')
 *   curl -i -X POST http://localhost:3004/login \
 *     -H "Content-Type: application/json" -d '{"email":"bruna@loja.com","senha":"senhaSegura1"}'  # 200 { token }
 *   curl -i -X POST http://localhost:3004/login \
 *     -H "Content-Type: application/json" -d '{"email":"bruna@loja.com","senha":"errada"}'        # 401 genérico
 *   curl -i http://localhost:3004/perfil                        # sem token -> 401
 *   curl -i http://localhost:3004/meus-pedidos \
 *     -H "Authorization: Bearer $TOKEN"                         # 200 pedidos fictícios
 */
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const autenticar = require('./middleware/auth');

// Falha RÁPIDO se o segredo não foi definido: nunca subir com segredo hardcoded.
if (!process.env.JWT_SEGREDO) {
  throw new Error('JWT_SEGREDO não definida — exporte a variável ou use seu .env antes de subir o app.');
}

const app = express();
const PORTA = 3004;

app.use(express.json());

// "Banco" em memória, como no exemplo da aula.
const usuarios = [];
let proximoId = 1;

// Exercício 2 — cadastro com senha protegida.
app.post('/registrar', (req, res) => {
  const { nome, email, senha } = req.body;

  if (!senha || typeof senha !== 'string' || senha.length < 8) {
    return res.status(400).json({ erro: 'Senha deve ter no mínimo 8 caracteres' });
  }

  const usuario = {
    id: proximoId,
    nome,
    email,
    papel: 'cliente',
    senhaHash: bcrypt.hashSync(senha, 10),
  };
  proximoId += 1;
  usuarios.push(usuario);

  // Resposta montada campo a campo: o hash NUNCA sai daqui.
  return res.status(201).json({ id: usuario.id, nome: usuario.nome, email: usuario.email });
});

// Exercício 3 — login que emite token.
app.post('/login', async (req, res) => {
  const { email, senha } = req.body;
  const usuario = usuarios.find((item) => item.email === email);
  const senhaValida = usuario && (await bcrypt.compare(String(senha || ''), usuario.senhaHash));

  if (!senhaValida) {
    // Mensagem única para email inexistente OU senha errada:
    // evita revelar quais emails estão cadastrados.
    return res.status(401).json({ erro: 'Credenciais inválidas' });
  }

  const token = jwt.sign(
    { sub: usuario.id, papel: usuario.papel },
    process.env.JWT_SEGREDO,
    { expiresIn: '15m' },
  );
  return res.json({ token });
});

// Exercício 4 — rota protegida extra: pedidos fictícios do id dentro do token.
app.get('/meus-pedidos', autenticar, (req, res) => {
  const pedidosFicticios = [
    { id: 101, item: 'Teclado mecânico', status: 'enviado' },
    { id: 102, item: 'Mouse sem fio', status: 'entregue' },
  ];
  return res.json({ usuarioId: req.usuario.sub, pedidos: pedidosFicticios });
});

// Perfil protegido simples para teste rápido do middleware.
app.get('/perfil', autenticar, (req, res) => res.json({ usuarioId: req.usuario.sub }));

if (require.main === module) {
  app.listen(PORTA, () => console.log(`Autenticação em http://localhost:${PORTA}`));
}

module.exports = app;

// DISCUSSÃO:
// - O payload do JWT é apenas ASSINADO, não cifrado: nada sensível vai dentro
//   dele (por isso só id/papel).
// - expiresIn '15m' limita a janela de uso de um token vazado; renovar tokens
//   (refresh) fica como estudo posterior.
// - compare() assíncrono é preferível ao compareSync em rotas: não bloqueia o
//   event loop durante o custo intencional do bcrypt.
