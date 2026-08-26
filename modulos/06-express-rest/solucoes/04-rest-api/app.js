/** SOLUÇÃO-MODELO — 04-rest-api | Enunciado: exercícios 1 e 2 (+ PUT/DELETE do exemplo da aula) de ../04-rest-api/exercicios.md | Como rodar: npm install express && node app.js
 *
 * Exercício 1 — `GET /usuarios/:id`: devolve 200 com o objeto ou
 *   404 com `{ erro: 'Usuário não encontrado' }` (req.params.id é string:
 *   converte-se com Number() antes do find).
 * Exercício 2 — validação no `POST /usuarios`: exige `nome` (texto não vazio)
 *   e `email` contendo "@"; inválido responde 400 com `{ erros: [...] }`,
 *   válido responde 201 com o objeto criado.
 *
 * Bloco curl de teste (comandos anotados):
 *   curl -i http://localhost:3002/usuarios/1        # 200
 *   curl -i http://localhost:3002/usuarios/999      # 404
 *   curl -i -X POST http://localhost:3002/usuarios \
 *     -H "Content-Type: application/json" \
 *     -d '{"nome":"Bruna","email":"bruna@loja.com"}'          # 201
 *   curl -i -X POST http://localhost:3002/usuarios \
 *     -H "Content-Type: application/json" -d '{"nome":""}'    # 400 { erros: [...] }
 */
const express = require('express');
const usuarios = require('./routes/usuarios');

const app = express();
const PORTA = 3002;

app.use(express.json());
app.use('/usuarios', usuarios);

if (require.main === module) {
  app.listen(PORTA, () => console.log(`API em http://localhost:${PORTA}`));
}

module.exports = app;

// DISCUSSÃO:
// - A rota de listagem continua em GET /usuarios; o Router mantém o arquivo
//   organizado e pronto para o desafio (CRUD de produtos com service próprio).
// - Acumular as mensagens num array antes de responder (exercício 2) permite
//   mostrar TODOS os erros de uma vez — melhor para quem consome a API.
// - Status usados: 200 leitura/atualização, 201 criação, 204 remoção,
//   400 validação e 404 inexistente.
