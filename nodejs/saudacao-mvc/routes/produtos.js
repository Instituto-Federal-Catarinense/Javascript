var express = require('express');
var router = express.Router();
const produtosController = require('../controllers/produtosController');

router.get('/', produtosController.produtos);
router.get('/camisetas', produtosController.camisetas);
router.get("/cadastrar", produtosController.formCadastrar);
router.post("/cadastrar", produtosController.Cadastrado);

module.exports = router;
