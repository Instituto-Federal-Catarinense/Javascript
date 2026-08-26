/**
 * SOLUÇÃO-MODELO — DOM
 * Enunciado resolvido: exercícios 1 e 2 de modulos/02-dom-eventos/01-dom/exercicios.md
 * (botão "Limpar mural" + contador automático de recados)
 * Abra: modulos/02-dom-eventos/solucoes/01-dom/index.html no navegador
 */

const lista = document.querySelector('#lista');
const contador = document.querySelector('#contador');
const botaoLimpar = document.querySelector('#limpar');

// Fonte única de criação de itens: toda mudança passa por aqui e já
// dispara o contador, evitando estados dessincronizados.
function criarItem(texto) {
  const item = document.createElement('li');
  item.textContent = texto;
  lista.appendChild(item);
  atualizarContador();
}

// A quantidade vem da própria árvore (children.length), nunca de variável solta:
// o contador reflete o que está de fato na tela.
function atualizarContador() {
  contador.textContent = `${lista.children.length} recados publicados`;
}

// replaceChildren() esvazia a lista de uma vez; alternativa clássica vista na aula:
// while (lista.firstChild) { lista.removeChild(lista.firstChild); }
botaoLimpar.addEventListener('click', () => {
  lista.replaceChildren();
  atualizarContador();
});

// Recados iniciais para dar conteúdo ao mural nos testes.
['Bem-vindos à turma!', 'Prova no dia 30', 'Monitoria às quintas'].forEach(criarItem);

// Roteiro de teste manual:
// 1) A página carrega com 3 recados e o contador "3 recados publicados".
// 2) Clicar em "Limpar mural": a lista esvazia e o contador vira "0" sem recarregar.

// DISCUSSÃO:
// 1) Erro comum: atualizar a lista sem chamar atualizarContador(); centralizar a
//    criação/remoção numa função só impede esse esquecimento.
// 2) Variação: um MutationObserver observando childList dispararia o contador
//    automaticamente para qualquer mudança, inclusive as feitas por outro código.
// 3) innerHTML = '' também limpa a lista, mas replaceChildren é a API moderna e
//    expressa melhor a intenção de "remover todos os filhos".
