/**
 * ============================================================
 * PLAYGROUND — Fetch API: consumindo uma API pública real
 * ------------------------------------------------------------
 * Módulo: 03 — Assíncrono e API   |   Aula: modulos/03-assincrono-api/04-fetch-api/
 * Execute: node playground/03-assincrono-api/04-fetch-api.js
 * Código comentado para estudar, alterar e QUEBRAR à vontade.
 *
 * Requer internet: usa https://jsonplaceholder.typicode.com
 * (API falsa gratuita para treino — idealizada por typicode).
 * O fetch já vem nativo no Node 18+; nada precisa ser instalado.
 * ============================================================
 */

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// ===== 1. GET BÁSICO: buscar lista de usuários =====
async function exemploGetLista() {
  console.log('\n--- GET /users ---');

  // fetch devolve uma Promise com o objeto Response.
  const response = await fetch(`${BASE_URL}/users`);

  // IMPORTANTE: fetch NÃO lança erro para status 404/500!
  // Por isso SEMPRE conferimos response.ok (true para status 200-299).
  if (!response.ok) {
    throw new Error(`Requisicao falhou com status ${response.status}`);
  }

  // response.json() também é assíncrono: lê e converte o corpo para objeto.
  const usuarios = await response.json();

  console.log('Status HTTP     :', response.status, response.statusText);
  console.log('Total de users  :', usuarios.length);
  console.log('Primeiro usuario:', usuarios[0].name, '-', usuarios[0].email);
}

// ===== 2. TRATANDO 404 E 500: quando a coisa dá errado =====
async function exemploErrosHttp() {
  console.log('\n--- Tratando erros HTTP ---');

  // Caso A: recurso inexistente -> status 404 (Not Found).
  const resposta404 = await fetch(`${BASE_URL}/users/9999`);
  if (resposta404.status === 404) {
    console.log('404 detectado: usuario 9999 nao existe.');
  }

  // Caso B: rota que não existe -> JSONPlaceholder responde 500 ou 404.
  // O ponto didático: verificamos o status ANTES de confiar no corpo.
  const respostaRuim = await fetch(`${BASE_URL}/rota-inexistente`);
  console.log('Rota invalida retornou status:', respostaRuim.status);
  console.log('response.ok era?', respostaRuim.ok, '(false = trate como erro!)');
}

// ===== 3. POST: enviando dados com headers e body =====
async function exemploPost() {
  console.log('\n--- POST /posts ---');

  const novoPost = {
    title: 'Post criado no playground',
    body: 'Conteudo de estudo usando fetch nativo do Node.',
    userId: 1,
  };

  const response = await fetch(`${BASE_URL}/posts`, {
    method: 'POST', // verbo HTTP: criar recurso
    headers: {
      'Content-Type': 'application/json', // avisamos que o corpo é JSON
    },
    body: JSON.stringify(novoPost), // corpo PRECISA ser texto, não objeto
  });

  if (!response.ok) {
    throw new Error(`POST falhou com status ${response.status}`);
  }

  const postCriado = await response.json();
  // A API fake devolve o objeto com um id novo simulado:
  console.log('Post criado com id:', postCriado.id);
  console.log('Titulo recebido  :', postCriado.title);
}

// ===== 4. PADRÃO REUTILIZÁVEL: função buscarUsuario(id) =====
// Concentramos fetch + validações + tratamento em um único lugar.
// O resto do código só chama `await buscarUsuario(1)` sem se preocupar
// com detalhes de HTTP — isso é abstração funcionando.

class HttpError extends Error {
  constructor(status, mensagem) {
    super(mensagem);
    this.name = 'HttpError';
    this.status = status;
  }
}

async function buscarUsuario(id) {
  const response = await fetch(`${BASE_URL}/users/${id}`);

  // Mapeamos cada status conhecido para uma mensagem amigável.
  if (response.status === 404) {
    throw new HttpError(404, `Usuario ${id} nao encontrado`);
  }
  if (!response.ok) {
    throw new HttpError(response.status, `Erro do servidor (${response.status})`);
  }

  return response.json();
}

async function demonstrarPadrao() {
  console.log('\n--- Funcao reutilizavel buscarUsuario ---');
  try {
    const usuario = await buscarUsuario(1);
    console.log('Encontrado:', usuario.name, '| cidade:', usuario.address.city);

    await buscarUsuario(9999); // força 404 para testar o caminho de erro
  } catch (erro) {
    if (erro instanceof HttpError && erro.status === 404) {
      console.log('Tratado como esperado ->', erro.message);
    } else {
      // Erro inesperado (ex.: sem internet): relançamos para não esconder.
      throw erro;
    }
  }
}

// Executa todas as demonstrações em sequência.
(async () => {
  try {
    await exemploGetLista();
    await exemploErrosHttp();
    await exemploPost();
    await demonstrarPadrao();
    console.log('\nPlayground de fetch concluido com sucesso.');
  } catch (erro) {
    // Se cairmos aqui, provavelmente falta internet ou a API está fora.
    console.error('\nFalha geral (verifique sua conexao):', erro.message);
    process.exitCode = 1;
  }
})();

// ===== EXPERIMENTE =====
// 1. Crie uma funcao atualizarUsuario(id) usando method: 'PUT'.
// 2. Adicione um timeout ao fetch combinando com Promise.race.
// 3. Liste os comentarios do post 1 em GET /posts/1/comments e mostre o email do autor.
