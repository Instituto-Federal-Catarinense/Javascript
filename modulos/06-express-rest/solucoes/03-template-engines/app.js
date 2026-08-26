/** SOLUÇÃO-MODELO — 03-template-engines | Enunciado: exercícios 1 e 2 (+ navbar condicional do 4) de ../03-template-engines/exercicios.md | Como rodar: npm install express ejs && node app.js
 *
 * Exercício 1 — rodapé com ano dinâmico: cada rota passa
 *   `ano: new Date().getFullYear()` e a view imprime com `<%= ano %>`.
 * Exercício 2 — partial de cabeçalho: `views/partials/header.ejs` concentra a
 *   navegação e é incluído por `/` e `/sobre` com `<%- include('partials/header') %>`.
 * Bônus (exercício 4) — o partial já recebe `usuario` e alterna entre
 *   "Olá, <nome> | Sair" e o link "Entrar".
 */
const path = require('path');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Dados fictícios reutilizados pelas rotas (troque null para ver a navbar logada).
const usuario = null;

app.get('/', (req, res) => {
  res.render('index', {
    titulo: 'Trilha Node.js',
    itens: ['Express', 'EJS'],
    usuario,
    ano: new Date().getFullYear(),
  });
});

app.get('/sobre', (req, res) => {
  res.render('sobre', {
    titulo: 'Sobre a trilha',
    usuario,
    ano: new Date().getFullYear(),
  });
});

if (require.main === module) {
  app.listen(3001, () => console.log('Servidor em http://localhost:3001'));
}

module.exports = app;

// DISCUSSÃO:
// - O caminho do include é relativo à pasta configurada em app.set('views').
// - `<%- include(...) %>` usa hífen porque injeta HTML cru da partial; dados de
//   usuário continuam impressos com `<%= %>` (escapado) dentro das views.
// - Mudar o menu no header.ejs reflete em todas as páginas que o incluem —
//   esse é o ganho central de partials.
// - Próximos passos da lista: tabela de produtos com loop EJS (exercício 3),
//   formulário com escape de <script> (exercício 5) e página de produto
//   inexistente com status 404 (exercício 6).
