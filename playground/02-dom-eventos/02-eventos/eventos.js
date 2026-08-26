/**
 * ============================================================
 * PLAYGROUND — Eventos
 * ------------------------------------------------------------
 * Módulo: 02 — DOM e Eventos   |   Aula: modulos/02-dom-eventos/02-eventos/
 * Execute: abra playground/02-dom-eventos/02-eventos/index.html no navegador
 * Código comentado para estudar, alterar e QUEBRAR à vontade.
 * Errar aqui faz parte do método!
 * ============================================================
 */

// ===== 1. ADD EVENT LISTENER + O OBJETO EVENT (CLICK) =====

const btnClique = document.querySelector('#btn-clique');
const saidaClick = document.querySelector('#saida-click');

let totalCliques = 0;

// addEventListener(tipoDoEvento, função que reage). É o padrão moderno:
// permite vários ouvintes no mesmo elemento e não sobrescreve os existentes.
btnClique.addEventListener('click', function (evento) {
  // A função recebe um OBJETO EVENT com detalhes do que aconteceu:
  console.log('tipo:', evento.type);                 // 'click'
  console.log('alvo:', evento.target.textContent);   // elemento que sofreu o evento
  console.log('posição X/Y na página:', evento.pageX, evento.pageY);

  totalCliques++;
  saidaClick.textContent = `Cliques: ${totalCliques}`;

  // Detalhe didático: quando o usuário segura Shift, damos um presente.
  if (evento.shiftKey) {
    saidaClick.textContent += ' (Shift detectado!)';
  }
});

// ===== 2. EVENTO INPUT: CADA TECLA DISPARA UMA REAÇÃO =====

const campoLive = document.querySelector('#campo-live');
const saidaLive = document.querySelector('#saida-live');

campoLive.addEventListener('input', function (evento) {
  const texto = evento.target.value; // value = conteúdo atual do campo

  // Espelhamos ao vivo e mostramos informações derivadas:
  saidaLive.textContent = `"${texto}" (${texto.length} caracteres)`;

  if (texto.length > 20) {
    saidaLive.style.color = 'red'; // feedback visual direto pelo estilo
  } else {
    saidaLive.style.color = '';    // volta à cor padrão
  }
});

// input é melhor que keydown para validar texto: também pega colar e apagar.

// ===== 3. MOUSEOVER / MOUSEOUT: ENTRADA E SAÍDA DO PONTEIRO =====

const areaHover = document.querySelector('#area-hover');

areaHover.addEventListener('mouseover', function () {
  areaHover.style.background = '#7bd88f';          // verde ao entrar
  areaHover.textContent = 'Dentro da área!';
});

areaHover.addEventListener('mouseout', function () {
  areaHover.style.background = '#ffd7d7';          // rosa ao sair
  areaHover.textContent = 'Passe o mouse por aqui';
});

// Alternativa mais enxuta: mouseenter/mouseleave não dispara nos filhos.

// ===== 4. DELEGAÇÃO DE EVENTOS NA <ul> =====

const lista = document.querySelector('#lista-delegada');
const campoItem = document.querySelector('#campo-item');
const btnAdicionar = document.querySelector('#btn-adicionar');

function adicionarItem() {
  const texto = campoItem.value.trim();
  if (texto === '') return;         // ignora campo vazio

  const item = document.createElement('li');
  item.textContent = texto;
  lista.appendChild(item);
  campoItem.value = '';
}

btnAdicionar.addEventListener('click', adicionarItem);

// DELEGAÇÃO: em vez de um addEventListener por <li>, colocamos UM ouvinte
// no pai (<ul>) e descobrimos qual filho foi clicado via event.target.
// Vantagens: menos memória e funciona para itens criados DEPOIS.
lista.addEventListener('click', function (evento) {
  // closest garante que clicamos num <li> mesmo se ele ganhar filhos futuramente;
  // se o clique foi no espaço entre itens, closest devolve null e ignoramos.
  const itemClicado = evento.target.closest('li');

  if (!itemClicado) return;         // clique fora de qualquer li: nada a fazer

  console.log('target:', evento.target.tagName, '| currentTarget:', evento.currentTarget.tagName);

  itemClicado.remove();             // aqui: clicar no item o remove da lista
});

// currentTarget = onde o ouvinte está (o ul) | target = onde o clique caiu (o li).
// O evento "sobe" do filho para o pai — esse fenômeno chama-se BUBBLING.

// ===== EXPERIMENTE =====
// 1) Registre também dblclick no botão e conte cliques duplos separadamente.
// 2) Na delegação, troque remove() por classList.toggle('comprado').
// 3) Use evento.key num keydown global (document) e logue cada tecla pressionada.
