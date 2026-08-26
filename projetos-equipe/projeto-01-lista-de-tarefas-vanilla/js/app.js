// ==========================================================================
// Lista de Tarefas — script principal
// Fluxo do app: 1) mudamos o ESTADO (array `tarefas`); 2) salvamos no
// localStorage; 3) redesenhamos a tela com renderizar().
// O scaffold já implementa: adicionar, listar, concluir, remover e persistir.
// Procure os comentários TODO(issue-N): eles apontam onde entra cada issue.
// ==========================================================================

// ---------------------------------------------------------------------------
// ESTADO DA APLICAÇÃO
// Formato de cada tarefa: { id: number, titulo: string, concluida: boolean }
// ---------------------------------------------------------------------------
const tarefas = [];
let filtroAtual = 'todas'; // valores: 'todas' | 'ativas' | 'concluidas'

// ---------------------------------------------------------------------------
// REFERÊNCIAS AO DOM (consultados uma única vez e guardados em constantes)
// ---------------------------------------------------------------------------
const formTarefa = document.querySelector('#form-tarefa');
const inputTarefa = document.querySelector('#input-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const paragrafoSemTarefas = document.querySelector('#sem-tarefas');
const botaoLimparConcluidas = document.querySelector('#btn-limpar-concluidas');
const botaoTema = document.querySelector('#btn-tema');

// ---------------------------------------------------------------------------
// PERSISTÊNCIA (localStorage só guarda texto: usamos JSON para converter)
// ---------------------------------------------------------------------------

function salvarNoStorage() {
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function carregarDoStorage() {
  const dadosSalvos = localStorage.getItem('tarefas');
  if (!dadosSalvos) return; // primeira visita: nada salvo ainda

  try {
    const listaSalva = JSON.parse(dadosSalvos);
    if (Array.isArray(listaSalva)) tarefas.push(...listaSalva);
  } catch (erro) {
    console.error('Não foi possível ler as tarefas salvas:', erro);
  }
}

// ---------------------------------------------------------------------------
// OPERAÇÕES SOBRE O ESTADO (regras do app)
// ---------------------------------------------------------------------------

function adicionarTarefa(texto) {
  // Date.now() gera um id simples: milissegundos desde 1970.
  tarefas.push({ id: Date.now(), titulo: texto, concluida: false });
}

function concluirTarefa(id) {
  const tarefa = tarefas.find((t) => t.id === id);
  if (tarefa) tarefa.concluida = !tarefa.concluida; // alterna
}

function removerTarefa(id) {
  const indice = tarefas.findIndex((t) => t.id === id);
  if (indice !== -1) tarefas.splice(indice, 1); // remove 1 item na posição
}

// TODO(issue-7): implementar os filtros de verdade.
// Dica: use tarefas.filter() comparando `concluida` conforme `filtroAtual`,
// ligue os cliques dos botões [data-filtro] (guarde o filtro em filtroAtual)
// e destaque o botão ativo com a classe .ativo. Depois chame renderizar().
function filtrarTarefas() {
  return [...tarefas]; // por enquanto devolve sempre todas
}

// ---------------------------------------------------------------------------
// RENDERIZAÇÃO (estado -> tela)
// ---------------------------------------------------------------------------

// Cria o <li> de uma tarefa: checkbox + título + botão remover.
function criarItemTarefa(tarefa) {
  const li = document.createElement('li');
  li.dataset.id = String(tarefa.id); // guarda o id no HTML para os eventos
  if (tarefa.concluida) li.classList.add('concluida');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('check-tarefa');
  checkbox.checked = tarefa.concluida;

  const titulo = document.createElement('span');
  titulo.classList.add('titulo-tarefa');
  titulo.textContent = tarefa.titulo; // textContent evita injeção de HTML

  const botaoRemover = document.createElement('button');
  botaoRemover.type = 'button';
  botaoRemover.classList.add('btn-remover');
  botaoRemover.textContent = 'Remover';

  li.append(checkbox, titulo, botaoRemover);

  // TODO(issue-10): editar o título com duplo clique.
  // Ouça 'dblclick', troque o <span> por um <input>; Enter salva no estado
  // + storage, Esc cancela.

  return li;
}

function renderizar() {
  listaTarefas.innerHTML = ''; // limpa e redesenha tudo (simples e seguro)

  const visiveis = filtrarTarefas();
  visiveis.forEach((tarefa) => listaTarefas.appendChild(criarItemTarefa(tarefa)));

  paragrafoSemTarefas.hidden = visiveis.length > 0; // aviso de lista vazia

  atualizarContador();
}

// TODO(issue-8): implementar o contador real.
// Dica: conte as tarefas com concluida === false e escreva em #contador
// algo como "2 tarefas pendentes" / "1 tarefa pendente".
function atualizarContador() {
  // placeholder: será substituído pela issue 8
}

// ---------------------------------------------------------------------------
// EVENTOS
// ---------------------------------------------------------------------------

// Envio do formulário: cria uma nova tarefa.
formTarefa.addEventListener('submit', (evento) => {
  evento.preventDefault(); // impede o recarregamento padrão da página

  const texto = inputTarefa.value;
  // ATENÇÃO: esta validação só bloqueia string totalmente vazia.
  // Texto só com espaços passa... comportamento suspeito? Veja a issue 6.
  if (texto === '') return;

  adicionarTarefa(texto);
  inputTarefa.value = '';
  inputTarefa.focus();

  salvarNoStorage();
  renderizar();
});

// Delegação de eventos: UM listener cuida de todos os itens da lista,
// inclusive dos criados depois (evita addEventListener dentro de loop).
listaTarefas.addEventListener('click', (evento) => {
  const item = evento.target.closest('li[data-id]');
  if (!item) return;

  const id = Number(item.dataset.id); // dataset sempre vem como texto

  if (evento.target.matches('.check-tarefa')) {
    concluirTarefa(id);
    salvarNoStorage();
    renderizar();
  }

  if (evento.target.matches('.btn-remover')) {
    removerTarefa(id);
    salvarNoStorage();
    renderizar();
  }
});

// TODO(issue-9): tema claro/escuro.
// Dica: alterne document.documentElement.dataset.tema entre 'escuro' e
// undefined, salve a escolha no localStorage e reaplique ao carregar a página.
// O CSS já está pronto (bloco html[data-tema='escuro']).
botaoTema.addEventListener('click', () => {});

// TODO(issue-11): limpar todas as concluídas de uma vez.
// Dica: mantenha no estado apenas as não concluídas, salve e renderize.
// Pergunte à equipe: precisa confirmar antes? (window.confirm resolve.)
botaoLimparConcluidas.addEventListener('click', () => {});

// ---------------------------------------------------------------------------
// INICIALIZAÇÃO
// ---------------------------------------------------------------------------
carregarDoStorage();
renderizar();
