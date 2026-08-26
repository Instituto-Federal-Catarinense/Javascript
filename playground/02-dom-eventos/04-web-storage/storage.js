/**
 * ============================================================
 * PLAYGROUND — Web Storage (localStorage)
 * ------------------------------------------------------------
 * Módulo: 02 — DOM e Eventos   |   Aula: modulos/02-dom-eventos/04-web-storage/
 * Execute: abra playground/02-dom-eventos/04-web-storage/index.html
 * Código comentado para estudar, alterar e QUEBRAR à vontade.
 * Errar aqui faz parte do método!
 * ============================================================
 */

// ===== 1. CONCEITOS BÁSICOS DO LOCALSTORAGE =====

// localStorage guarda pares CHAVE → VALOR apenas como STRING,
// persiste mesmo fechando o navegador e é exclusivo da origem (domínio).
// API principal: setItem(chave, valor) | getItem(chave) | removeItem(chave) | clear().

const CHAVE_USUARIO = 'playground:usuario'; // nomes com prefixo evitam colisões
const CHAVE_TEMA = 'playground:tema';
const CHAVE_VISITAS = 'playground:visitas';

// ===== 2. HELPERS SEGUROS PARA JSON =====

// Salva QUALQUER objeto/array convertendo para string JSON antes.
function salvar(chave, dados) {
  localStorage.setItem(chave, JSON.stringify(dados));
}

// Lê e converte de volta. Se o dado estiver corrompido, devolve o fallback.
function ler(chave, fallback) {
  const bruto = localStorage.getItem(chave);
  if (bruto === null) return fallback; // chave nunca foi salva

  try {
    return JSON.parse(bruto);          // string JSON → objeto JS de verdade
  } catch (erro) {
    console.warn(`Dado corrompido em "${chave}":`, erro.message);
    return fallback;
  }
}

// Por que helpers? Porque getItem/setItem só falam STRING:
// sem JSON, um objeto viraria o texto inútil "[object Object]".

// ===== 3. CONTADOR DE VISITAS PERSISTENTE =====

function atualizarContadorDeVisitas() {
  // Lê o número salvo (ou 0 na primeira visita) e soma 1:
  const visitas = Number(ler(CHAVE_VISITAS, 0)) + 1;
  salvar(CHAVE_VISITAS, visitas);

  document.querySelector('#contador-visitas').textContent =
    `Esta é a sua visita de número ${visitas}. Recarregue a página para ver crescer!`;
}

// ===== 4. TEMA CLARO/ESCURO PERSISTIDO =====

const btnTema = document.querySelector('#btn-tema');

// Aplica a classe .escuro no body conforme a preferência salva.
function aplicarTema(temaSalvo) {
  if (temaSalvo === 'escuro') {
    document.body.classList.add('escuro');
  } else {
    document.body.classList.remove('escuro');
  }
}

btnTema.addEventListener('click', function () {
  // A classe está presente? Então o tema ATUAL é escuro...
  const escuroAtivo = document.body.classList.contains('escuro');
  const novoTema = escuroAtivo ? 'claro' : 'escuro';

  aplicarTema(novoTema);   // muda a tela agora...
  salvar(CHAVE_TEMA, novoTema); // ...e grava para as próximas visitas
});

// ===== 5. PERFIL DO USUÁRIO COMO OBJETO JSON =====

const campoNome = document.querySelector('#campo-nome');
const saudacao = document.querySelector('#saudacao');

document.querySelector('#btn-salvar').addEventListener('click', function () {
  const nome = campoNome.value.trim();
  if (!nome) {
    saudacao.textContent = 'Digite um nome antes de salvar.';
    return;                 // early return evita salvar perfil vazio
  }

  // Objeto estruturado: JSON preserva TODAS as propriedades.
  const usuario = { nome: nome, membroDesde: new Date().getFullYear() };
  salvar(CHAVE_USUARIO, usuario);
  exibirSaudacao(usuario);
});

function exibirSaudacao(usuario) {
  saudacao.textContent = `Bem-vindo(a) de volta, ${usuario.nome}!`;
}

// ===== 6. LIMPAR DADOS SALVOS (REMOVEITEM) =====

document.querySelector('#btn-limpar').addEventListener('click', function () {
  localStorage.removeItem(CHAVE_USUARIO); // apaga UMA chave específica
  campoNome.value = '';
  saudacao.textContent = 'Perfil removido.';
  // Não limpamos tema/visitas de propósito: cada chave é independente.
  // Para apagar TUDO desta origem existiria localStorage.clear().
});

// ===== 7. INICIALIZAÇÃO: RESTAURAR O ESTADO AO ABRIR A PÁGINA =====

atualizarContadorDeVisitas();

// Tema salvo? Aplica antes de a pessoa piscar os olhos.
aplicarTema(ler(CHAVE_TEMA, 'claro'));

// Perfil salvo? Reaproveita sem pedir nada ao usuário.
const usuarioSalvo = ler(CHAVE_USUARIO, null);
if (usuarioSalvo && usuarioSalvo.nome) {
  campoNome.value = usuarioSalvo.nome; // preenche o campo com o que já sabemos
  exibirSaudacao(usuarioSalvo);
}

// ===== EXPERIMENTE =====
// 1) Troque localStorage por sessionStorage e observe o contador zerar por aba.
// 2) Salve também a data/hora da última visita no objeto usuario (ISO string).
// 3) Edite o valor no F12 > Application manualmente e veja o try/catch agir.
