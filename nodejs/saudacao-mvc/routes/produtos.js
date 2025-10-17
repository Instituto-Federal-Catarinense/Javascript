const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');

router.get('/', siteController.produtos);
router.get('/camiseta', siteController.camiseta);



module.exports = router;