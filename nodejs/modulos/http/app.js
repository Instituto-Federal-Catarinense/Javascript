// Importa o módulo 'http', que permite criar servidores web no Node.js
const http = require('http');

// Cria um servidor web
http.createServer((req, res) => {
      // Define o status da resposta como 200 (OK)
    // e o tipo de conteúdo como texto simples (plain text
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // Envia a mensagem "Hello World" como resposta e finaliza
    res.end('Olá Mundo!');
    // O servidor vai "ouvir" (ficar ativo) na porta 8080
}).listen(8080);
console.log('Servidor rodando em http://localhost:8080/')