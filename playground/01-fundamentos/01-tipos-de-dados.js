/**
 * ============================================================
 * PLAYGROUND — Tipos de Dados
 * ------------------------------------------------------------
 * Módulo: 01 — Fundamentos   |   Aula: modulos/01-fundamentos/01-tipos-de-dados/
 * Execute: node playground/01-fundamentos/01-tipos-de-dados.js
 * Código comentado para estudar, alterar e QUEBRAR à vontade.
 * Errar aqui faz parte do método!
 * ============================================================
 */

// ===== 1. TIPOS PRIMITIVOS =====
// Primitivos são os valores mais básicos: string, number, boolean,
// undefined, null (e, mais raros: bigint e symbol).

const nome = 'Ana';               // string: texto entre aspas
const idade = 20;                 // number: inteiros e decimais usam o MESMO tipo
const altura = 1.62;              // number também (sempre ponto, nunca vírgula!)
const estudante = true;           // boolean: apenas true ou false
const naoDefinido = undefined;    // undefined: declarada, mas sem valor atribuído
const nulo = null;                // null: valor "vazio" definido DE PROPÓSITO

// ===== 2. COLEÇÕES E OBJETOS (tipos de referência) =====

const disciplinas = ['JavaScript', 'HTML', 'CSS']; // array: lista ORDENADA por índices

// Objeto: pares chave → valor. A sintaxe curta abaixo equivale a nome: nome, etc.
const perfil = {
  nome,
  idade,
  estudante,
  disciplinas,
};

// ===== 3. TYPEOF: DESCOBRINDO O TIPO EM TEMPO DE EXECUÇÃO =====

console.log('Tipos das variáveis:');
console.log('nome →', typeof nome);                  // string
console.log('idade →', typeof idade);                // number
console.log('estudante →', typeof estudante);        // boolean
console.log('naoDefinido →', typeof naoDefinido);    // undefined
console.log('nulo →', typeof nulo);                  // "object" — bug histórico mantido por compatibilidade!
console.log('disciplinas →', typeof disciplinas);    // "object": array É um objeto especial
console.log('perfil →', typeof perfil);              // object

// Como typeof não distingue array de objeto, use Array.isArray():
console.log('disciplinas é array?', Array.isArray(disciplinas)); // true
console.log('perfil é array?', Array.isArray(perfil));           // false

// typeof aplicado a função retorna 'function' (função também é valor!):
function saudacao() {
  return 'Olá!';
}
console.log('saudacao →', typeof saudacao); // function

// ===== 4. COERÇÃO IMPLÍCITA: O JS CONVERTE SOZINHO (CUIDADO!) =====
// O JavaScript converte tipos automaticamente em algumas operações.
// Isso é conveniente, mas causa bugs sutis se você não estiver atento.

console.log("'5' * 2 =", '5' * 2);       // 10: a string virou número para multiplicar
console.log("'5' + 2 =", '5' + 2);       // '52': com +, o número virou TEXTO (concatenou!)
console.log('true + 1 =', true + 1);     // 2: true vale 1 e false vale 0 em contexto numérico
console.log('Number(null) =', Number(null));       // 0: null vira zero
console.log('Number(undefined) =', Number(undefined)); // NaN: undefined NÃO consegue virar número

// ===== 5. COERÇÃO EXPLÍCITA: VOCÊ MANDA CONVERTER =====
// Melhor prática: converta VOCÊ de forma clara, em vez de confiar na sorte.

console.log("Number('42') + 8 =", Number('42') + 8); // 50: conversão limpa de texto para número
console.log("Number('12 anos') =", Number('12 anos')); // NaN: texto que não é número puro falha
console.log("parseInt('12 anos', 10) =", parseInt('12 anos', 10)); // 12: lê o início e ignora o resto
console.log('String(99) =', String(99), '| tipo:', typeof String(99)); // '99' virou texto
console.log("Boolean('texto') =", Boolean('texto')); // true: string não vazia é verdadeira
console.log("Boolean('') =", Boolean(''));           // false: string vazia é "falsy"

// ===== 6. UNDEFINED x NULL: QUAL A DIFERENÇA? =====

let matricula;                                  // declarada sem valor...
console.log('matricula:', matricula);           // ...então undefined (ninguém atribuiu nada)

const respostaServidor = null;                  // decidimos DE PROPÓSITO deixá-la vazia
console.log('respostaServidor:', respostaServidor);

// Regra prática para lembrar:
// undefined = "ainda não colocaram valor";
// null      = "valor vazio colocado de propósito".

// ===== EXPERIMENTE =====
// 1) Some '10' + 5 e depois Number('10') + 5: explique a diferença num comentário.
// 2) Descubra o typeof de [], {}, NaN e de uma arrow function.
// 3) Crie uma variável booleana a partir de String(0) usando Boolean():
//    o resultado foi true ou false? Por quê?

module.exports = { nome, idade, estudante, naoDefinido, nulo, disciplinas, perfil };
