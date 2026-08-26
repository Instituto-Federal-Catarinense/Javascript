/**
 * SOLUÇÃO-MODELO — Web Storage
 * Enunciado resolvido: exercício 1 de modulos/02-dom-eventos/04-web-storage/exercicios.md
 * (lista persistida na chave 'compras-casa' com semente inicial de três itens)
 * Abra: modulos/02-dom-eventos/solucoes/04-web-storage/index.html no navegador
 */

const CHAVE_LISTA = 'compras-casa';
const ITENS_SEMENTE = ['Arroz', 'Café', 'Detergente'];

const lista = document.querySelector('#lista');
const campoNovoItem = document.querySelector('#novo-item');

// getItem devolve null quando a chave nunca foi gravada — esse null é o sinal
// de primeira execução para plantar a semente. A cópia ([...]) protege a
// constante original de mutações acidentais.
function lerLista() {
  const textoSalvo = localStorage.getItem(CHAVE_LISTA);
  if (textoSalvo === null) return [...ITENS_SEMENTE];
  return JSON.parse(textoSalvo);
}

function renderizarLista(itens) {
  lista.innerHTML = itens.map((item) => `<li>${item}</li>`).join('');
}

// Toda gravação já redesenha a tela: storage e interface nunca divergem.
function gravarLista(itens) {
  localStorage.setItem(CHAVE_LISTA, JSON.stringify(itens));
  renderizarLista(itens);
}

let itensCompra = lerLista();
if (localStorage.getItem(CHAVE_LISTA) === null) {
  gravarLista(itensCompra); // persiste a semente já na primeira execução
}
renderizarLista(itensCompra);

document.querySelector('#form-item').addEventListener('submit', (evento) => {
  evento.preventDefault();
  const nomeItem = campoNovoItem.value.trim();
  if (nomeItem === '') return;
  itensCompra.push(nomeItem);
  campoNovoItem.value = '';
  gravarLista(itensCompra);
});

document.querySelector('#limpar').addEventListener('click', () => {
  localStorage.removeItem(CHAVE_LISTA);
  itensCompra = lerLista(); // volta à semente: prova que a origem é o storage
  renderizarLista(itensCompra);
});

// Roteiro de teste manual:
// 1) Primeira abertura -> lista com Arroz, Café e Detergente (semente gravada).
// 2) Adicionar "Sabão", recarregar a página -> Sabão sobreviveu.
// 3) DevTools > Application > Local Storage: apagar 'compras-casa' e recarregar
//    -> a semente volta, pois a chave deixou de existir.

// DISCUSSÃO:
// 1) Todo dado vivo só na memória morre no recarregar; por isso cada operação
//    termina em gravarLista — a tela sempre espelha o storage.
// 2) innerHTML com dados do usuário abre espaço para XSS; em produção prefira
//    createElement/textContent ou sanitize o valor antes de injetar.
// 3) O storage guarda apenas strings: JSON.stringify/parse fazem a ponte para
//    arrays e objetos; quando o formato mudar (exercício 3 usa objetos), comece
//    com chave nova ou limpe a antiga para evitar dados em formato misturado.
