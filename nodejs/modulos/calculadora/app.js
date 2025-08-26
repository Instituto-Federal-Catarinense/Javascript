const funcoesMatematicas = require('./funcoes_matematicas');

const resultadoSoma = funcoesMatematicas.somar(5, 3);
console.log(`Resultado da soma: ${resultadoSoma}`);

const resultadoSubtracao = funcoesMatematicas.subtrair(5, 3);
console.log(`Resultado da subtração: ${resultadoSubtracao}`);

const resultadoMultiplicacao = funcoesMatematicas.multiplicar(5, 3);
console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`);

const resultadoDivisao = funcoesMatematicas.dividir(5, 3);
console.log(`Resultado da divisão: ${resultadoDivisao}`);

const resultadoIdade = funcoesMatematicas.idade(2008);
console.log(`Resultado da idade: ${resultadoIdade}`);
