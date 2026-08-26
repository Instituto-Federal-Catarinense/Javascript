/**
 * ============================================================
 * PLAYGROUND — Introdução ao Node.js
 * ------------------------------------------------------------
 * Módulo: 05 — Node e npm   |   Aula: modulos/05-node-npm/01-introducao-node/
 * Execute: node playground/05-node-npm/01-introducao-node.js --nome=Ana
 * Código comentado para estudar, alterar e QUEBRAR à vontade.
 *
 * Dica: rode também sem argumentos para ver o caminho do "fallback".
 * ============================================================
 */

// ===== 1. PROCESS.ARGV: lendo argumentos da linha de comando =====
// `process` é um objeto GLOBAL do Node com informações do programa.
// argv = argument vector. Sempre é um array:
//   [0] caminho do executável node
//   [1] caminho do script executado
//   [2+] argumentos passados pelo usuário

console.log('--- process.argv completo ---');
console.log(process.argv);

// Exemplo real: o usuário rodou `node arquivo.js --nome=Ana`.
// Precisamos localizar o argumento que começa com "--nome=" e fatiar.
const argumentoNome = process.argv.find((arg) => arg.startsWith('--nome='));

let nomeUsuario;
if (argumentoNome) {
  // '--nome=Ana'.split('=') -> ['--nome', 'Ana']; pegamos a posição 1:
  nomeUsuario = argumentoNome.split('=')[1];
} else {
  nomeUsuario = 'Estudante'; // valor padrao quando ninguem passa --nome
}

console.log(`\nOla, ${nomeUsuario}! Bem-vindo(a) ao Node.js.`);

// ===== 2. PROCESS.ENV: variáveis de ambiente =====
// Variáveis de ambiente são configuradas FORA do código (no terminal):
//   Linux/macOS : NIVEL=avancado node arquivo.js
//   Windows     : set NIVEL=avancado && node arquivo.js
// Uso clássico: segredos (senhas de banco, chaves de API) fora do Git!

const nivel = process.env.NIVEL || 'basico'; // fallback se nao estiver definida
console.log('\nNivel de estudo (env NIVEL):', nivel);
console.log('Exemplo de env do sistema: HOME =', process.env.HOME || '(nao definida)');

// ===== 3. __DIRNAME E __FILENAME: onde estou no disco? =====
// O Node injeta estas constantes em TODO módulo CommonJS:
//   __dirname  -> pasta do arquivo atual
//   __filename -> caminho completo do arquivo atual

console.log('\n--- Caminhos do modulo ---');
console.log('__dirname  :', __dirname);   // ex.: /Users/voce/IFC/Javascript/playground/05-node-npm
console.log('__filename :', __filename);

// Combinando com path.join construímos caminhos portáveis:
const path = require('path'); // módulo nativo — sem npm install!
console.log('path.join  :', path.join(__dirname, 'dados', 'exemplo.txt'));

// ===== 4. GLOBAL vs WINDOW: Node não é navegador =====
// No navegador, o escopo global é `window`.
// No Node, é `global` (ou globalThis nos dois mundos).

console.log('\n--- Global do ambiente ---');
console.log('Existe window aqui?', typeof window);      // "undefined" no Node
console.log('Existe global aqui?', typeof global);       // "object" no Node
console.log('globalThis funciona nos dois? ', typeof globalThis === 'object');

// Declarar var/função no topo de um módulo NÃO vira propriedade de global:
var testeEscopo = 'sou local do modulo';
console.log('testeEscopo vazou para global?', 'testeEscopo' in global);
console.log('Valor visto via global:', global.testeEscopo, '(undefined: cada modulo e isolado)');
// Cada arquivo é um MÓDULO isolado — diferente do <script> solto no browser.

// ===== 5. OUTRAS PÉROLAS DO PROCESS =====
console.log('\n--- Informacoes do processo ---');
console.log('Node versao:', process.version);          // ex.: v25.9.0
console.log('Plataforma:', process.platform);         // darwin, linux, win32...
console.log('Diretorio atual:', process.cwd());        // onde o comando foi digitado
console.log('PID do processo:', process.pid);          // id do processo no SO

// Saindo com código de status: 0 = sucesso, 1 = erro.
// Teste depois: `echo $?` (mac/linux) ou `echo %ERRORLEVEL%` (Windows).
if (argumentoNome) {
  console.log('\nArgumento recebido: saindo com codigo 0 (sucesso).');
} else {
  console.log('\nSem --nome=: saindo com codigo 1 (aviso).');
  process.exitCode = 1; // nao encerra na hora; define o codigo final
}

/*
 * SOBRE O REPL (leitura extra, sem código necessário):
 * Digite `node` SEM arquivo no terminal e você entra no REPL —
 * um interpretador interativo onde cada linha é executada na hora:
 *
 *   $ node
 *   > 2 + 2
 *   4
 *   > .exit    (para sair)
 *
 * Ótimo para testar expressões rapidamente durante o estudo!
 */

// ===== EXPERIMENTE =====
// 1. Adicione suporte ao argumento --idade=NN imprimindo o ano de nascimento estimado.
// 2. Rode com NIVEL=avancado no terminal e observe o comportamento mudar.
// 3. Crie sua propria variavel em global.meuSegredo e leia-a mais abaixo no arquivo.
