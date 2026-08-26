/**
 * SOLUÇÃO-MODELO — Formulários e Validação
 * Enunciado resolvido: exercício 1 de modulos/02-dom-eventos/03-formularios-e-validacao/exercicios.md
 * (campo "Ano de edição" obrigatório, entre 1500 e o ano atual,
 *  com mensagem customizada via setCustomValidity)
 * Abra: modulos/02-dom-eventos/solucoes/03-formularios-e-validacao/index.html no navegador
 */

const formulario = document.querySelector('#cadastro');
const campoTitulo = document.querySelector('#titulo');
const campoAno = document.querySelector('#ano');
const saida = document.querySelector('#saida');

// O limite superior é DINÂMICO (ano corrente), então o atributo max precisa ser
// gravado por JavaScript — não dá para fixá-lo num HTML estático.
const anoAtual = new Date().getFullYear();
campoAno.max = String(anoAtual);

// Regra do enunciado: mensagem customizada quando estoura a faixa.
// setCustomValidity('') LIMPA o erro — esquecer essa linha deixa o campo
// "travado" como inválido para sempre.
function validarAno() {
  const campoVazio = campoAno.value === '';
  const anoInformado = Number(campoAno.value);
  const foraDaFaixa = !campoVazio && (anoInformado < 1500 || anoInformado > anoAtual);
  campoAno.setCustomValidity(
    foraDaFaixa ? `Informe um ano entre 1500 e ${anoAtual}` : '',
  );
}

campoAno.addEventListener('input', validarAno);

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault(); // intercepta sempre, antes de qualquer decisão
  validarAno();
  if (!formulario.checkValidity()) {
    formulario.reportValidity(); // mostra as mensagens nativas por campo
    return;
  }
  saida.textContent = `Livro cadastrado: ${campoTitulo.value} (${campoAno.value})`;
  formulario.reset();
  validarAno(); // reset não dispara input: limpamos a validação manualmente
  campoTitulo.focus();
});

// Roteiro de teste manual:
// 1) Enviar vazio -> mensagens nativas de required nos dois campos.
// 2) Ano 1200 -> "Informe um ano entre 1500 e <ano atual>"; corrigir para 1995 ->
//    cadastro aparece na saída e os campos são limpos.

// DISCUSSÃO:
// 1) min/max cobrem a faixa, mas a mensagem nativa é genérica (e em inglês);
//    a customização existe para dar contexto real ao usuário.
// 2) A ordem importa: setCustomValidity DEVE voltar a '' quando o valor fica
//    válido, senão checkValidity continua falso mesmo com dados corretos.
// 3) Variação natural do exercício 5 da lista: percorrer vários campos com as
//    mesmas flags de validity (valueMissing, rangeUnderflow...) num único validador.
