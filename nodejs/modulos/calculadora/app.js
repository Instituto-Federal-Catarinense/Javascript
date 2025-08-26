const funcoesMatematicas = require('./funcoes_matematicas');
const calcularIdade = require('./calculaIdade');;

// Exemplo de uso:
console.log('Soma:', funcoesMatematicas.somar(2, 3));
console.log('Subtração:', funcoesMatematicas.subtrair(5, 2));
console.log('Multiplicação:', funcoesMatematicas.multiplicar(4, 3));
console.log('Divisão:', funcoesMatematicas.dividir(10, 2));

console.log('Idade:', calcularIdade.calculaIdade(1990, 2024));