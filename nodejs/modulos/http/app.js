//importanto o mudolo http
const http = require('http');

//criando um servidor que responde "Hello World!" para todas as requisicoes
http.createServer((req,res) => {
    //definindo o cabecalho da resposta com status 200 (OK) e tipo de conteudo texto/plain
    res.writeHead(200, {'content-type': 'text/plain'});
    //enviado a resposta "Hello World!"
    res.end('Ola, Mundo!');
    //adicionando um log no console para cada requisicao recebida
}).listen(8080);
console.log('Servidor rodando em http://localhost:8080/');