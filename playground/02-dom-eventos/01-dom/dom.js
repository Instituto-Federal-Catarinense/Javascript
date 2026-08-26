/**
 * ============================================================
 * PLAYGROUND — DOM: selecionar, alterar, criar e remover
 * ------------------------------------------------------------
 * Módulo: 02 — DOM e Eventos   |   Aula: modulos/02-dom-eventos/01-dom/
 * Execute: abra playground/02-dom-eventos/01-dom/index.html no navegador
 * Código comentado para estudar, alterar e QUEBRAR à vontade.
 * Errar aqui faz parte do método!
 * ============================================================
 */

// ===== 1. SELECIONANDO ELEMENTOS =====

// querySelector aceita QUALQUER seletor CSS ('#id', '.classe', 'tag').
const titulo = document.querySelector('#titulo');
const paragrafo = document.querySelector('#paragrafo');
const lista = document.querySelector('#lista');
const campoItem = document.querySelector('#campo-item');

// getElementById é a forma antiga (e rápida) de pegar por id:
const btnTexto = document.getElementById('btn-texto');

// Sempre confirme no console se a seleção funcionou antes de continuar:
console.log('Elementos selecionados:', titulo, paragrafo, lista, btnTexto);

// ===== 2. ALTERANDO TEXTO E ESTILO =====

// textContent troca APENAS o texto (seguro, ignora tags HTML).
titulo.textContent = 'DOM manipulado com sucesso!';

// style acessa propriedades CSS em camelCase (background-color → backgroundColor).
titulo.style.color = 'darkblue';

// Botão que muda o texto do parágrafo a cada clique:
let cliques = 0;
btnTexto.addEventListener('click', function () {
  cliques++; // conta quantas vezes o botão foi clicado
  paragrafo.textContent = `Você clicou ${cliques} vez(es).`;
});

// classList.toggle LIGA a classe se está desligada, DESLIGA se está ligada:
const btnDestacar = document.querySelector('#btn-destacar');
btnDestacar.addEventListener('click', function () {
  // Preferimos alternar CLASSES em vez de setar estilos um a um.
  paragrafo.classList.toggle('destaque');
});

// ===== 3. LENDO E TROCANDO ATRIBUTOS =====
const link = document.querySelector('#link');
const btnLink = document.querySelector('#btn-link');

btnLink.addEventListener('click', function () {
  // getAttribute lê o valor atual do atributo:
  console.log('href atual:', link.getAttribute('href'));

  // setAttribute grava novo valor (aqui: trocamos o destino e o texto junto).
  const indoParaCurso = link.getAttribute('href').includes('ifc.edu.br');

  if (indoParaCurso) {
    link.setAttribute('href', 'https://developer.mozilla.org/pt-BR/');
    link.textContent = 'Documentação MDN';
  } else {
    link.setAttribute('href', 'https://www.ifc.edu.br/');
    link.textContent = 'Site do IFC';
  }
  // target já existe no HTML; garantimos que abra em nova aba:
  link.setAttribute('target', '_blank');
});

// ===== 4. CRIANDO ELEMENTOS (lista de tarefas) =====
const btnAdicionar = document.querySelector('#btn-adicionar');

function adicionarItem() {
  const texto = campoItem.value.trim(); // trim evita itens só de espaços

  if (texto === '') {
    console.log('Nada digitado: item ignorado.');
    return; // early return: não cria li vazio
  }

  // 3 passos para criar um elemento: criar → configurar → inserir na página.
  const item = document.createElement('li'); // 1) criado, mas ainda FORA da página
  item.textContent = texto;                  // 2) configurado

  lista.appendChild(item);                   // 3) inserido como último filho do ul
  campoItem.value = '';                      // limpa o campo para a próxima digitação
  campoItem.focus();                         // devolve o cursor ao campo (usabilidade)
}

btnAdicionar.addEventListener('click', adicionarItem);

// Bônus: Enter dentro do campo também adiciona (ver módulo de Eventos).
campoItem.addEventListener('keydown', function (evento) {
  if (evento.key === 'Enter') {
    adicionarItem();
  }
});

// ===== 5. REMOVENDO ELEMENTOS =====
const btnRemoverPrimeiro = document.querySelector('#btn-remover-primeiro');
const btnRemoverUltimo = document.querySelector('#btn-remover-ultimo');

btnRemoverPrimeiro.addEventListener('click', function () {
  const primeiro = lista.firstElementChild; // primeiro <li> filho (ou null)

  if (primeiro) {
    primeiro.remove();      // remove() apaga o próprio elemento da página
  } else {
    console.log('A lista já está vazia.');
  }
});

btnRemoverUltimo.addEventListener('click', function () {
  const ultimo = lista.lastElementChild;

  // Forma "antiga" de remover, ainda comum em códigos legados:
  if (ultimo) {
    ultimo.parentNode.removeChild(ultimo); // pai.removeChild(filho)
  } else {
    console.log('A lista já está vazia.');
  }
});

// ===== EXPERIMENTE =====
// 1) Faça cada novo item entrar no TOPO da lista (pesquise prepend()).
// 2) Adicione um botão "Limpar tudo" que use lista.innerHTML = ''.
// 3) Conte os itens da lista com lista.children.length e exiba num h3.
