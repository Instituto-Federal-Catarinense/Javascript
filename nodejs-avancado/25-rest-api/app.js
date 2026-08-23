const express = require('express');
const usuarios = require('./routes/usuarios');
const app = express(); app.use(express.json()); app.use('/usuarios', usuarios);
if (require.main === module) app.listen(3002, () => console.log('API em http://localhost:3002'));
module.exports = app;