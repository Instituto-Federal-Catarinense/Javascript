const funcoes = require('./funcoesmatematicas');

const calculadora_idade = require ('./calculadora_idade');

const resultadoSoma = funcoes.soma(5, 3);
console.log(`Soma: ${resultadoSoma}`);

const resultadoSubtracao = funcoes.subtrai(10, 4);
console.log(`Subtração: ${resultadoSubtracao}`);

const resultadoMultiplicacao = funcoes.multiplica(5, 5);
console.log(`Multiplicação: ${resultadoMultiplicacao}`);

const resultadoDivisao = funcoes.divide(169, 13);
console.log(`Divisão: ${resultadoDivisao}`);

console.log(calculadora_idade.idade("joão", 2000, 2050));