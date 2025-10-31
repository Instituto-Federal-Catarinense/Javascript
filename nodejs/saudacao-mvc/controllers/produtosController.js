const produtosModel = require('../models/produtosModel');

module.exports = {
    Produtos: (req, res) => {
        res.sendFile("produtos.html", { root: "./views" });
    }
,
    camisetas: (req, res) => {
        res.sendFile("camisetas.html", { root: "./views" });;
    }
,
    cadastrarForm: (req, res) => {
        res.sendFile("cadastrarprodutos.html", { root: "./views" });
    }
,
    produtoCadastrado: (req, res) => {
        const { id, descricao, quantidade, preco } = req.body;
        const mensagemCadastro = produtosModel.mensagemCadastro (id, descricao, quantidade, preco);
        res.send(`<h1>${mensagemCadastro}</h1>`);
    }
}
