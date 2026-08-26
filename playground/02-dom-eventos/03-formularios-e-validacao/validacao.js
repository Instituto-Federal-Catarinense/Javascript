/**
 * ============================================================
 * PLAYGROUND — Formulários e Validação
 * ------------------------------------------------------------
 * Módulo: 02 — DOM e Eventos   |   Aula: modulos/02-dom-eventos/03-formularios-e-validacao/
 * Execute: abra playground/02-dom-eventos/03-formularios-e-validacao/index.html
 * Código comentado para estudar, alterar e QUEBRAR à vontade.
 * Errar aqui faz parte do método!
 * ============================================================
 */

// ===== 1. SELEÇÃO DOS ELEMENTOS DO FORMULÁRIO =====

const form = document.querySelector('#form-cadastro');
const campoNome = document.querySelector('#campo-nome');
const campoEmail = document.querySelector('#campo-email');
const campoIdade = document.querySelector('#campo-idade');
const mensagemSucesso = document.querySelector('#sucesso');

// ===== 2. FUNÇÕES DE VALIDAÇÃO (uma regra por campo) =====
// Cada função devolve uma STRING de erro ou '' (string vazia) se estiver OK.

function validarNome(valor) {
  const nome = valor.trim();
  if (nome === '') return 'O nome é obrigatório.';
  if (nome.length < 3) return 'O nome precisa ter ao menos 3 letras.';
  if (!nome.includes(' ')) return 'Informe nome e sobrenome.';
  return '';
}

function validarEmail(valor) {
  const email = valor.trim();
  if (email === '') return 'O e-mail é obrigatório.';
  // Regex simples: algo@algo.algumacoisa — suficiente para o curso.
  if (!/^\S+@\S+\.\S+$/.test(email)) return 'Formato inválido. Ex.: nome@site.com';
  return '';
}

function validarIdade(valor) {
  // Campos number chegam como string; converta antes de comparar!
  const idade = Number(valor);
  if (valor.trim() === '') return 'A idade é obrigatória.';
  if (Number.isNaN(idade)) return 'Digite apenas números.';
  if (!Number.isInteger(idade)) return 'Use um número inteiro.';
  if (idade < 14 || idade > 120) return 'A idade deve estar entre 14 e 120.';
  return '';
}

// ===== 3. MOSTRAR / LIMPAR ERROS COM ACESSIBILIDADE =====

// Recebe o campo, o span de erro correspondente e a mensagem encontrada.
function exibirErro(campo, spanErro, mensagem) {
  spanErro.textContent = mensagem;        // o texto visível também é o anunciado

  if (mensagem) {
    campo.classList.add('invalido');      // borda vermelha
    campo.setAttribute('aria-invalid', 'true'); // leitores de tela sabem que há problema
  } else {
    campo.classList.remove('invalido');
    campo.removeAttribute('aria-invalid'); // limpa o estado de erro
  }
}

// ===== 4. O EVENTO SUBMIT + PREVENTDEFAULT =====

form.addEventListener('submit', function (evento) {
  // SEM esta linha a página RECARREGARIA (comportamento padrão do formulário).
  // preventDefault nos deixa no controle da validação e do destino dos dados.
  evento.preventDefault();

  // Rodamos as três validações coletando as mensagens:
  const erros = [
    validarNome(campoNome.value),
    validarEmail(campoEmail.value),
    validarIdade(campoIdade.value),
  ];

  exibirErro(campoNome, document.querySelector('#erro-nome'), erros[0]);
  exibirErro(campoEmail, document.querySelector('#erro-email'), erros[1]);
  exibirErro(campoIdade, document.querySelector('#erro-idade'), erros[2]);

  // some() pergunta: existe PELO MENOS UM erro não vazio?
  if (erros.some((mensagem) => mensagem !== '')) {
    mensagemSucesso.textContent = '';       // apaga sucesso antigo
    const primeiroInvalido = [campoNome, campoEmail, campoIdade]
      .find((campo) => campo.getAttribute('aria-invalid') === 'true');
    primeiroInvalido.focus();               // leva o teclado ao primeiro campo com erro
    console.log('Formulário contém erros.');
    return;                                 // early return: nada de "enviar"
  }

  // Chegou aqui? Tudo válido! Aqui iria fetch() ou outra ação real.
  mensagemSucesso.textContent = 'Cadastro enviado com sucesso!';
  console.log('Dados prontos para envio:', {
    nome: campoNome.value.trim(),
    email: campoEmail.value.trim(),
    idade: Number(campoIdade.value),
  });
  form.reset();                             // limpa todos os campos do formulário
});

// ===== 5. FEEDBACK IMEDIATO AO SAIR DO CAMPO (evento blur) =====
// Validar ao sair do campo dá retorno rápido sem atrapalhar quem digita.

campoEmail.addEventListener('blur', function () {
  exibirErro(campoEmail, document.querySelector('#erro-email'), validarEmail(campoEmail.value));
});

// ===== EXPERIMENTE =====
// 1) Remova o evento.preventDefault() e veja a página recarregar ao enviar.
// 2) Adicione um campo "telefone" com validação de 10 a 11 dígitos numéricos.
// 3) Troque role="alert" por validação silenciosa e compare a experiência.
