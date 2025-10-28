//const funcoesMatematicas = require('./funcoes_matematicas.js');
// const calculadoraIdade = require('./calculadora_idade.js');
import { somar, subtrair, multiplicar, dividir } from './modulos/funcoes_matematicas.js';
import * as calculadora_idade from './modulos/calculadora_idade.js';

// Exemplo de uso:
console.log(somar(2, 3));
console.log(subtrair(5, 2));
console.log(multiplicar(4, 6));
console.log(dividir(10, 2));

console.log(calculadora_idade.idade("Joédio",1963,2025));