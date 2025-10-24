const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/clientesController');

router.get('/', produtosController.clientes);
router.get('/login', produtosController.login);
router.post('/liberado', produtosController.liberado);

module.exports = router;