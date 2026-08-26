/**
 * ============================================================
 * PLAYGROUND — Números e Math
 * ------------------------------------------------------------
 * Módulo: 01 — Fundamentos   |   Aula: modulos/01-fundamentos/04-numeros-e-math/
 * Execute: node playground/01-fundamentos/04-numeros-e-math.js
 * Código comentado para estudar, alterar e QUEBRAR à vontade.
 * Errar aqui faz parte do método!
 * ============================================================
 */

// ===== 1. O TIPO NUMBER: INTEIROS E DECIMAIS JUNTOS =====
const inteiro = 42;
const decimal = 3.14;
const negativo = -7;

// Em JavaScript existe UM único tipo para números (não há "int" separado).
console.log(typeof inteiro, typeof decimal, typeof negativo); // number number number

// Notação científica é aceita (útil em cálculos grandes):
console.log('2e3 =', 2e3); // 2000

// ===== 2. CONVERTENDO TEXTOS EM NÚMEROS =====
// Dados de formulário/API chegam como TEXTO ("25"). Precisamos converter!

console.log("Number('25') =", Number('25'));       // 25: conversão estrita do texto todo
console.log("Number('25.5') =", Number('25.5'));   // 25.5: decimais ok
console.log("Number('12 anos') =", Number('12 anos'));   // NaN: falha se não for número puro
console.log("parseInt('12 anos', 10) =", parseInt('12 anos', 10)); // 12: lê o começo e para
console.log("parseInt('3.99') =", parseInt('3.99'));     // 3: parseInt DESCARTA a parte decimal
console.log("parseFloat('3.99') =", parseFloat('3.99')); // 3.99: mantém os decimais

// O segundo argumento do parseInt é a BASE (10 = decimal). Sempre informe o 10!
console.log("parseInt('08') =", parseInt('08', 10)); // 8

// ===== 3. NaN: "NOT A NUMBER" E COMO DETECTÁ-LO =====
const resultadoEstranho = Number('abc');

console.log('resultado:', resultadoEstranho);        // NaN
// eslint-disable-next-line use-isnan -- a comparação é proposital para revelar esse comportamento
console.log('NaN === NaN?', NaN === NaN);            // false! NaN nem é igual a si mesmo

// Por isso, NUNCA compare com NaN: use Number.isNaN().
console.log('Number.isNaN(resultado):', Number.isNaN(resultadoEstranho)); // true

// Companheiras úteis de verificação:
console.log('isFinite(100):', Number.isFinite(100));         // true
console.log('isInteger(4.5):', Number.isInteger(4.5));       // false
console.log('isInteger(4):', Number.isInteger(4));           // true

// ===== 4. TOFIXED: LIMITAR CASAS DECIMAIS =====
// Atenção: toFixed ARREDONDA e devolve STRING, não number!

const preco = 19.987;
console.log('toFixed(2):', preco.toFixed(2), '| tipo:', typeof preco.toFixed(2));
console.log('toFixed(0):', preco.toFixed(0)); // '20' (arredondou!)

// Padrão comum: formatar e já converter de volta para número.
console.log('formatado + Number:', Number(preco.toFixed(2))); // 19.99 (number)

// ===== 5. PRECISÃO DE PONTO FLUTUANTE (o famoso 0.1 + 0.2) =====
// Computadores representam decimais em binário; algumas frações são imprecisas.

console.log('0.1 + 0.2 =', 0.1 + 0.2);                 // 0.30000000000000004 (!)
console.log('0.1 + 0.2 === 0.3?', 0.1 + 0.2 === 0.3);  // false! Pegadinha clássica

// Solução prática: comparar com tolerância ou arredondar antes.
console.log('comparação com toFixed:', (0.1 + 0.2).toFixed(1) === Number(0.3).toFixed(1)); // true

// Para DINHEIRO, uma estratégia comum é trabalhar em centavos (inteiros):
console.log('em centavos:', (10 + 20) / 100); // 0.3 exato

// ===== 6. MATH: A CAIXA DE FERRAMENTAS MATEMÁTICA =====

// Arredondamentos — decore a diferença entre eles:
console.log('Math.round(4.6):', Math.round(4.6)); // 5: arredonda para o mais próximo
console.log('Math.floor(4.9):', Math.floor(4.9)); // 4: SEMPRE para baixo
console.log('Math.ceil(4.1):', Math.ceil(4.1));   // 5: SEMPRE para cima
console.log('Math.trunc(-4.9):', Math.trunc(-4.9)); // -4: corta a parte decimal

// Outras utilidades:
console.log('Math.abs(-10):', Math.abs(-10));     // 10: valor absoluto
console.log('Math.max(3, 7, 5):', Math.max(3, 7, 5)); // 7
console.log('Math.min(3, 7, 5):', Math.min(3, 7, 5)); // 3
console.log('Math.sqrt(81):', Math.sqrt(81));     // 9: raiz quadrada
console.log('Math.pow(2, 10):', Math.pow(2, 10)); // 1024 (equivalente a 2 ** 10)

// Math.random() gera um decimal entre 0 (incluso) e 1 (excluso).
console.log('random bruto:', Math.random());

// Receita para número inteiro ENTRE min e max (ambos inclusos):
function numeroAleatorioEntre(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('dado de 6 faces:', numeroAleatorioEntre(1, 6));

// ===== EXPERIMENTE =====
// 1) Faça parseInt('R$ 50,00') funcionar: qual texto você precisa limpar antes?
// 2) Crie uma função media(n1, n2) que use toFixed(1) e retorne um NUMBER.
// 3) Simule 100 sorteios de dado e conte quantas vezes saiu 6 (use um laço for).

module.exports = { preco, numeroAleatorioEntre };
