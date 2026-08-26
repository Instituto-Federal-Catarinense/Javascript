/**
 * SOLUÇÃO-MODELO — Eventos
 * Enunciado resolvido: exercícios 1 e 2 de modulos/02-dom-eventos/02-eventos/exercicios.md
 * (placar de dois times com "+1" e botão "Zerar partida" com histórico)
 * Abra: modulos/02-dom-eventos/solucoes/02-eventos/index.html no navegador
 */

const saidaCasa = document.querySelector('#pontos-casa');
const saidaVisitante = document.querySelector('#pontos-visitante');
const historico = document.querySelector('#historico');

// Estado numérico separado do texto exibido: os handlers mudam o estado
// e uma única função reflete o estado na tela.
let pontosCasa = 0;
let pontosVisitante = 0;

function renderizarPlacar() {
  saidaCasa.textContent = pontosCasa;
  saidaVisitante.textContent = pontosVisitante;
}

function registrarNoHistorico(linha) {
  const item = document.createElement('li');
  item.textContent = linha;
  historico.appendChild(item); // anexa ao fim; o histórico nunca é apagado
}

document.querySelector('#ponto-casa').addEventListener('click', () => {
  pontosCasa += 1;
  renderizarPlacar();
});

document.querySelector('#ponto-visitante').addEventListener('click', () => {
  pontosVisitante += 1;
  renderizarPlacar();
});

document.querySelector('#zerar').addEventListener('click', () => {
  // Registra ANTES de zerar: depois os pontos já seriam "Fim: 0 x 0".
  registrarNoHistorico(`Fim: ${pontosCasa} x ${pontosVisitante}`);
  pontosCasa = 0;
  pontosVisitante = 0;
  renderizarPlacar();
});

renderizarPlacar();

// Roteiro de teste manual:
// 1) Clicar "+1 Casa" três vezes e "+1 Visitante" duas -> placar 3 x 0... 3 x 2.
// 2) Clicar "Zerar partida" -> histórico ganha "Fim: 3 x 2" e o placar volta a 0.
// 3) Repetir alguns cliques e zerar de novo -> novas linhas acumulam no histórico.

// DISCUSSÃO:
// 1) Erro comum: guardar a pontuação só no textContent e ler de lá
//    (saidaCasa.textContent += 1 concatena strings!). Estado e tela são coisas
//    distintas; a tela espelha o estado, nunca o contrário.
// 2) Dois listeners independentes funcionam bem com poucos botões fixos; quando os
//    elementos são criados dinamicamente, delegação num contêiner escala melhor
//    (é justamente o exercício 5 da lista).
// 3) Variação: limitar o placar a 25 pontos com verificação dentro do handler
//    ensina a colocar regras de negócio antes da mutação do estado.
