/**
 * SOLUÇÃO-MODELO — Funções
 * Enunciado resolvido: exercícios 1 e 2 de modulos/01-fundamentos/07-funcoes/exercicios.md
 * Execute: node modulos/01-fundamentos/solucoes/07-funcoes.js
 */

// EXERCÍCIO 1 — Média do boletim (declaração de função)
// Multiplica por 10, arredonda e divide por 10: média com UMA casa decimal.
function media(nota1, nota2) {
  return Math.round(((nota1 + nota2) / 2) * 10) / 10;
}

// Mesmo comportamento em arrow function — corpo curto dispensa chaves e return.
const mediaComoArrow = (nota1, nota2) => Math.round(((nota1 + nota2) / 2) * 10) / 10;

console.log(`Declaração: ${media(8, 7)} | Arrow: ${mediaComoArrow(8, 7)}`);
console.log(`Declaração: ${media(6.5, 5)} | Arrow: ${mediaComoArrow(6.5, 5)}`);

// EXERCÍCIO 2 — Situação do aluno
// Parâmetro padrão: mediaMinima assume 6 quando o argumento chega como undefined.
function situacao(mediaAluno, mediaMinima = 6) {
  if (mediaAluno >= mediaMinima) return 'Aprovado';
  if (mediaAluno >= 4) return 'Recuperação';
  return 'Reprovado';
}

console.log(situacao(media(8, 7))); // usa o mínimo padrão 6 -> Aprovado
console.log(situacao(4.5)); // entre 4 e 6 -> Recuperação
console.log(situacao(3.9)); // abaixo de 4 -> Reprovado
console.log(situacao(6.5, 7)); // turma avançada com mínimo especial 7

// DISCUSSÃO:
// 1) Diferença sutil entre os formatos: declarações sofrem hoisting e podem ser
//    chamadas antes da linha onde aparecem; arrow functions e expressões seguem
//    a regra das constantes (TDZ) — chamá-las cedo demais lança ReferenceError.
// 2) O parâmetro padrão só entra com undefined; situacao(5, null) recebe null de
//    verdade e compara 5 >= null (false!) — valide entradas externas antes.
// 3) Variação: para boletins reais, aceite qualquer quantidade de notas com rest
//    (...notas) e reduza com reduce, como no exercício 4 da lista.
