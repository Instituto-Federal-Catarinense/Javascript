/**
 * ============================================================
 * PLAYGROUND — Operadores
 * ------------------------------------------------------------
 * Módulo: 01 — Fundamentos   |   Aula: modulos/01-fundamentos/02-operadores/
 * Execute: node playground/01-fundamentos/02-operadores.js
 * Código comentado para estudar, alterar e QUEBRAR à vontade.
 * Errar aqui faz parte do método!
 * ============================================================
 */

// ===== 1. OPERADORES ARITMÉTICOS =====
const a = 10;
const b = 3;

console.log('soma:', a + b);            // 13
console.log('subtração:', a - b);       // 7
console.log('multiplicação:', a * b);   // 30
console.log('divisão:', a / b);         // 3.333... (divisão real, nunca inteira)
console.log('resto (%):', a % b);       // 1: sobra da divisão inteira de 10 por 3
console.log('potência (**):', a ** b);  // 1000: 10 elevado a 3

// O resto (%) é perfeito para descobrir paridade: resto 0 significa número par.
console.log('7 é par?', 7 % 2 === 0);   // false

// Divisão por zero em JS NÃO gera erro: resulta em Infinity.
console.log('10 / 0 =', 10 / 0);

// ===== 2. INCREMENTO, DECREMENTO E ATRIBUIÇÃO COMPOSTA =====
let contador = 5;
contador++;      // soma 1 (agora 6)
contador--;      // subtrai 1 (volta a 5)
contador += 10;  // equivale a: contador = contador + 10
contador *= 2;   // equivale a: contador = contador * 2
console.log('contador final:', contador); // 30

// Diferença sutil entre pós e pré incremento:
let x = 1;
console.log('x++ devolve:', x++, '| depois x vale', x); // devolve 1, depois vira 2
let y = 1;
console.log('++y devolve:', ++y, '| depois y vale', y); // já devolve 2

// Dica: prefira as formas claras (x += 1) quando não precisar do valor na hora.

// ===== 3. COMPARAÇÃO: == vs === (o clássico!) =====
// ==  compara APÓS converter os tipos ("igualdade frouxa") — fonte de bugs.
// === compara valor E tipo ("igualdade estrita") — use sempre que puder.

console.log("5 == '5' :", 5 == '5');     // true  (perigoso! tipos foram convertidos)
console.log("5 === '5':", 5 === '5');    // false (correto: number vs string)

console.log('0 == false :', 0 == false); // true  (perigoso!)
console.log('0 === false:', 0 === false);// false (correto)

console.log('null == undefined :', null == undefined);   // true (caso especial da linguagem)
console.log('null === undefined:', null === undefined);  // false

// Desigualdades seguem a mesma lógica: != (frouxa) e !== (estrita).
console.log("5 !== '5':", 5 !== '5'); // true: são realmente diferentes

// Regra para gravar: "=== é o == que você realmente queria".

// ===== 4. OPERADORES LÓGICOS: && || ! =====
const maiorDeIdade = true;
const temDocumento = false;

console.log('E (&&):', maiorDeIdade && temDocumento);  // false: exige os dois verdadeiros
console.log('OU (||):', maiorDeIdade || temDocumento); // true: basta um verdadeiro
console.log('NÃO (!):', !maiorDeIdade);                // false: inverte o valor lógico

// Curto-circuito: && para no primeiro falso; || para no primeiro verdadeiro.
// Consequência prática: no exemplo abaixo a função nem é chamada!
console.log('false && chamada():', false && funcaoQueNaoRoda());

function funcaoQueNaoRoda() {
  console.log('esta mensagem NUNCA deve aparecer');
  return true;
}

// || como "valor padrão": usa o fallback quando o valor é falsy.
console.log("null || 'padrão':", null || 'padrão');     // 'padrão'
console.log("'texto' || 'padrão':", 'texto' || 'padrão'); // 'texto'

// ===== 5. TERNÁRIO: IF/ELSE EM UMA LINHA =====
const nota = 7;
const situacao = nota >= 6 ? 'Aprovado' : 'Reprovado'; // condição ? se true : se false
console.log('situação:', situacao);

// Ternários podem ser encadeados, mas cuidado com a legibilidade:
const conceito = nota >= 9 ? 'A' : nota >= 7 ? 'B' : 'C';
console.log('conceito:', conceito);

// ===== 6. NULLISH ?? : FALLBACK SÓ PARA null OU undefined =====
// Diferença essencial: || trata 0, '' e NaN como "vazios"; ?? respeita esses valores.

const visitasSalvas = 0; // zero é um valor PERFEITAMENTE válido!

console.log('com || :', visitasSalvas || 10);  // 10 (errado: substituiu um 0 válido!)
console.log('com ?? :', visitasSalvas ?? 10);  // 0  (certo: só troca null/undefined)

const apelido = null;
console.log("apelido ?? 'sem apelido':", apelido ?? 'sem apelido');

const nomeVazio = '';
console.log('\'\' ?? \'anônimo\':', nomeVazio ?? 'anônimo'); // '' (string vazia NÃO é nullish)

// Resumo: use ?? para padrões de valor; reserve || para lógica booleana.

// ===== EXPERIMENTE =====
// 1) Troque todos os === deste arquivo por == e compare cada resultado impresso.
// 2) Reescreva o ternário do conceito usando if / else if / else tradicional.
// 3) Monte a expressão `0 ?? 99` e `0 || 99`: anote num comentário por que diferem.

module.exports = { a, b, nota };
