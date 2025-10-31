const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');

router.get('/', produtosController.produtos);
router.get('/camiseta', produtosController.camiseta);
router.get("/cadastrar" ,produtosController.formCadastrar);
router.get("/cadastrar" ,produtosController.cadastrar);


module.exports = router;