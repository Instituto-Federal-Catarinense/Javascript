const express = require("express");
const router = express.Router();
const produtosController = require('../controllers/produtosController');

router.get('/', produtosController.produtos);
router.get('/camisetas', produtosController.camisetas);
router.get('/cadastrar', produtosController.formCadProd);
router.post('/cadastrar', produtosController.cadastrar);

module.exports = router;