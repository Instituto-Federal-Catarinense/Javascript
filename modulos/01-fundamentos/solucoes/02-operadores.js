/**
 * SOLUÇÃO-MODELO — Operadores
 * Enunciado resolvido: exercícios 1 e 2 de modulos/01-fundamentos/02-operadores/exercicios.md
 * Execute: node modulos/01-fundamentos/solucoes/02-operadores.js
 */

// EXERCÍCIO 1 — Troco da compra
// A precedência já resolve: * acontece antes de -. Sem necessidade de parênteses aqui.
const quantidadeCadernos = 4;
const precoCaderno = 3.75;
const notaRecebida = 20;

const totalCompra = precoCaderno * quantidadeCadernos;
const troco = notaRecebida - totalCompra;

console.log(`Total: R$ ${totalCompra.toFixed(2)} | Troco: R$ ${troco.toFixed(2)}`);

// EXERCÍCIO 2 — Frete grátis
// O && produz um booleano único; o ternário só traduz esse booleano em texto.
const valorCompra = 162.3;
const ehFidelidade = true;
const ganhaFreteGratis = valorCompra > 150 && ehFidelidade;

console.log(ganhaFreteGratis ? 'Frete grátis aplicado' : 'Frete de R$ 12.90');

// DISCUSSÃO:
// 1) Erro comum: comparar com == e receber coerções surpreendentes ('5' == 5 é
//    true). O critério do módulo pede sempre === / !==.
// 2) ?? versus ||: 0 e '' são falsy e ativariam um padrão escrito com ||;
//    ?? só reage a null/undefined — escolha consciente entre os dois ao definir
//    valores padrão.
// 3) toFixed devolve STRING, não number. Se o valor formatado voltar para cálculo,
//    converta com Number() — senão você estaria somando textos.
