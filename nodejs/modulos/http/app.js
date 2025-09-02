const http = require('http'); // importa o módulo HTTP
http.createServer((req,res) => { // cria um servidor
    res.writeHead(200, {'Content-Type': 'text/plain'}); // cabeçalho da resposta
    res.end('ABSDNKLAFYDHIASOF '); // corpo da resposta
}).listen(1236); // o servidor escuta a porta 1236