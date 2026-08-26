/** SOLUÇÃO-MODELO — 05-testes (modulo desconto.js) | Enunciado: exercícios 2 e 3 de ../05-testes/exercicios.md | Uso: testado por desconto.test.js (npm test) */

// Regras do exercício 3:
//   - percentual negativo ou maior que 100 -> Error('Percentual deve estar entre 0 e 100');
//   - valor não numérico                   -> Error('Valor deve ser um número').
function calcularDesconto(valor, percentual) {
  if (typeof valor !== 'number' || Number.isNaN(valor)) {
    throw new Error('Valor deve ser um número');
  }
  if (typeof percentual !== 'number' || Number.isNaN(percentual) || percentual < 0 || percentual > 100) {
    throw new Error('Percentual deve estar entre 0 e 100');
  }
  return valor - valor * (percentual / 100);
}

module.exports = calcularDesconto;

// DISCUSSÃO:
// - Mensagens de erro ESTÁVEIS são parte do contrato: os testes usam
//   toThrow('mensagem exata'), então renomear o texto quebra testes — e isso é
//   bom, pois consumidores podem depender da mensagem.
// - Number.isNaN cobre o caso calcularDesconto(NaN, 10), que passaria pelo
//   typeof === 'number'.
