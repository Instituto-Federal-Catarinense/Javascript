const calculadora = require('./calculadora');
const calculaIdade = require('./calcula_idade')

const resultadoSoma = calculadora.soma(2, 3);
const resultadoDivisao = calculadora.divisao(10, 2);
const resultadoIdade = calculaIdade.idade(2008)

console.log(`Em 2025 você tem ${resultadoIdade} anos`)