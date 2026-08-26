/** SOLUÇÃO-MODELO — 04-websockets (servidor) | Enunciado: exercícios 1 e 2 de ../04-websockets/exercicios.md | Como rodar: npm install express socket.io && node app.js
 *
 * Exercício 1 — contador de conexões: incrementa em `connection`, decrementa
 *   em `disconnect` e emite `usuarios-online` para TODOS a cada mudança;
 *   o cliente mostra "3 online" no cabeçalho.
 * Exercício 2 — explicação das três formas de emitir (ver DISCUSSÃO no fim).
 *
 * Como testar: abra http://localhost:3006 em DUAS abas e feche/recarregue
 * uma delas observando o contador no cabeçalho.
 */
const http = require('http');
const path = require('path');
const express = require('express');
const { Server } = require('socket.io');

const app = express();
const servidor = http.createServer(app);
const io = new Server(servidor);
const PORTA = 3006;

// Exercício 1 — contador global de sockets conectados.
let conectados = 0;

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  conectados += 1;
  io.emit('usuarios-online', conectados); // todo mundo vê o número atualizado

  socket.on('mensagem', (texto) => {
    if (typeof texto !== 'string' || texto.trim() === '') return;
    // Mantém o comportamento do exemplo da aula: ecoa para todos.
    io.emit('mensagem', { texto: texto.trim().slice(0, 200), horario: new Date().toISOString() });
  });

  socket.on('disconnect', () => {
    conectados -= 1;
    io.emit('usuarios-online', conectados);
  });
});

if (require.main === module) {
  servidor.listen(PORTA, () => console.log(`Chat em http://localhost:${PORTA}`));
}

module.exports = { app, servidor, io };

/* DISCUSSÃO:
 * Exercício 2 — três formas de emitir com DUAS abas abertas:
 *   io.emit('x', 1)                 -> aba A recebe 1; aba B recebe 1
 *     (todos os sockets conectados, inclusive quem disparou);
 *   socket.broadcast.emit('x', 2)   -> aba A (que disparou) NÃO recebe;
 *     aba B recebe 2 (pula o socket atual);
 *   socket.emit('x', 3)             -> só a aba A recebe 3.
 * Resumo: io.emit = todos; broadcast = todos MENOS eu; socket.emit = só eu.
 *
 * Próximos passos da lista: evento "digitando" com debounce no cliente
 * (exercício 3), salas com socket.join + io.to(sala).emit (exercício 4),
 * histórico das últimas 50 mensagens por sala (exercício 5) e o chat completo
 * de delivery com tabela de eventos documentada (exercício 6).
 */
