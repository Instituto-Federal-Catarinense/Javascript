/**
 * SOLUÇÃO-MODELO — Variáveis e Escopo
 * Enunciado resolvido: exercícios 1 e 2 de modulos/01-fundamentos/00-variaveis-e-escopo/exercicios.md
 * Execute: node modulos/01-fundamentos/solucoes/00-variaveis-e-escopo.js
 */

// EXERCÍCIO 1 — Cartão de transporte
// Só o saldo muda ao longo do programa, então apenas ele recebe let;
// TARIFA e PASSAGEIRO nunca são reatribuídos, logo ficam em const.
const TARIFA = 4.5;
const PASSAGEIRO = 'Beatriz';
let saldo = 12.0;

saldo = saldo - TARIFA;
saldo = saldo - TARIFA;

// Template literal monta o recibo; toFixed(2) garante os centavos visíveis.
console.log(`Passageira ${PASSAGEIRO} | Saldo final: R$ ${saldo.toFixed(2)}`);

// EXERCÍCIO 2 — Preveja a saída (hoisting)
// Previsão escrita ANTES de rodar:
//   linha 1: undefined           (var é içado já declarado, mas sem valor)
//   linha 2: Embarque imediato   (declaração de função é içada completa)
console.log(portao);
var portao = 'P7';
anunciarEmbarque();
function anunciarEmbarque() {
  console.log('Embarque imediato');
}

// Por que portao não deu erro: o hoisting do var move APENAS a declaração para o
// topo do escopo, inicializando-a como undefined; a atribuição fica na linha original.
// Se fosse let portao, a variável existiria antes da declaração, mas dentro da
// Zona Morta Temporal: o mesmo console.log lançaria
// "ReferenceError: Cannot access 'portao' before initialization".

// DISCUSSÃO:
// 1) Erro comum: usar var por hábito. Além do hoisting, var ignora escopo de bloco,
//    o que gera bugs difíceis em laços e condicionais. Prefira const e só use let
//    quando precisar reatribuir.
// 2) Variação possível: o recibo do exercício 1 pode ser montado com um laço que
//    debita N vezes — útil quando a quantidade de passagens vem de uma variável.
// 3) Detalhe numérico: 12 - 4.5 - 4.5 dá exatamente 3 porque 0.5 tem representação
//    binária exata; com tarifas como 4.10 surgiriam resíduos de ponto flutuante e
//    o toFixed(2) passaria a ser obrigatório até para valores "redondos".
