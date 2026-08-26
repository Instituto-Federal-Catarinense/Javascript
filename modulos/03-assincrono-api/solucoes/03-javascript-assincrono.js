/**
 * SOLUÇÃO-MODELO — JavaScript Assíncrono
 * Enunciado resolvido: exercícios 1 e 2 de modulos/03-assincrono-api/03-javascript-assincrono/exercicios.md
 * Execute: node modulos/03-assincrono-api/solucoes/03-javascript-assincrono.js
 */

// Deixa a primeira letra maiúscula para as mensagens ficarem apresentáveis.
function capitalizar(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

// EXERCÍCIO 1 — Pedido prometido
function prepararPedido(item, segundos) {
  return new Promise((resolver) => {
    setTimeout(() => resolver(`${capitalizar(item)} pronto!`), segundos * 1000);
  });
}

// async/await escreve sequência assíncrona com cara de código síncrono;
// await só existe dentro de função async. Os pedidos saem UM APÓS O OUTRO,
// pois cada await espera o anterior terminar.
async function servirPedidos() {
  console.log('Iniciando suco');
  console.log(await prepararPedido('suco', 1));
  console.log('Iniciando sanduiche');
  console.log(await prepararPedido('sanduiche', 2));
  console.log('Todos os pedidos entregues');
}

// EXERCÍCIO 2 — Do callback para a Promise
// Função legada, intocada: assina um callback ao terminar.
function tocarAlarme(segundos, aoTerminar) {
  setTimeout(() => aoTerminar(`Alarme de ${segundos}s`), segundos * 1000);
}

// Prometificação: embrulhamos o legado num executor cujo resolve ocupa
// o lugar do callback. Mesma temporização, interface moderna.
function tocarAlarmeAsync(segundos) {
  return new Promise((resolver) => {
    tocarAlarme(segundos, (mensagem) => resolver(mensagem));
  });
}

async function demonstrarAlarmes() {
  // Forma antiga, com callback:
  tocarAlarme(1, (mensagem) => console.log(`Callback: ${mensagem}`));

  // Forma nova, com await:
  const mensagem = await tocarAlarmeAsync(1);
  console.log(`Await: ${mensagem}`);
}

servirPedidos()
  .then(demonstrarAlarmes)
  .then(() => console.log('Fim do expediente'));

// DISCUSSÃO:
// 1) await em sequência soma tempos (1s + 2s); iniciando as Promises antes e
//    usando Promise.all, o total seria o maior deles (2s) — paralelismo do
//    exercício 3 da lista.
// 2) Toda Promise criada com executor deve chamar resolve OU reject exatamente
//    uma vez; chamar duas vezes ignora a segunda silenciosamente.
// 3) Erro comum: esquecer de tratar rejeição. Uma Promise rejeitada sem catch
//    vira unhandledRejection e, em Node moderno, encerra o processo.
