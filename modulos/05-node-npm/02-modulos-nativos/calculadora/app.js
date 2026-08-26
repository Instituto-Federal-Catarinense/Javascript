import { somar, subtrair, multiplicar, dividir } from './funcoes-matematicas.js';
import * as calculadoraIdade from './calculadora-idade.js';

console.log('Soma: ' + somar(5, 5, 5));
console.log('Subtração: ' + subtrair(5, 3));
console.log('Multiplicação: ' + multiplicar(5, 3));
console.log('Divisão: ' + dividir(5, 0));

console.log(calculadoraIdade.idade('João', 1976, 2050));