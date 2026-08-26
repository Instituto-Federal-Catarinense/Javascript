/**
 * SOLUÇÃO-MODELO — Strings
 * Enunciado resolvido: exercícios 1 e 2 de modulos/01-fundamentos/03-strings/exercicios.md
 * Execute: node modulos/01-fundamentos/solucoes/03-strings.js
 */

// EXERCÍCIO 1 — Crachá do estudante
const nomeDigitado = '   joana ribeiro   ';

// trim devolve texto novo; a original jamais muda (strings são imutáveis).
const nomeLimpo = nomeDigitado.trim();
const nomeCracha = nomeLimpo.toUpperCase();

// Cada palavra contribui com a primeira letra; join junta tudo sem espaços.
const iniciais = nomeLimpo
  .split(' ')
  .map((palavra) => palavra.charAt(0))
  .join('')
  .toUpperCase();

console.log(`Crachá: ${nomeCracha}`);
console.log(`Iniciais: ${iniciais}`);

// EXERCÍCIO 2 — E-mail institucional
const nomeCompleto = 'Pedro Luiz Almeida';
const palavras = nomeCompleto.split(' ');

// Índice 0 = primeira palavra; length - 1 = última. Funciona para nomes
// de qualquer tamanho sem contar palavras manualmente.
const email = `${palavras[0]}.${palavras[palavras.length - 1]}@escola.edu.br`.toLowerCase();
const dominioCorreto = email.endsWith('@escola.edu.br');

console.log(email);
console.log(dominioCorreto ? 'E-mail válido' : 'Domínio inválido');

// DISCUSSÃO:
// 1) Erro comum: esquecer que métodos de string NÃO alteram o original. Escrever
//    nome.trim(); sem capturar o retorno joga o resultado fora.
// 2) split(' ') quebra se houver espaços duplicados ('joana  ribeiro' gera palavra
//    vazia). split(/\s+/) com regex é mais robusto quando o dado vem de formulário.
// 3) Nome de uma palavra só ('Maria') geraria 'maria.maria@...' — valide
//    palavras.length > 1 se o caso real exigir sobrenome.
