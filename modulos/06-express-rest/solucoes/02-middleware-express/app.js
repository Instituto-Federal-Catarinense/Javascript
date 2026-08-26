/** SOLUÇÃO-MODELO — 02-middleware-express | Enunciado: exercícios 1 e 2 de ../02-middleware-express/exercicios.md | Como rodar: npm install express && node app.js
 *
 * Exercício 1 — middleware `logger`: imprime método, URL e horário de cada
 *   requisição no formato `[GET] /produtos - 2026-08-25T14:02:11.402Z`
 *   e chama `next()`. Registrado ANTES das rotas para alcançar todas.
 * Exercício 2 — middleware `timer`: marca o início em `res.locals.inicio`
 *   e, via `res.on('finish')`, imprime quanto tempo a resposta levou.
 *
 * Teste com curl (comandos anotados):
 *   curl -i http://localhost:3000/
 *   curl -i http://localhost:3000/produtos
 *   curl -i http://localhost:3000/tempo
 */
const express = require('express');

const app = express();
const PORTA = 3000;

// Exercício 1 — logger global (antes das rotas).
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url} - ${new Date().toISOString()}`);
  next(); // sem next() a requisição fica presa aqui e a rota nunca responde
});

// Exercício 2 — timer de resposta.
app.use((req, res, next) => {
  res.locals.inicio = Date.now();
  // 'finish' dispara quando a resposta terminou de ir para o cliente,
  // então a medição inclui o tempo gasto pela rota.
  res.on('finish', () => {
    const duracaoMs = Date.now() - res.locals.inicio;
    console.log(`${req.method} ${req.originalUrl} concluída em ${duracaoMs}ms`);
  });
  next();
});

// Rotas de demonstração.
app.get('/', (req, res) => res.json({ mensagem: 'API funcionando' }));

app.get('/produtos', (req, res) => res.json([
  { id: 1, nome: 'Teclado mecânico' },
  { id: 2, nome: 'Mouse sem fio' },
]));

app.get('/tempo', (req, res) => res.json({ milissegundos: Date.now() - res.locals.inicio }));

// Protege o listen para poder importar este app em testes sem subir servidor.
if (require.main === module) {
  app.listen(PORTA, () => console.log(`Servidor em http://localhost:${PORTA}`));
}

module.exports = app;

// DISCUSSÃO:
// - A ordem de registro É a ordem de execução: logger e timer vêm primeiro,
//   logo observam TODAS as rotas declaradas depois deles.
// - `res.locals` é o lugar recomendado para passar dados ao longo do pipeline;
//   pendurar propriedades em `req` funciona, mas é menos explícito.
// - O experimento do exercício 3 mostra que um middleware registrado DEPOIS da
//   rota ainda executa após `res.send`, mas não pode mais alterar a resposta —
//   por isso handlers pós-resposta servem só para log/auditoria.
// - Exercícios seguintes da lista: middleware 404 final, autenticar por token
//   com handler de erro de 4 argumentos e o pipeline completo com helmet/CORS.
