const express = require('express');
const router = express.Router();
const viniController = require('../controllers/viniController');

// Defina suas rotas aqui
router.get('/', viniController.vinindex);
router.get('/fotos', viniController.fotosvini);



module.exports = router;