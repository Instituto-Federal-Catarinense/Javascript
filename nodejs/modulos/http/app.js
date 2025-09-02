// Cria uma constante "http" que importa o módulo nativo "http" do Node.js
const http = require('http');

// Cria um servidor HTTP que responde com "Hello World!" para todas as requisições
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});// Define o cabeçalho da resposta HTTP
  res.end('Hello World!');// Envia a resposta "Hello World!" e finaliza a resposta
}).listen(8080);// O servidor escuta na porta 8080
