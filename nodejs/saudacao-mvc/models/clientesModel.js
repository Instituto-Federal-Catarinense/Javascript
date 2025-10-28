module.exports = {
    mensagemLogin: (nome, senha) => {
        let acesso;

        if (nome === Erick && senha === 1234) {
            acesso = "liberado";
        }
        else {
            acesso = "negado";
        }
        return `Olá, ${nome}. Seu acesso foi ${acesso}`;
    }
};