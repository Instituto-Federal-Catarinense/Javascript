//importando o modulo http
const http = require('http');

//criando um servidor que responde com "hello World" para todas as resquisicoes
http.createServer((req, res) => {
    //definindo o cabecalho da resposta com status 200 (OK) e tipo de conteudo text/plain
    res.writeHead(200, {'Content-Type': 'text/plain'});
    //enviando resposta "Hello World"
    res.end('Hello World');
    //adicionando um log no console para cada requisicao  recebida
}) .listen(8080);