//importa
const http = require('http')

//cria o servidor http
http.createServer((req, res) => {
    // define que está ok (200) e que será só texto
    res.writeHead(200, {'Content-Type': 'text/plain'})
    // imprime na página
    res.end('Hello World!')
}).listen(8080) // <- a porta que escuta