const verificarModel = require('../models/verificarmodel');
module.exports = {


    clientes: (req, res) => {
        res.sendFile('clientes.html' , { root: './views' });
},

    login: (req, res) => {
        res.sendFile('login.html' , { root: './views' });
},

    liberado: (req, res) => {  
    const { nome, senha} = req.body;
     const liberado = verificarModel.gerarverificacao (nome, senha)
     if (liberado == true) {res.sendFile('liberado.html' , { root: './views' });} 
     else {res.sendFile('bloqueado.html', { root: './views' });}; }
};