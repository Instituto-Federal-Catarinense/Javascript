const produtosModel = require("../models/produtosModel");

module.exports = {

  index: (req, res) => {
    res.sendFile("produtos.html", { root: "./views" });
  },
   camisetas: (req, res) => {
    res.sendFile("camisetas.html", { root: "./views" });
  },

  formulario: (req, res) => {
     res.sendFile("formCadastrar.html", { root: "./views" });
  },

  cadastrar: (req, res) => {
    const { id, descricao, quantidade, valor_unitario } = req.body;

    const mensagemCadastro = produtosModel.cadastrar(
      id,
      descricao,
      quantidade,
      valor_unitario
    );

     res.send(`<h1>${mensagemCadastro}</h1>`);
  },
};