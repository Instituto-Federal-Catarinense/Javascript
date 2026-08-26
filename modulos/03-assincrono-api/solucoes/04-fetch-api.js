/**
 * SOLUÇÃO-MODELO — Fetch API
 * Enunciado resolvido: exercícios 1 e 2 de modulos/03-assincrono-api/04-fetch-api/exercicios.md
 * Execute: node modulos/03-assincrono-api/solucoes/04-fetch-api.js  (Node 18+)
 */

const URL_BASE = 'https://jsonplaceholder.typicode.com';

// Ritual do fetch: checar resposta.ok ANTES de ler o corpo — o fetch só rejeita
// em falha de rede; status 404/500 passam despercebidos sem essa verificação.
async function obterJSON(caminho) {
  const resposta = await fetch(`${URL_BASE}${caminho}`);
  if (!resposta.ok) {
    throw new Error(`HTTP ${resposta.status} em ${caminho}`);
  }
  return resposta.json();
}

// EXERCÍCIO 1 — Diretório da equipe
async function listarEquipe() {
  const usuarios = await obterJSON('/users');
  usuarios.forEach((usuario, indice) => {
    console.log(`${indice + 1}. ${usuario.name} - ${usuario.email}`);
  });
}

// EXERCÍCIO 2 — Ficha individual
async function mostrarFicha(id) {
  const resposta = await fetch(`${URL_BASE}/users/${id}`);

  // O 404 é caso de negócio aqui: respondemos com mensagem em vez de quebrar.
  if (resposta.status === 404) {
    console.log('Usuária não encontrada');
    return;
  }
  if (!resposta.ok) {
    throw new Error(`HTTP ${resposta.status} em /users/${id}`);
  }

  const usuario = await resposta.json();
  console.log(`${usuario.name} mora em ${usuario.address.city}. Lema: "${usuario.company.catchPhrase}"`);
}

async function main() {
  try {
    await listarEquipe();
    await mostrarFicha(7);
    await mostrarFicha(999); // 404 tratado como caso de negócio
  } catch (erro) {
    // Rede fora, servidor caído ou status inesperado caem aqui.
    console.error(`Falha na consulta: ${erro.message}`);
  } finally {
    console.log('Consultas concluídas');
  }
}

main();

// DISCUSSÃO:
// 1) fetch NUNCA rejeita por status HTTP — sem o if (!resposta.ok) um 404 seria
//    tratado como sucesso e .json() poderia até explodir com corpo vazio.
// 2) Centralizar GET numa função obterJSON elimina repetição do ritual ok/json
//    e dá um único ponto para acrescentar headers ou timeout no futuro.
// 3) Variação: Promise.all([fetch(users), fetch(posts)]) busca em paralelo — é o
//    caminho natural quando várias consultas independentes alimentam uma tela.
