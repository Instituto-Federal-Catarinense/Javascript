const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');

// Índice com links para as principais rotas
router.get('/', (req, res) => {
  res.send(`
    <h1>Índice do App</h1>
    <ul>
      <li><a href="/">Início (este índice)</a></li>
      <li><a href="/formulario">Formulario</a></li>
      <li><a href="/users">Users</a></li>
      <li><a href="/produtos">Produtos</a></li>
      <li><a href="/clientes">Clientes</a></li>
      <li><a href="/login">Login</a></li>
    </ul>
  `);
});

router.get('/formulario', siteController.formulario);
router.post('/saudacao', siteController.saudacao);
router.get('/users', siteController.users);

module.exports = router;
