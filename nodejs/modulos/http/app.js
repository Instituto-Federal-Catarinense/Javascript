// importando o módulo http
const http = require('http');
// criando um servidor HTTP
http.createServer((req, res) => {
    // definindo o cabeçalho da resposta HTTP
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // enviando a resposta "Hello World" para o cliente
    res.end('Hello World\n');
}).listen(8080); // o servidor escuta na porta 8080