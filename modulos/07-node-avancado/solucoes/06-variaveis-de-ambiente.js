/** SOLUÇÃO-MODELO — 06-variaveis-de-ambiente | Enunciado: exercícios 1 e 2 de ../06-variaveis-de-ambiente/exercicios.md | Como rodar: npm install dotenv && node 06-variaveis-de-ambiente.js
 *
 * Exercício 1 — porta configurável: `process.env.PORTA || fallback`. Com
 *   `PORTA=4000` no .env sobe em 4000; sem a linha, volta ao padrão.
 * Exercício 2 — sondagem comentada: o que chega em process.env, por que .env
 *   não vai para o Git e qual é o papel do .env.example.
 *
 * Alternativa sem dotenv (Node >= 20.6):
 *   node --env-file=.env 06-variaveis-de-ambiente.js
 */

// O config() deve ser a PRIMEIRA coisa do arquivo: ele lê o .env e injeta as
// chaves em process.env. Qualquer leitura ANTES dele vê valores indefinidos.
require('dotenv').config();

const PORTA_PADRAO = 3007; // mesmo default do exemplo da aula

// Number() evita o clássico bug de "3000" (string) vazar para app.listen.
const porta = Number(process.env.PORTA) || PORTA_PADRAO;
const ambiente = process.env.NODE_ENV || 'development';
const nomeAplicacao = process.env.NOME_APLICACAO || 'trilha-javascript';
const segredoPresente = Boolean(process.env.APP_SEGREDO);

console.log(`Aplicação: ${nomeAplicacao}`);
console.log(`Porta: ${porta}`);
console.log(`Ambiente: ${ambiente}`);
// Exercício 2 + higiene do exercício 5: o valor do segredo JAMAIS é impresso,
// nem aqui nem em logs — apenas se existe ou não.
console.log(`APP_SEGREDO definida? ${segredoPresente ? 'sim (valor oculto de propósito)' : 'nao'}`);

/*
 * EXPLICAÇÃO DO EXERCÍCIO 2:
 * - Por que esses valores NÃO vão para o Git?
 *   Porque qualquer pessoa com acesso ao repositório passaria a ter a chave de
 *   produção/banco/token. Histórico do Git guarda tudo: apagar o arquivo depois
 *   NÃO apaga o segredo dos commits antigos — a rota segura é revogar a credencial.
 * - O que o .env.example faz de diferente?
 *   Documenta as CHAVES com valores fictícios/vazios. Ele SIM é versionado e
 *   serve de contrato para a equipe: cada desenvolvedor copia para `.env`
 *   (`cp .env.example .env`) e preenche com seus valores locais.
 * - O .gitignore da cópia precisa conter a linha `.env`.
 */

// DISCUSSÃO:
// - Fallbacks com `||` cobrem undefined E string vazia; para diferenciar os
//   casos use `process.env.PORTA ?? PADRAO`.
// - Centralizar leitura num módulo único (desafio do exercício 6, com
//   Object.freeze) impede espalhar process.env pelos arquivos.
// - Segredos costumam vazar em três lugares: logs, respostas de erro e stack
//   traces — mascare antes de serializar qualquer objeto.
