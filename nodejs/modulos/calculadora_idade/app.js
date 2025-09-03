const modulo = require('./meuModulo'); // Importando o módulo
const calculadora_idade = require('./calculadora_idade');

const mensagem = modulo.saudacao('Franciny'); // Executando a função
const idadeEm2025 = calculadora_idade.idade('Franciny', 2008);

console.log(mensagem);
console.log(idadeEm2025);