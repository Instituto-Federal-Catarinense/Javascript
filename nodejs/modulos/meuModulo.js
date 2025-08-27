const { calculadora } = require("./calc");

function saudacao(nome, idade) {
    const x = calculadora(idade)
    
    return `Olá, ${nome}! Bem-vindo ao Node.js!, vc tem ${x} anos`;
}

// Exportando a função para que possa ser usada em outros arquivos
module.exports = {
    saudacao
};