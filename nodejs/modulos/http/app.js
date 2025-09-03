//importando o modulo http
const http = require('http');

// criando um servidor que responde com "hello, world!" para todos os requisitos
http.createServer((req, res) => {
    // definindo o cabeçalho da resposta com status 200 (ok) e um tipo de conteúdo text/plain
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  //enviando a resposta "Hello, world!" 
  res.end('Hello, world!');
}); .listen(8080);

