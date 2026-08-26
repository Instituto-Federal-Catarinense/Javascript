/**
 * SOLUÇÃO-MODELO — Laços de Repetição
 * Enunciado resolvido: exercícios 1 e 2 de modulos/01-fundamentos/06-lacos-de-repeticao/exercicios.md
 * Execute: node modulos/01-fundamentos/solucoes/06-lacos-de-repeticao.js
 */

// EXERCÍCIO 1 — Multa por atraso
// while combina com "repita enquanto a condição valer": aqui, dia a dia até o 9º.
const MULTA_DIARIA = 0.5;
const DIAS_DE_ATRASO = 9;

let diaCorrente = 1;
let multaAcumulada = 0;

while (diaCorrente <= DIAS_DE_ATRASO) {
  multaAcumulada += MULTA_DIARIA;
  diaCorrente += 1;
}

console.log(`Dia ${DIAS_DE_ATRASO}: multa acumulada de R$ ${multaAcumulada.toFixed(2)}`);

// EXERCÍCIO 2 — Estante numerada
// O teste de manutenção vem ANTES do continue: se a prateleira de parada também
// fosse múltipla de 3, o continue a pularia sem nunca interromper. A ordem das
// condições documenta a prioridade das regras.
const PRATELEIRA_EM_MANUTENCAO = 11;

for (let prateleira = 1; prateleira <= 12; prateleira += 1) {
  if (prateleira >= PRATELEIRA_EM_MANUTENCAO) {
    console.log('Área de manutenção: listagem encerrada');
    break;
  }
  if (prateleira % 3 === 0) continue; // reservada: pula sem imprimir
  console.log(`Prateleira ${prateleira}`);
}

// DISCUSSÃO:
// 1) Erro clássico do while: esquecer de avançar o contador e travar o programa
//    em loop infinito. Se o laço não termina, confira a linha que muda a condição.
// 2) O mesmo acúmulo do exercício 1 caberia numa fórmula fechada
//    (dias * multa); reconhecer quando a matemática dispensa a repetição
//    faz parte do repertório.
// 3) break imprime uma mensagem antes de sair; para sair em silêncio basta remover
//    o console.log — a lógica de parada permanece idêntica.
