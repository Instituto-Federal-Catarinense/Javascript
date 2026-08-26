/* global io -- io() é injetado no navegador pelo script do socket.io carregado pelo index.html */
const socket = io();
const lista = document.querySelector('#mensagens');
document.querySelector('#form').addEventListener('submit', (evento) => { evento.preventDefault(); const campo = document.querySelector('#texto'); socket.emit('mensagem', campo.value); campo.value = ''; });
socket.on('mensagem', ({ texto, horario }) => { const item = document.createElement('li'); item.textContent = `${horario}: ${texto}`; lista.appendChild(item); });