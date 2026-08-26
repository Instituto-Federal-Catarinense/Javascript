/**
 * ============================================================
 * PLAYGROUND — Strings
 * ------------------------------------------------------------
 * Módulo: 01 — Fundamentos   |   Aula: modulos/01-fundamentos/03-strings/
 * Execute: node playground/01-fundamentos/03-strings.js
 * Código comentado para estudar, alterar e QUEBRAR à vontade.
 * Errar aqui faz parte do método!
 * ============================================================
 */

// ===== 1. TRÊS FORMAS DE CRIAR STRINGS =====
const comSimples = 'aspas simples';    // padrão do curso
const comDuplas = 'aspas duplas';      // mesmo resultado com outra sintaxe (evite misturar)
const comCrase = 'template literal';   // poderosa: permite interpolação e multilinha

console.log(comSimples, '|', comDuplas, '|', comCrase);

// Aspas simples são úteis quando há duplas dentro do texto (sem precisar escapar):
console.log('Ele disse: "olá!"');

// ===== 2. TEMPLATE LITERAL: INTERPOLAÇÃO E MULTILINHA =====
const nome = 'Maria';
const idade = 17;

// Interpolação: ${expressao} embute QUALQUER expressão JS dentro do texto.
console.log(`${nome} tem ${idade} anos.`);
console.log(`Ano que vem terá ${idade + 1}.`);       // expressões calculadas dentro!
console.log(`Maior de idade? ${idade >= 18}`);        // até booleanos podem entrar

// Multilinha sem concatenação nem \n: a quebra de linha é literal.
const carta = `Prezada ${nome},

Seja bem-vinda ao curso!
Atenciosamente, Equipe.`;
console.log(carta);

// Antes do template literal seria preciso: 'linha 1\n' + 'linha 2' — bem mais feio.

// ===== 3. MÉTODOS PRINCIPAIS =====
const frase = '  Aprender JavaScript é praticar JavaScript  ';

// length conta TODOS os caracteres, inclusive espaços:
console.log('tamanho bruto:', frase.length);

// trim remove espaços das pontas (não altera o original: devolve NOVA string):
const limpa = frase.trim();
console.log('após trim:', `"${limpa}"`);

// Caixa alta/baixa — muito usadas para comparar textos ignorando maiúsculas:
console.log('upper:', limpa.toUpperCase());
console.log('lower:', limpa.toLowerCase());

// Busca: includes (contém?), startsWith (começa com?), indexOf (posição ou -1):
console.log('inclui "JavaScript"?', limpa.includes('JavaScript')); // true
console.log('começa com "Aprender"?', limpa.startsWith('Aprender')); // true
console.log('primeira posição de "JavaScript":', limpa.indexOf('JavaScript'));

// Fatiar: slice(inicio, fim) — o fim NÃO entra; índices negativos contam do fim:
console.log('slice(0, 8):', limpa.slice(0, 8));   // 'Aprender'
console.log('slice(-9):', limpa.slice(-9));       // últimos 9 caracteres

// replace troca APENAS a primeira ocorrência; replaceAll troca todas:
console.log('replace:', limpa.replace('JavaScript', 'JS'));
console.log('replaceAll:', limpa.replaceAll('JavaScript', 'JS'));

// split quebra a string em um ARRAY usando um separador:
const palavras = limpa.split(' ');
console.log('split:', palavras);

// repeat repete o texto (bom para testes e formatos simples):
console.log('repeat:', '-'.repeat(20));

// ===== 4. IMUTABILIDADE: STRINGS NÃO MUDAM =====
// Em JavaScript, uma string JAMAIS é alterada "por dentro".
// Todo método devolve uma string NOVA; o original permanece intacto.

let palavra = 'javascript';
palavra[0] = 'J'; // tentativa silenciosa: NÃO altera e NÃO dá erro
console.log('tentativa de mudar palavra[0]:', palavra); // continua 'javascript'

// Para "mudar", você REATRIBUI a variável com o resultado do método:
palavra = palavra[0].toUpperCase() + palavra.slice(1);
console.log('palavra reatribuída:', palavra); // agora sim: 'Javascript'

// Compare: arrays são mutáveis (notas.push muda o array), strings nunca mudam.

// ===== 5. FUNÇÃO UTILITÁRIA COM STRINGS =====
// Exemplo prático: transformar "nome SOBRENome" em slug de URL.

function paraSlug(texto) {
  return texto
    .trim()                    // 1) remove espaços das pontas
    .toLowerCase()             // 2) padroniza em minúsculas
    .replaceAll(' ', '-');     // 3) troca espaços por hífens
}
console.log(paraSlug('  Programação Web I  ')); // 'programação-web-i'

// ===== EXPERIMENTE =====
// 1) Crie um template literal que apresente nome, idade e cidade numa frase só.
// 2) Use split + slice para exibir apenas as duas primeiras palavras de `limpa`.
// 3) Escreva uma função inverter(texto) que use split('').reverse().join('')
//    e teste com 'javascript' (deve sair 'tpircsavaj').

module.exports = { nome, frase: limpa, paraSlug };
