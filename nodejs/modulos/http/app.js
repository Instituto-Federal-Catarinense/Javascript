//importando o modulo http
const http = require('http');

//criando um servidor que responde com "Hello World!" para todas as requisicoes
http.createServer((req, res) => {
    //definindo o cabecalho da resposta com status 200 (OK) e tipo de conteudo text/plain
    res.writeHead(200, {'Content-Type':'text/plain'});
    //enviando a resposta "Hello World!"
    res.end('ola mundo!');
//adicionando um log no console para cada requisicao recebida
}).listen(8080);
console.log('Servidor rodando em http://localhost:8080/');
