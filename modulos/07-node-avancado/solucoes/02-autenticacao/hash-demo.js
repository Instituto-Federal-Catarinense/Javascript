/** SOLUÇÃO-MODELO — 02-autenticacao (parte 1: hash-demo.js) | Enunciado: exercício 1 de ../02-autenticacao/exercicios.md | Como rodar: npm install bcryptjs && node hash-demo.js */
const bcrypt = require('bcryptjs');

const senha = 'senha123';

// Hash gerado DUAS vezes para a MESMA senha.
const primeiroHash = bcrypt.hashSync(senha, 10);
const segundoHash = bcrypt.hashSync(senha, 10);

console.log(primeiroHash);
console.log(segundoHash);
console.log(`Primeiro hash confere? ${bcrypt.compareSync(senha, primeiroHash)}`);
console.log(`Segundo hash confere? ${bcrypt.compareSync(senha, segundoHash)}`);

/* EXPLICAÇÃO (pedida pelo enunciado):
 * Os dois hashes são DIFERENTES porque bcrypt gera um salt aleatório novo a
 * cada chamada de hashSync — e esse salt fica EMBUTIDO no próprio resultado
 * (formato $2b$10$<salt><hash>). compareSync extrai o salt de dentro do hash,
 * recalcula com a senha candidata e compara só o resultado final; por isso os
 * DOIS passam na verificação mesmo sendo textos distintos.
 */

// DISCUSSÃO:
// - Salt embutido = não precisa de tabela separada de salts.
// - O custo 10 são as rodadas de cálculo (2^10); subir o número encarece ataques
//   de força bruta, mas também aumenta a latência do login.
// - Hash nunca "volta atrás": para validar, sempre compare, nunca descriptografe.
