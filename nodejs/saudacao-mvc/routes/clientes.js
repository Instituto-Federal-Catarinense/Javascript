const express = require('express');
const clientesController = require('../controllers/clientesController');
const router = express.Router();

// GET /clientes
router.get('/', clientesController.Clientes );
// GET /clientes/login
router.get('/login', clientesController.login );
// POST /clientes/login
router.post('/login', clientesController.verificado );

module.exports = router;