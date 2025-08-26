const funcoesMatematicas = require('./funcoes_matematicas.js');

// Exemplo de uso:
console.log(funcoesMatematicas.somar(2, 3));
console.log(funcoesMatematicas.subtrair(5, 2));
console.log(funcoesMatematicas.multiplicar(4, 6));
console.log(funcoesMatematicas.dividir(10, 2));

const idade = funcoesMatematicas.calcularIdade(1963)
console.log(`Sua idade é ${idade} anos.`);