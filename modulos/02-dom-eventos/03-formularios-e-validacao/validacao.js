const formulario = document.querySelector('#cadastro');
const nome = document.querySelector('#nome');
const mensagem = document.querySelector('#mensagem');
formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  nome.setCustomValidity(nome.value.trim().length < 3 ? 'Informe pelo menos 3 caracteres.' : '');
  if (!formulario.checkValidity()) { formulario.reportValidity(); return; }
  mensagem.textContent = 'Cadastro válido!';
});