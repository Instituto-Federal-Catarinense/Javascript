/**
 * ============================================================
 * PLAYGROUND — Arrays
 * ------------------------------------------------------------
 * Módulo: 01 — Fundamentos   |   Aula: modulos/01-fundamentos/08-arrays/
 * Execute: node playground/01-fundamentos/08-arrays.js
 * Código comentado para estudar, alterar e QUEBRAR à vontade.
 * Errar aqui faz parte do método!
 * ============================================================
 */

// ===== 1. CRIANDO E ACESSANDO ARRAYS =====
const frutas = ['maçã', 'banana', 'uva'];

// Índices começam em ZERO. Acesso pela posição entre colchetes:
console.log(frutas[0]);        // 'maçã' (primeira)
console.log(frutas[2]);        // 'uva' (terceira)
console.log(frutas.length);    // 3: quantidade de itens

// .at() aceita índices negativos (conta do fim): ótimo para pegar o último.
console.log(frutas.at(-1));    // 'uva'

// Arrays são mutáveis: mudamos posições direto pelo índice.
frutas[1] = 'pera';
console.log(frutas);

// Um array aceita tipos mistos (mas evite: prefira listas homogêneas).
const misto = ['texto', 42, true];

// ===== 2. MUTADORES BÁSICOS: PILHA E FILA =====
const fila = ['A', 'B'];

fila.push('C');       // adiciona NO FIM
fila.unshift('Z');    // adiciona NO INÍCIO
console.log('após push/unshift:', fila); // ['Z', 'A', 'B', 'C']

const ultimo = fila.pop();   // remove e DEVOLVE o último
const primeiro = fila.shift(); // remove e DEVOLVE o primeiro
console.log(`removeu "${primeiro}" e "${ultimo}" →`, fila);

// splice remove no MEIO: splice(posiçãoInicial, quantidade).
fila.splice(0, 1);
console.log('após splice:', fila);

// Todos os métodos acima MUTAM (alteram) o array original!

// ===== 3. ITERAÇÃO FUNCIONAL: MAP / FILTER / REDUCE =====
const produtos = [
  { nome: 'Teclado', preco: 150 },
  { nome: 'Mouse', preco: 80 },
  { nome: 'Monitor', preco: 900 },
  { nome: 'Cabecote HDMI', preco: 25 },
];

// map TRANSFORMA cada item e devolve array NOVO (mesmo tamanho):
const nomes = produtos.map((produto) => produto.nome);
console.log('map →', nomes);

// filter SELECIONA os itens aprovados no teste booleano:
const baratos = produtos.filter((produto) => produto.preco < 100);
console.log('filter →', baratos.map((p) => p.nome));

// reduce ACUMULA tudo em um único valor (aqui: somando preços).
// (acumulador, item) => novoAcumulador ; o 0 final é o valor inicial.
const total = produtos.reduce((soma, produto) => soma + produto.preco, 0);
console.log('reduce → total:', total);

// find devolve o PRIMEIRO item aprovado (ou undefined):
const monitor = produtos.find((produto) => produto.nome === 'Monitor');
console.log('find →', monitor);

// some pergunta: "PELO MENOS um passa?" | every: "TODOS passam?"
console.log('some (tem < 50?):', produtos.some((p) => p.preco < 50));  // true
console.log('every (todos < 1000?):', produtos.every((p) => p.preco < 1000)); // true

// Nenhum desses métodos altera `produtos`: todos retornam coisas novas.

// ===== 4. SPREAD (...): COPIAR E JUNTAR ARRAYS =====
const primeiros = [1, 2, 3];
const ultimos = [4, 5];

// O spread "espalha" os itens dentro de um array novo:
const juntos = [...primeiros, ...ultimos];
console.log('juntos:', juntos);

// CÓPIA SEGURA: sem spread, copiaríamos a REFERÊNCIA (não o conteúdo!).
const referencia = primeiros;   // mesma lista por baixo dos panos!
referencia.push(99);            // muda as DUAS variáveis
console.log('armadilha da referência:', primeiros); // [1, 2, 3, 99]

const base = [1, 2, 3];         // recomeçando...
const copiaSegura = [...base];  // cópia rasa de verdade
copiaSegura.push(99);
console.log('original intacto:', base, '| cópia alterada:', copiaSegura);

// ===== 5. SORT SEM MUTAR O ORIGINAL =====
const pontuacoes = [88, 12, 45, 7, 100];

// PEGADINHA CLÁSSICA: sort padrão compara como TEXTO!
console.log('[1,10,2].sort():', [1, 10, 2].sort()); // [1, 10, 2] ('10' < '2' como texto!)

// sort MUTA o original. Para preservar, copie com spread antes:
const ordenada = [...pontuacoes].sort((x, y) => x - y); // comparador NUMÉRICO crescente
const decrescente = [...pontuacoes].sort((x, y) => y - x);

console.log('original intacto:', pontuacoes);
console.log('ordenada crescente:', ordenada);
console.log('ordenada decrescente:', decrescente);

// O comparador retorna negativo/zero/positivo e o sort decide a ordem com isso.

// ===== EXPERIMENTE =====
// 1) Use map para criar um array de strings "Nome - R$ preco" a partir de produtos.
// 2) Encadeie filter + reduce para somar SOMENTE os produtos acima de R$ 70.
// 3) Faça splice remover o Monitor do array e confirme que `produtos` mudou.

module.exports = { produtos, total };
