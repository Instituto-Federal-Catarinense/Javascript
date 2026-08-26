const botao = document.querySelector('#botao');
const saida = document.querySelector('#saida');
let cliques = 0;
botao.addEventListener('click', () => { cliques += 1; saida.textContent = `Cliques: ${cliques}`; });
document.querySelector('#form').addEventListener('submit', (evento) => {
  evento.preventDefault();
  saida.textContent = `Olá, ${document.querySelector('#nome').value}!`;
});