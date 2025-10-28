const produtosModel = require('../models/produtosModel');

module.exports = {

  produtos: (req, res) => {
    res.sendFile('produtos.html', { root: './views'});
  },

  camisetas: (req, res) => {
    res.sendFile('camisetas.html', { root: './views'});
  },

  formCadastrar: (req, res) => {
    res.sendFile('formCadastrar.html', { root: './views'});
  },

  cadastrar: (req, res) => {
    const { id, descricao, quantidade, preco } = req.body;
    const mensagemCadastro = produtosModel.mensagemCadastro(id, descricao, quantidade, preco);
    res.send(`<h1>${mensagemCadastro}</h1>`);
  },
};