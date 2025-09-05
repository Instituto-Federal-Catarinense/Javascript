// Importa o módulo http nativo do Node.js
const http = require('http');
// Cria um servidor HTTP
http.createServer((req,res) => {
    // Define o status 200 (OK) e o tipo de conteúdo como texto simples
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // Envia a resposta para o cliente e finaliza a conexão
    res.end('ABSDNKLAFYDHIASOF');
// Faz o servidor escutar na porta 8080
}).listen(8080);