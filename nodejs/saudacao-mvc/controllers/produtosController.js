const produtosModel = require("../models/produtosModel")
module.exports = {

  // produtos

  produtos: (req, res) => {
    res.sendFile('produtos.html', { root: './views' });
  },

  camisetas: (req, res) => {
    res.sendFile('camisetas.html', { root: './views' });
  },
  
  formCadastrar: (req, res) => {
    res.sendFile('cadastrar.html', { root: './views' });
  },

  Cadastrado: (req, res) => {
      const { id, descricao, quantidade, preco } = req.body;
      const mensagem = produtosModel.cadastrarProduto( id, descricao, quantidade, preco );
      res.send(`<h1>${mensagem}</h1>`);
    }
  
};
