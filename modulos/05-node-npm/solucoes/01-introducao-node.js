/** SOLUÇÃO-MODELO — 01-introducao-node | Enunciado: exercícios 1 e 2 de ../01-introducao-node/exercicios.md | Como rodar: node 01-introducao-node.js
 *
 * Exercício 1 (diagnóstico da instalação) — saída registrada no terminal desta máquina:
 *   $ node -v   -> v25.9.0
 *   $ npm -v    -> 11.12.1
 *   Linha que prova a instalação numa máquina nova: `node -v`.
 *   Se o Node não existir, o próprio shell responde "command not found";
 *   se imprimir uma versão (qualquer uma), o runtime está instalado e no PATH.
 *
 * Exercício 2 (olá, loja!) — imprime três linhas:
 *   1) saudação;
 *   2) nome do módulo atual (`__filename` dispensa qualquer export);
 *   3) total de produtos de um array fixo calculado com `.length`.
 */

// Exercício 2 — "Olá, loja!"
const produtos = ['arroz', 'feijao', 'cafe'];

console.log('Olá! Bem-vindo à loja da trilha de JavaScript.');
console.log(`Módulo atual: ${__filename}`);
console.log(`Total de produtos cadastrados: ${produtos.length}`);

// DISCUSSÃO:
// - Todo código top-level roda na ordem em que aparece: sem `main`, sem navegador.
// - `__filename` já existe em qualquer módulo CommonJS; nas próximas aulas
//   aparecem `__dirname`, `process.argv` e `process.env`.
// - O exercício 1 é conceitual de propósito: diagnosticar ambiente é o primeiro
//   passo antes de culpar o código por falhas de instalação.
