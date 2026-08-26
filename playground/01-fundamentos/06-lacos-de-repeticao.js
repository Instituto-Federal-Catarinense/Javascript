/**
 * ============================================================
 * PLAYGROUND — Laços de Repetição
 * ------------------------------------------------------------
 * Módulo: 01 — Fundamentos   |   Aula: modulos/01-fundamentos/06-lacos-de-repeticao/
 * Execute: node playground/01-fundamentos/06-lacos-de-repeticao.js
 * Código comentado para estudar, alterar e QUEBRAR à vontade.
 * Errar aqui faz parte do método!
 * ============================================================
 */

// ===== 1. FOR CLÁSSICO: QUANDO SEI QUANTAS VEZES REPETIR =====
// Anatomia: for (inicialização; condição; passo) { corpo }
for (let i = 1; i <= 5; i++) {
  console.log(`Contando: ${i}`);
}

// A variável de controle pode avançar de 2 em 2, contar para trás, etc.
for (let i = 10; i >= 0; i -= 2) {
  console.log(`Lançamento em: ${i}`);
}

// Laços aninhados: para cada volta do EXTERNO, o interno completa tudo.
console.log('Tabuada do 7:');
for (let fator = 1; fator <= 3; fator++) {
  for (const multiplicador of [1, 2, 3]) {
    console.log(`7 x ${multiplicador} = ${7 * multiplicador}`);
  }
  console.log('---');
}

// ===== 2. WHILE: QUANDO NÃO SEI QUANTAS REPETIÇÕES =====
// O while repete ENQUANTO a condição for verdadeira.
// Cuidado clássico: se a condição nunca ficar falsa, temos um loop infinito!

let pilhaTarefas = ['estudar', 'dormir', 'repetir'];
while (pilhaTarefas.length > 0) {
  const tarefa = pilhaTarefas.pop(); // remove a última tarefa
  console.log('Executando:', tarefa);
}
console.log('Pilha vazia, while encerrado.');

// ===== 3. DO..WHILE: EXECUTA PELO MENOS UMA VEZ =====
// Diferença-chave: a condição é testada DEPOIS da primeira execução.
let tentativa = 99;

do {
  console.log('Menu exibido (roda mesmo com a condição já falsa!).');
  tentativa++;
} while (tentativa < 2); // já é falsa na primeira checagem... mas rodou 1 vez!

// Uso típico: menus de terminal, validação de entrada do usuário.

// ===== 4. FOR..OF (ARRAYS) E FOR..IN (OBJETOS) =====
const linguagens = ['JavaScript', 'Python', 'C'];

// for..of percorre os VALORES — a forma mais limpa de visitar cada item:
for (const linguagem of linguagens) {
  console.log('Linguagem:', linguagem);
}

// Precisa do índice também? entries() devolve pares [índice, valor]:
for (const [i, linguagem] of linguagens.entries()) {
  console.log(`${i}: ${linguagem}`);
}

// for..in percorre as CHAVES de um objeto (não use em arrays!):
const aluno = { nome: 'João', turma: '2º Info' };
for (const chave in aluno) {
  // Colchetes são obrigatórios: aluno[chave], pois "chave" varia.
  console.log(`chave ${chave} → valor ${aluno[chave]}`);
}

// ===== 5. BREAK E CONTINUE: CONTROLANDO O FLUXO DO LAÇO =====
// break ENCERRA o laço imediatamente; continue PULA para a próxima volta.

console.log('Procurando o número 3:');
for (let n = 1; n <= 10; n++) {
  if (n === 3) {
    console.log('Achei o 3!');
    break; // não faz sentido continuar procurando
  }
  console.log('verificando', n);
}

console.log('Imprimindo apenas ímpares:');
for (let n = 1; n <= 8; n++) {
  if (n % 2 === 0) {
    continue; // descarta este número e vai direto para a próxima volta
  }
  console.log(n);
}

// ===== 6. QUAL LAÇO USAR? RESUMO EM COMENTÁRIO =====
// - for clássico : quantidade de voltas conhecida ou precisa do índice.
// - while        : repetir ENQUANTO algo durar (não sabe quantas vezes).
// - do..while    : igual ao while, mas garante AO MENOS uma execução.
// - for..of      : percorrer arrays/strings item a item (preferido).
// - for..in      : percorrer chaves de OBJETOS (evite em arrays).
// Regra de ouro: se está percorrendo array só para transformar/filtrar,
// considere map/filter (aula 08) antes de qualquer laço.

// ===== EXPERIMENTE =====
// 1) Remova o `pilhaTarefas.pop()` do while e provoque (com cuidado!) um loop infinito.
//    Depois leia como interromper com Ctrl+C no terminal.
// 2) Troque o for..of das linguagens por um for clássico usando length.
// 3) Crie um laço que imprima os números de 1 a 20, pulando múltiplos de 4 (continue).

module.exports = { aluno };
