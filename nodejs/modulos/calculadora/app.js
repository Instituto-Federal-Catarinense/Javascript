const funcoesMatematicas = require('./funcoes_matematicas');
const calculadora_idade = require('./calculadora_idade');

// Utilizando as funções importadas //
const resultadoSoma = funcoesMatematicas.soma(5, 3);
console.log(`Resultado da soma: ${resultadoSoma}`);


const resultadoSubtracao = funcoesMatematicas.subtrai(10, 4);
console.log(`Resultado da subtração: ${resultadoSubtracao}`);


const resultadoMultiplicacao = funcoesMatematicas.multiplica(6, 7);
console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`);

const resultadoDivisao = funcoesMatematicas.divide(20, 5);
console.log(`Resultado da divisão: ${resultadoDivisao}`);

console.log(calculadora_idade.idade('Asafe', 2008, 2040));