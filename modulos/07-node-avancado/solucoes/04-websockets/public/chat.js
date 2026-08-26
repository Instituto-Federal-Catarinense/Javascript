/* global io -- io() é injetado no navegador pelo script do socket.io servido pelo app.js */
/** SOLUÇÃO-MODELO — 04-websockets (cliente) | Enunciado: exercício 1 de ../../04-websockets/exercicios.md | Uso: servido estaticamente por app.js em http://localhost:3006 */
const socket = io();

const lista = document.querySelector('#mensagens');
const rotuloOnline = document.querySelector('#online');

// Exercício 1: o servidor emite 'usuarios-online' a cada conexão/desconexão.
socket.on('usuarios-online', (total) => {
  rotuloOnline.textContent = `${total} online`;
});

document.querySelector('#form').addEventListener('submit', (evento) => {
  evento.preventDefault();
  const campo = document.querySelector('#texto');
  socket.emit('mensagem', campo.value);
  campo.value = '';
});

socket.on('mensagem', ({ texto, horario }) => {
  const item = document.createElement('li');
  item.textContent = `${horario}: ${texto}`;
  lista.appendChild(item);
});
