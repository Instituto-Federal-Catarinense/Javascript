/**
 * ============================================================
 * PLAYGROUND — Variáveis e Escopo
 * ------------------------------------------------------------
 * Módulo: 01 — Fundamentos   |   Aula: modulos/01-fundamentos/00-variaveis-e-escopo/
 * Execute: node playground/01-fundamentos/00-variaveis-e-escopo.js
 * Código comentado para estudar, alterar e QUEBRAR à vontade.
 * Errar aqui faz parte do método!
 * ============================================================
 */

// ===== 1. AS TRÊS FORMAS DE DECLARAR VARIÁVEIS =====

// 'var' é a forma antiga (pré-2015). Escopo de FUNÇÃO. Evite em código novo.
var cidade = 'Rio do Sul';

// 'let' permite REATRIBUIR o valor. Escopo de BLOCO { }. Use quando o valor muda.
let saldo = 100;

// 'const' NÃO permite reatribuição. Escopo de BLOCO. É o padrão recomendado.
const cpf = '123.456.789-00';

saldo = saldo + 50;        // OK: 'let' pode mudar de valor.
// cpf = '000.000.000-00'; // Descomente para ver o erro: Assignment to constant variable.

console.log('cidade:', cidade);
console.log('saldo:', saldo);
console.log('cpf:', cpf);

// Detalhe importante: const congela a LIGAÇÃO (nome → valor), não o CONTEÚDO.
// Um array/objeto declarado com const ainda pode ter seu interior alterado:
const notas = [8, 9];
notas.push(10);            // OK! Mudamos o conteúdo, não reatribuímos a variável.
console.log('notas após push:', notas);

// ===== 2. ESCOPO GLOBAL =====
// Declarada fora de qualquer função/bloco: visível no arquivo inteiro.
const curso = 'Técnico em Informática';

function mostrarCurso() {
  // Dentro da função conseguimos LER a variável global.
  console.log('Global vista de dentro da função:', curso);
}
mostrarCurso();

// ===== 3. ESCOPO DE FUNÇÃO (território do var) =====
function testarVar() {
  // eslint-disable-next-line no-constant-condition -- `if (true)` é proposital: demonstra que var ignora o bloco
  if (true) {
    var dentroDoIf = 'sou var'; // var IGNORA o limite do bloco if...
  }
  console.log(dentroDoIf);      // ...e ainda existe aqui, porque pertence à função toda.
}
testarVar();

function testarLet() {
  // eslint-disable-next-line no-constant-condition -- `if (true)` é proposital: demonstra que let respeita o bloco
  if (true) {
    let dentroDoIf = 'sou let'; // let vive SOMENTE dentro das chaves do if.
  }
  // console.log(dentroDoIf);    // Descomente: ReferenceError: dentroDoIf is not defined
  console.log('let NÃO vaza do bloco (linha acima desativada de propósito)');
}
testarLet();

// ===== 4. ESCOPO DE BLOCO EM LAÇOS (clássico de prova!) =====
// Com let, cada volta do laço tem seu PRÓPRIO i.
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log('laço let, i =', i)); // imprime 0, 1, 2
}

// Com var, existe UMA única j compartilhada por todas as voltas.
for (var j = 0; j < 3; j++) {
  setTimeout(() => console.log('laço var, j =', j)); // imprime 3, 3, 3
}
// Obs.: os setTimeout rodam DEPOIS do fim do script, então estas linhas aparecem no fim.

// ===== 5. HOISTING (IÇAMENTO) DEMONSTRADO =====
// Antes de executar, o JS "iça" as declarações para o topo do escopo.

// Funções DECLARADAS sobem completas: dá para chamar antes de definir.
console.log(chamadaAntesDaDefinicao());

function chamadaAntesDaDefinicao() {
  return 'funções declaradas sobem inteiras!';
}

// Com var, o NOME é içado mas o VALOR não: chega como undefined (sem erro!).
console.log('var lido antes da atribuição:', comida); // undefined
var comida = 'pizza';
console.log('var depois da atribuição:', comida);

// let/const também são içados, mas ficam na "zona morta" (TDZ) até a linha da declaração.
try {
  console.log(bebida); // Ler antes de declarar lança erro...
} catch (erro) {
  console.log('Erro capturado:', erro.message); // Cannot access 'bebida' before initialization
}
const bebida = 'suco';
console.log('bebida após a declaração:', bebida);

// ===== 6. BOAS PRÁTICAS =====
// 1) Comece sempre com const; passe para let só se precisar reatribuir.
// 2) Nunca use var em código novo (escopo de função + hoisting confusos).
// 3) Declare a variável o mais perto possível de onde ela será usada.
// 4) Inicialize a variável na própria declaração para evitar undefined acidental.

// ===== EXPERIMENTE =====
// 1) Troque `let saldo` por `const saldo` e descubra qual linha quebra primeiro.
// 2) Remova o try/catch e tente logar `bebida` direto: leia a mensagem do erro com calma.
// 3) Escreva uma função que declara uma var dentro de um if e tenta retorná-la
//    de fora; depois refaça com let e compare os dois comportamentos.

module.exports = { cidade, saldo, cpf, notas, curso };
