/**
 * SOLUÇÃO-MODELO — Arrays
 * Enunciado resolvido: exercícios 1 e 2 de modulos/01-fundamentos/08-arrays/exercicios.md
 * Execute: node modulos/01-fundamentos/solucoes/08-arrays.js
 */

// EXERCÍCIO 1 — Carrinho da lojinha
const carrinho = [12.5, 7.9, 23.0, 4.5];

// O cliente acrescenta o chocolate...
carrinho.push(3.2);

// ...e desiste do item mais caro: localizamos o índice pelo maior valor
// e removemos com splice, que muta o array a partir de uma posição.
const indiceMaisCaro = carrinho.indexOf(Math.max(...carrinho));
carrinho.splice(indiceMaisCaro, 1);

const subtotal = carrinho.reduce((soma, preco) => soma + preco, 0);
console.log(`Itens: ${carrinho.length} | Subtotal: R$ ${subtotal.toFixed(2)}`);

// EXERCÍCIO 2 — Promoção da semana
const precos = [45.9, 15.5, 8.75, 32.0, 19.99, 5.2];

// filter seleciona sem tocar na origem; map transforma cada candidato
// aplicando os 10% de desconto sobre uma cópia dos valores.
const candidatosPromocao = precos.filter((preco) => preco < 20);
const precosPromocionais = candidatosPromocao.map((preco) => preco * 0.9);

const formatarMoeda = (preco) => `R$ ${preco.toFixed(2)}`;
console.log(`Candidatos (< R$ 20): ${candidatosPromocao.map(formatarMoeda).join(', ')}`);
console.log(`Com 10% off: ${precosPromocionais.map(formatarMoeda).join(', ')}`);

// DISCUSSÃO:
// 1) push/pop/splice/sort MUTAM o array; map/filter/slice devolvem arrays novos.
//    Onde a lista original importa (histórico, log), copie com [...array] primeiro.
// 2) reduce exige o valor inicial (0) quando soma números; sem ele, o primeiro
//    elemento viraria acumulador e um array vazio lançaria TypeError.
// 3) Soma de ponto flutuante pode gerar resíduos (0.1 + 0.2 !== 0.3); para
//    exibir dinheiro, toFixed(2) resolve a parte visual do problema.
