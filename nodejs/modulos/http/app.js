// Cria uma constante "http" que importa o módulo nativo "http" do Node.js
const http = require('http');

// Cria um servidor HTTP que responde com "Hello World!" para todas as requisições
// A função callback recebe dois parâmetros: req (requisição) e res (resposta)
http.createServer(function (req, res) {
  
  // Define o cabeçalho da resposta HTTP, 200 indica sucesso e o content-type é HTML em forma de texto
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');// Envia a resposta "Hello World!" e finaliza a resposta

}).listen(8080);// O servidor escuta na porta 8080

console.log('Servidor rodando em http://localhost:8080/');// Loga uma mensagem no console indicando onde o servidor está rodando