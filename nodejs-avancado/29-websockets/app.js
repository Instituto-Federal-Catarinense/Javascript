const http = require('http'); const express = require('express'); const { Server } = require('socket.io');
const app = express(); const servidor = http.createServer(app); const io = new Server(servidor); app.use(express.static('public'));
io.on('connection', (socket) => { socket.on('mensagem', (texto) => io.emit('mensagem', { texto, horario: new Date().toISOString() })); });
if (require.main === module) servidor.listen(3006, () => console.log('Chat em http://localhost:3006')); module.exports = { app, servidor };