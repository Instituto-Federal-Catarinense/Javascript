/** SOLUÇÃO-MODELO — 02-modulos-nativos | Enunciado: exercício 1 de ../02-modulos-nativos/exercicios.md | Como rodar: node app.js (dentro desta pasta)
 *
 * Recria o par do exemplo da aula: `meu-modulo.js` exporta a função,
 * este arquivo importa com `require` e imprime com um nome próprio.
 */
const { saudacao } = require('./meu-modulo');

// Troque 'Maria' pelo seu nome ao reexecutar.
console.log(saudacao('Maria'));

// DISCUSSÃO:
// - `require('./meu-modulo')` devolve exatamente o objeto apontado por
//   `module.exports`; por isso dá para desestruturar `{ saudacao }`.
// - O caminho RELATIVO precisa do prefixo `./` — sem ele o Node procura um
//   módulo nativo ou um pacote do npm com esse nome e falha.
// - Exercício 2 da lista segue a mesma ideia trocando o par por
//   matematica.js/app-matematica.js; exercícios 4 a 6 exploram fs, sondagem
//   do require e estado privado (encapsulamento via escopo de módulo).
