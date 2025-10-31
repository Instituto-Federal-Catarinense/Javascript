module.exports = {
    Clientes: (req, res) => {
        res.sendFile("clientes.html", { root: "./views" });
    }
    ,
    login: (req, res) => {
        res.sendFile("login.html", { root: "./views" });
    },

    verificado: (req, res) => {
        const { usuario, senha } = req.body || {};
        const loginModel = require('../models/loginModel');
        res.send(loginModel.autenticar(usuario, senha));
}}