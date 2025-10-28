const clientesModel = require('../models/clientesModel');

module.exports = {

  clientes: (req, res) => {
    res.sendFile('clientes.html', { root: './views'});
  },

  formulario: (req, res) => {
    res.sendFile('formularioclientes.html', { root: './views'});
  },

  login: (req, res) => {
    const { nome, email, senha } = req.body;
    const mensagemLogin = clientesModel.mensagemLogin(nome, senha);
    res.send(`<h1>${mensagemLogin}</h1>`);
  }
};