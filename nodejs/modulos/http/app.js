// importando o módulo http
const http = require('http');

// criando um servidor que responde com "Hello, World!" para todas as requisições
http.createServer((req, res) => {
    // definindo o cabeçalho da resposta com status 200 (ok) e tipo de conteúdo como texto simples
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // enviando a resposta "Hello, World!"
    res.end('Olá, Mundo!');
    // adicionando um log no console para cada requisição recebida
}).listen(8080); 