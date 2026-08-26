/**
 * ============================================================
 * PLAYGROUND — Módulos nativos: fs, path e os
 * ------------------------------------------------------------
 * Módulo: 05 — Node e npm   |   Aula: modulos/05-node-npm/02-modulos-nativos/
 * Execute: node playground/05-node-npm/02-modulos-nativos.js
 * Código comentado para estudar, alterar e QUEBRAR à vontade.
 *
 * Este script escreve APENAS na pasta temporária do sistema
 * (os.tmpdir()) e apaga o arquivo ao final. Nada suja o repositório.
 * ============================================================
 */

const fs = require('fs');           // file system: ler/escrever arquivos
const path = require('path');       // caminhos portáveis entre SOs
const os = require('os');           // informações do sistema operacional

// Montamos o caminho do arquivo TEMPORÁRIO dentro da pasta tmp do SO:
const arquivoTemp = path.join(os.tmpdir(), 'playground-node-estudo.txt');

// ===== 1. FS SÍNCRONA: simples, mas TRAVA o programa enquanto trabalha =====
// Regra prática: ok em scripts pequenos; EVITE em servidores.

console.log('--- fs.writeFileSync / readFileSync ---');
fs.writeFileSync(arquivoTemp, 'Primeira linha escrita de forma sincrona.\nLinha dois.\n', 'utf8');
console.log('Arquivo criado em:', arquivoTemp);

const conteudoSync = fs.readFileSync(arquivoTemp, 'utf8');
console.log('Leitura sincrona:');
conteudoSync.split('\n').filter(Boolean).forEach((linha) => console.log(`  | ${linha}`));

// Sem o encoding 'utf8', readFileSync devolve um Buffer (bytes crus):
const bufferBruto = fs.readFileSync(arquivoTemp);
console.log('Sem utf8 recebemos Buffer?', bufferBruto instanceof Buffer, '- bytes:', bufferBruto.length);

// ===== 2. PATH: montagem segura de caminhos =====
// Nunca concatene strings com '/' ou '\': cada SO usa um separador.
// O módulo path resolve isso (e muito mais) por nós.

const caminhoCompleto = path.join(__dirname, 'aulas', 'modulo-05', 'notas.txt');
console.log('\n--- path ---');
console.log('join     :', caminhoCompleto);
console.log('basename :', path.basename(caminhoCompleto)); // só o nome do arquivo
console.log('extname  :', path.extname(caminhoCompleto));  // extensão com ponto
console.log('dirname  :', path.dirname(caminhoCompleto));  // só a(s) pasta(s)
console.log('resolve  :', path.resolve('arquivo-relativo.txt')); // absoluto a partir do cwd

// ===== 3. OS: radiografia do sistema =====

console.log('\n--- os ---');
console.log('Plataforma :', os.platform(), '| Arquitetura:', os.arch());
console.log('EOL (fim de linha):', JSON.stringify(os.EOL), os.EOL === '\n' ? '(unix-like)' : '(windows)');
console.log('Pasta temp :', os.tmpdir());
console.log('Memoria livre/total (MB):', Math.round(os.freemem() / 1024 ** 2), '/', Math.round(os.totalmem() / 1024 ** 2));

// cpus() devolve um array com um objeto por núcleo:
const nucleos = os.cpus();
console.log('CPUs       :', nucleos.length, 'nucleos - modelo resumido:');
console.log('             ', nucleos[0].model.slice(0, 50));

// ===== 4. FS ASSÍNCRONA POR CALLBACKS: estilo antigo =====
// A convenção clássica do Node: callback(erro, resultado). Funciona,
// mas encadear várias operações assim cria o "callback hell".

function lerPorCallback() {
  return new Promise((resolve) => {
    fs.readFile(arquivoTemp, 'utf8', (erro, dados) => {
      if (erro) {
        console.error('Erro na leitura por callback:', erro.message);
        resolve(null);
        return;
      }
      console.log('\n--- Callback leu a primeira linha:', dados.split('\n')[0], '---');
      resolve(dados);
    });
  });
}

// ===== 5. FS PROMISES: o jeito moderno com async/await =====
// fs.promises expõe as mesmas funções retornando Promises — combina
// perfeitamente com try/catch e await.

async function demonstrarPromises() {
  console.log('\n--- fs/promises + async/await ---');

  try {
    await fs.promises.writeFile(arquivoTemp, 'Reescrito via promises!\n', 'utf8');
    const conteudo = await fs.promises.readFile(arquivoTemp, 'utf8');
    console.log('Conteudo apos reescrita:', conteudo.trim());

    // appendFile ADICIONA ao final (writeFile sobrescreve tudo):
    await fs.promises.appendFile(arquivoTemp, 'Linha adicionada com appendFile.\n');
    const atualizado = await fs.promises.readFile(arquivoTemp, 'utf8');
    atualizado.split('\n').filter(Boolean).forEach((linha) => console.log(`  > ${linha}`));
  } catch (erro) {
    console.error('Erro nas operacoes async:', erro.message);
  }
}

// Fluxo principal assíncrono do script (CommonJS nao aceita await solto).
(async () => {
  await lerPorCallback();
  await demonstrarPromises();

  // ===== 6. LIMPEZA: deixamos o sistema como encontramos =====
  try {
    fs.unlinkSync(arquivoTemp); // apaga o arquivo temporario
    console.log('\nArquivo temporario removido. Repositorio limpo!');
  } catch (erro) {
    console.warn('\nNao consegui remover o temp:', erro.message);
  }
})();

// ===== EXPERIMENTE =====
// 1. Troque writeFile por writeFile com flag 'a' e compare com appendFile.
// 2. Use fs.existsSync antes de gravar e imprima uma mensagem caso exista.
// 3. Liste os arquivos desta pasta com fs.readdirSync(__dirname).
