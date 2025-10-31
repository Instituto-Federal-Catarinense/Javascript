const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');

router.get("/", produtosController.Produtos);
router.get("/camisetas", produtosController.camisetas);
router.get("/cadastrar", produtosController.cadastrarForm);
router.post("/cadastrar", produtosController.produtoCadastrado);
module.exports = router;