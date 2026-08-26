/**
 * ============================================================
 * PLAYGROUND — JavaScript Assíncrono: callbacks, Promises e async/await
 * ------------------------------------------------------------
 * Módulo: 03 — Assíncrono e API   |   Aula: modulos/03-assincrono-api/03-javascript-assincrono/
 * Execute: node playground/03-assincrono-api/03-javascript-assincrono.js
 * Código comentado para estudar, alterar e QUEBRAR à vontade.
 * ============================================================
 */

// Helper usado em todo o arquivo: devolve uma Promise que "resolve"
// depois de `ms` milissegundos, simulando uma operação lenta (rede, disco...).
function esperar(ms, valor) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(valor), ms);
  });
}

// ===== 1. ERA DOS CALLBACKS: funções passadas como argumento =====
// Problema clássico: para encadear passos, aninhamos callbacks,
// criando o temido "callback hell" (pirâmide de indentação).

function buscarNomeCallback(id, callback) {
  // Simulamos um atraso de rede com setTimeout.
  setTimeout(() => {
    if (id <= 0) {
      // Convenção Node.js: o PRIMEIRO argumento do callback é o erro.
      callback(new Error('id invalido'), null);
      return;
    }
    callback(null, `Usuario-${id}`);
  }, 300);
}

buscarNomeCallback(1, (erro, nome) => {
  if (erro) {
    console.log('Erro no callback:', erro.message);
    return;
  }
  console.log('Callback simples:', nome);

  // Encadear outro passo exige ANINHAR -> indentação cresce sem controle.
  buscarNomeCallback(2, (erro2, nome2) => {
    console.log('Callback aninhado:', nome, '->', nome2);
    iniciarPromises();
  });
});

// ===== 2. ERA DAS PROMISES: encadeamento com then/catch =====
// Uma Promise é um "recibo" de um valor que ainda vai chegar.
// Estados possíveis: pending (pendente), fulfilled (resolvida), rejected (rejeitada).

function buscarNomePromise(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id <= 0) {
        reject(new Error('id invalido')); // caminho do fracasso
      } else {
        resolve(`Usuario-${id}`); // caminho do sucesso
      }
    }, 300);
  });
}

function iniciarPromises() {
  console.log('\n--- Promises ---');
  buscarNomePromise(3)
    .then((nome) => {
      console.log('then 1:', nome);
      // Retornar outra Promise dentro do then encadeia naturalmente:
      return buscarNomePromise(4);
    })
    .then((nome) => {
      console.log('then 2:', nome);
      return buscarNomePromise(-1); // agora vamos forçar um erro
    })
    .catch((erro) => {
      // UM catch captura erro de QUALQUER etapa da corrente.
      console.log('catch capturou:', erro.message);
    })
    .then(() => {
      // Só avançamos para a próxima era quando a corrente termina,
      // mantendo a saída do terminal em ordem para facilitar o estudo.
      demonstrarAsyncAwait();
    });
}

// ===== 3. ERA DO ASYNC/AWAIT: código assíncrono com cara de síncrono =====
// `await` só existe dentro de funções `async`. Ele PAUSA a função até a
// Promise resolver, sem travar o programa. Erros são tratados com try/catch.

async function demonstrarAsyncAwait() {
  console.log('\n--- Async/await ---');
  try {
    const nomeA = await buscarNomePromise(5); // espera e desembrulha o valor
    const nomeB = await buscarNomePromise(6);
    console.log('Sequencial :', nomeA, '->', nomeB); // ~600ms no total

    const [nomeC, nomeD] = await Promise.all([
      buscarNomePromise(7),
      buscarNomePromise(8),
    ]);
    console.log('Paralelo   :', nomeC, 'e', nomeD); // ~300ms no total
  } catch (erro) {
    console.log('Erro no await:', erro.message);
  }

  demonstrarCombinadores();
}

// ===== 4. COMBINADORES: all, allSettled e race =====
async function demonstrarCombinadores() {
  console.log('\n--- Promise.all / allSettled / race ---');

  // all: rejeita se UMA falhar; resolve na ordem ORIGINAL das promessas.
  try {
    const resultados = await Promise.all([
      esperar(300, 'rapida'),
      esperar(100, 'lenta'),
    ]);
    console.log('all       :', resultados, '(ordem declarada, nao de chegada)');
  } catch (erro) {
    console.log('all erro  :', erro.message);
  }

  // allSettled: nunca rejeita; devolve status de TODAS (inclusive as que falharam).
  const tudo = await Promise.allSettled([
    esperar(50, 'ok'),
    Promise.reject(new Error('falhou de proposito')),
  ]);
  console.log('allSettled:', tudo.map((r) => `${r.status}${r.status === 'fulfilled' ? ':' + r.value : ''}`).join(', '));

  // race: resolve/rejeita conforme a PRIMEIRA a terminar (ordem de chegada!).
  const vencedora = await Promise.race([esperar(200, 'tartaruga'), esperar(80, 'lebre')]);
  console.log('race      :', vencedora, '(a lebre chegou primeiro)');

  // Demonstrando ordem de chegada imprimindo cada resolução no momento dela:
  console.log('\nOrdem de chegada ao vivo:');
  esperar(120, 'B').then((v) => console.log(' cheguei:', v));
  esperar(40, 'A').then((v) => console.log(' cheguei:', v));
  esperar(200, 'C').then((v) => {
    console.log(' cheguei:', v);
    console.log('\nFim do playground assincrono.');
  });
}

// ===== EXPERIMENTE =====
// 1. Troque Promise.all por Promise.allSettled no bloco try da seção 3.
// 2. Adicione um terceiro passo ao callback hell e sinta a pirâmide crescer.
// 3. Faça o race receber uma Promise.reject rápida e veja ele rejeitar junto.
