/** SOLUÇÃO-MODELO — 05-testes (desconto.test.js) | Enunciado: exercícios 2 e 3 de ../05-testes/exercicios.md | Como rodar: npm install && npx jest solucoes/05-testes */
const calcularDesconto = require('./desconto');

describe('calcularDesconto', () => {
  describe('casos felizes', () => {
    test('aplica 10% sobre 200 e devolve 180', () => {
      expect(calcularDesconto(200, 10)).toBe(180);
    });

    test('percentual 0 devolve o valor integral', () => {
      expect(calcularDesconto(200, 0)).toBe(200);
    });

    test('valor 0 devolve 0', () => {
      expect(calcularDesconto(0, 25)).toBe(0);
    });
  });

  describe('exceções', () => {
    test('recusa percentual negativo', () => {
      expect(() => calcularDesconto(100, -1)).toThrow('Percentual deve estar entre 0 e 100');
    });

    test('recusa percentual acima de 100', () => {
      expect(() => calcularDesconto(100, 101)).toThrow('Percentual deve estar entre 0 e 100');
    });

    test('recusa valor não numérico', () => {
      expect(() => calcularDesconto('200', 10)).toThrow('Valor deve ser um número');
    });
  });
});

// DISCUSSÃO:
// - `expect(() => ...).toThrow('...')` é a forma canônica de testar exceções
//   (critério de aceite da lista) — nada de try/catch manual.
// - Passar a MENSAGEM ao toThrow garante que o erro certo foi lançado, não
//   apenas "algum" erro.
// - Rodar: a partir da raiz do repositório, `npx jest solucoes/05-testes`.
