// importando o modulo http
 const http = require('http')

 //criando um servido que reponde com "hello wolrd" para todas as requisições
 http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end("Olá Mundo!");

 }).listen(8080)