/** SOLUÇÃO-MODELO — 01-banco-de-dados | Enunciado: exercícios 1 e 2 de ../01-banco-de-dados/exercicios.md | Como rodar: npm install express mongoose && node app.js
 *
 * Exercício 1 — validações no model + tratamento: documento inválido responde
 *   400 (nunca 500) com as mensagens legíveis do ValidationError.
 * Exercício 2 — timestamps e _id explicados nos comentários de models/Usuario.js.
 *
 * Requisito: MongoDB acessível. A URI vem SEMPRE de ambiente:
 *   export MONGODB_URI='mongodb://127.0.0.1:27017/aula'
 *   node app.js
 *
 * Bloco curl de teste (comandos anotados):
 *   curl -i -X POST http://localhost:3003/usuarios \
 *     -H "Content-Type: application/json" -d '{"nome":"Ana","email":"ana@loja.com","idade":25}'  # 201
 *   curl -i -X POST http://localhost:3003/usuarios \
 *     -H "Content-Type: application/json" -d '{"nome":"A","email":"invalida"}'                    # 400 { erros: [...] }
 *   curl -i http://localhost:3003/usuarios                                                        # 200 lista
 */
const express = require('express');
const mongoose = require('mongoose');
const Usuario = require('./models/Usuario');

const app = express();
const PORTA = 3003;

app.use(express.json());

// Criação — ponto onde as validações do exercício 1 aparecem.
app.post('/usuarios', async (req, res, next) => {
  try {
    const usuario = await Usuario.create(req.body);
    return res.status(201).json(usuario);
  } catch (erro) {
    if (erro.name === 'ValidationError') {
      const mensagens = Object.values(erro.errors).map((e) => e.message);
      return res.status(400).json({ erros: mensagens });
    }
    if (erro.code === 11000) {
      return res.status(400).json({ erros: ['E-mail já cadastrado'] });
    }
    return next(erro);
  }
});

// Listagem — igual à da aula.
app.get('/usuarios', async (req, res, next) => {
  try {
    return res.json(await Usuario.find());
  } catch (erro) {
    return next(erro);
  }
});

// Busca por id — 404 dedicado quando o id não existe ou é inválido.
app.get('/usuarios/:id', async (req, res, next) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }
    return res.json(usuario);
  } catch (erro) {
    if (erro.name === 'CastError') {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }
    return next(erro);
  }
});

// Middleware de erro final — tudo que chegou via next(erro) cai aqui.
app.use((erro, req, res, next) => {
  console.error(`Erro interno: ${erro.message}`);
  return res.status(500).json({ erro: 'Erro interno' });
});

if (require.main === module) {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/aula';
  mongoose
    .connect(uri)
    .then(() => app.listen(PORTA, () => console.log(`API em http://localhost:${PORTA}`)))
    .catch((erro) => console.error('Falha ao conectar no MongoDB:', erro.message));
}

module.exports = app;

// DISCUSSÃO:
// - Regra de ouro do módulo: falha de VALIDAÇÃO é problema do cliente (400);
//   falha inesperada é do servidor (500) e vai para o middleware final.
// - `runValidators: true` seria necessário num PUT com findByIdAndUpdate para
//   revalidar os dados atualizados.
// - A busca por nome case-insensitive do exercício 3 usa
//   Usuario.find({ nome: new RegExp(busca, 'i') }) após validar a query.
