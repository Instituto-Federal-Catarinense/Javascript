//importando o modulo http
const http = require('http');

//criando um servidor que responde com "Hello world!" para todas as requisições
http.createServer((req, res)=> {
    //definindo o cabeçalho da resposta com status 200 (ok) e tipo de conteudo text/plain
    res.writeHead(200, {'Content-type': 'text/plain'});
    //enviando a resposta "Hello word"
    res.end('Hello world!');
    //adicionando um log no console para cada requisição recebida
}).listen(8080);