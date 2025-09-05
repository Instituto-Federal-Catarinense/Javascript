// Importa o módulo 'http' nativo do Node.js
const http = require('http');

// Cria um servidor HTTP
http.createServer((req, res) => {
    // Define o status da resposta como 200 (OK) e o tipo de conteúdo como texto simples
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // Envia o texto 'Hello World' como resposta e finaliza a conexão
    res.end('Hello World\n');
    // Inicia o servidor na porta 3000
}).listen(3000);
console.log('Servidor rodando em http://localhost:3000/');