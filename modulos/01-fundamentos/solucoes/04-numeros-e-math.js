/**
 * SOLUÇÃO-MODELO — Números e Math
 * Enunciado resolvido: exercícios 1 e 2 de modulos/01-fundamentos/04-numeros-e-math/exercicios.md
 * Execute: node modulos/01-fundamentos/solucoes/04-numeros-e-math.js
 */

// EXERCÍCIO 1 — Dado de vinte faces
// random() vai de 0 (inclusive) a 1 (exclusive): * 20 leva a 0..19.99,
// floor descarta os decimais e o + 1 desloca o intervalo para 1..20.
function rolarD20() {
  return Math.floor(Math.random() * 20) + 1;
}

const rolagemNormal = rolarD20();
const rolagemVantagem = rolarD20();
const melhorRolagem = Math.max(rolagemNormal, rolagemVantagem);

console.log(
  `Rolagens: ${rolagemNormal}, ${rolagemVantagem} | Resultado com vantagem: ${melhorRolagem}`,
);

// EXERCÍCIO 2 — Pontuação ajustada
// Multiplicar por 10, arredondar e dividir por 10 é o truque padrão para controlar
// casas decimais sem converter para string (caminho alternativo: toFixed).
const mediaBruta = 7.4567;
const mediaAjustada = Math.round(mediaBruta * 10) / 10;

const pontuacaoBrinde = Math.ceil(62.1); // teto: brinde exige sempre para cima
const fichasUsadas = Math.floor(17.9); // piso: fichas são inteiras

console.log(`Média arredondada: ${mediaAjustada}`);
console.log(`Mínimo para brinde: ${pontuacaoBrinde}`);
console.log(`Fichas usadas: ${fichasUsadas}`);

// DISCUSSÃO:
// 1) Erro clássico: Math.random() * 20 SEM o + 1 gera zero e nunca vinte —
//    intervalo errado nas duas pontas. Teste sempre os limites do dado.
// 2) Math.round(-2.5) arredonda para -2 (empates vão para +infinito); defina
//    explicitamente o comportamento esperado quando houver negativos.
// 3) Variação: rolar vários dados com vantagem vira função genérica
//    rolarComVantagem(qtdDados, faces) reaproveitando a mesma fórmula.
