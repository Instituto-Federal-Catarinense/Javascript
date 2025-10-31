const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

// Middleware para arquivos estáticos
app.use(express.static('public'));

// Middleware para ler dados de formulários
app.use(express.urlencoded({ extended: true }));

// Rotas
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

//user rotes
const usersRoutes = require('./routes/users');  
app.use('/users', usersRoutes);

  //produstos routes
  const produtosRoutes = require('./routes/produtos');
  app.use('/produtos', produtosRoutes);

  //clientes routes
  const clientesRoutes = require('./routes/clientes');
  app.use('/clientes', clientesRoutes);

  //vini rotas
  const viniRoutes = require('./routes/vini');
  app.use('/vini', viniRoutes);

// Servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);

});
