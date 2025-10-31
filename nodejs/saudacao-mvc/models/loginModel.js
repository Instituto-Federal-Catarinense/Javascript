const { verificado } = require("../controllers/clientesController")

module.exports = {
    autenticar: (usuario, senha) => {
        let acesso;
        // ...autenticação de exemplo...
        if (usuario === 'admin' && senha === '123') {
            acesso = "liberado";
        }else {
            acesso
        }
        return "Ola, ${usuario}, seu acesso foi ${acesso}"
}};