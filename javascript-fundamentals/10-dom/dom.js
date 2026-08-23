const titulo = document.getElementById('titulo');
const lista = document.querySelector('#lista');
['Selecionar elemento', 'Criar elemento', 'Alterar classe'].forEach((texto) => {
  const item = document.createElement('li');
  item.textContent = texto;
  lista.appendChild(item);
});
document.querySelector('#alternar').addEventListener('click', () => {
  titulo.classList.toggle('destaque');
});