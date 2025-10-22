const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/clientesController');

router.get('/', produtosController.clientes);


module.exports = router;