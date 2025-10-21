const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

router.get('/', clientesController.index);
router.get('/:id', clientesController.detalhe);

module.exports = router;
