const produtosModel = require('../models/produtosModel');
module.exports = {

    produtos: (req, res) => {
        res.sendFile('produtos.html' , { root: './views' });
    },

    camiseta: (req, res) => {
        res.sendFile('camiseta.html' , { root: './views' });
},
formCadastrar: (req, res) => {
    res.sendFile('formCadastrar.html' , { root: './views' });
},
cadastrar: (req, res) => {
    const { id, descricao, quantidade, preco } = req.body;
    const mensagemCadastro = produtosModel.cadastrar(id, descricao, quantidade, preco);
    res.send(`<h1>${mensagemCadastro}<h1>`);
}
}; 
