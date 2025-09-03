const modulo = require('./meuModulo'); // Importando o módulo
const modulo2 = require('./calculadora_idade');

const mensagem = modulo.saudacao('Erick'); // Executando a função
const idade = modulo2.idade(2008);
console.log(mensagem + ` Em 2025 você terá ${idade} anos de idade`);