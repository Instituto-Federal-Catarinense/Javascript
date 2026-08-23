const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs'); app.set('views', path.join(__dirname, 'views'));
app.get('/', (req, res) => res.render('index', { titulo: 'Trilha Node.js', itens: ['Express', 'EJS'] }));
app.get('/sobre', (req, res) => res.render('sobre', { titulo: 'Sobre a trilha' }));
if (require.main === module) app.listen(3001, () => console.log('Servidor em http://localhost:3001'));
module.exports = app;