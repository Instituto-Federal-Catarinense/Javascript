/** SOLUÇÃO-MODELO — 05-testes (soma.test.js ampliado) | Enunciado: exercício 1 de ../05-testes/exercicios.md | Como rodar: npx jest solucoes/05-testes (a partir da raiz)
 *
 * Amplia a cobertura da soma existente da AULA (reaproveitamos o módulo
 * original em ../../05-testes/soma.js — nenhum código duplicado):
 * caso feliz, números negativos, decimais (0.1 + 0.2) e zero mais zero.
 */
const soma = require('../../05-testes/soma');

describe('soma — casos básicos', () => {
  test('soma dois positivos', () => {
    expect(soma(2, 3)).toBe(5);
  });

  test('soma dois negativos', () => {
    expect(soma(-2, -3)).toBe(-5);
  });

  test('zero mais zero é zero', () => {
    expect(soma(0, 0)).toBe(0);
  });
});

describe('soma — ponto flutuante', () => {
  // 0.1 + 0.2 vale 0.30000000000000004 em binário: toBe(0.3) FALHARIA.
  test('0.1 + 0.2 é próximo de 0.3 (toBeCloseTo)', () => {
    expect(soma(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test('e de fato NÃO é exatamente 0.3 para toBe', () => {
    expect(soma(0.1, 0.2)).not.toBe(0.3);
  });
});

// DISCUSSÃO:
// - toBeCloseTo existe justamente para aritmética binária de ponto flutuante;
//   comparar dinheiro/decimais com toBe é armadilha clássica.
// - Agrupar com describe dá nomes contextuais no relatório do Jest e permite
//   rodar subconjuntos: npx jest -t 'ponto flutuante'.
