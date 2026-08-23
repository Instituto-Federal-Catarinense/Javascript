const express = require('express'); const mongoose = require('mongoose'); const Usuario = require('./models/Usuario');
const app = express(); app.use(express.json());
app.get('/usuarios', async (req, res, next) => { try { res.json(await Usuario.find()); } catch (erro) { next(erro); } });
if (require.main === module) mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/aula').then(() => app.listen(3003, () => console.log('API em 3003'))).catch(console.error);
module.exports = app;