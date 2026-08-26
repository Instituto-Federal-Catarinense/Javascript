/**
 * SOLUÇÃO-MODELO — Condicionais
 * Enunciado resolvido: exercícios 1 e 2 de modulos/01-fundamentos/05-condicionais/exercicios.md
 * Execute: node modulos/01-fundamentos/solucoes/05-condicionais.js
 */

// EXERCÍCIO 1 — Ponto do bolo
// Encadear do extremo inferior para cima evita testar faixas duas vezes:
// quem chegou ao segundo if já sabe que tempoMinutos >= 25.
function classificarPonto(tempoMinutos) {
  if (tempoMinutos < 25) return 'Massa crua, aguarde';
  if (tempoMinutos <= 35) return 'Ponto perfeito';
  return 'Passou do ponto';
}

const temposDeTeste = [18, 30, 42];
temposDeTeste.forEach((tempo) => {
  console.log(`${tempo} min -> ${classificarPonto(tempo)}`);
});

// EXERCÍCIO 2 — Menu da cantina
// switch brilha quando há UM valor discreto para casar contra opções fixas.
// Aqui cada case termina em return, então break seria redundante.
function descreverPedido(codigo) {
  switch (codigo) {
  case 1:
    return 'Suco natural — R$ 5.00';
  case 2:
    return 'Pão de queijo — R$ 4.50';
  case 3:
    return 'Vitamina de abacate — R$ 8.00';
  default:
    return 'Código inválido';
  }
}

const codigosDeTeste = [1, 3, 7];
codigosDeTeste.forEach((codigo) => {
  console.log(`Pedido ${codigo}: ${descreverPedido(codigo)}`);
});

// DISCUSSÃO:
// 1) Sem break (ou return) entre cases o fluxo "cai" para o próximo caso
//    (fall-through). Se o switch estivesse solto no meio do código, o break
//    seria obrigatório em cada caso.
// 2) Faixas numéricas em switch exigem truques (switch(true)); para intervalos
//    como os do bolo, if / else if encadeado é mais direto.
// 3) Guard clause (return antecipado) mantém a função plana; else aninhado cresce
//    horizontalmente e esconde os caminhos possíveis de relance.
