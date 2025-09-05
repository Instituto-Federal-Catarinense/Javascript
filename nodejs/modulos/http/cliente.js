// Importando o módulo HTTP
const http = require('http');

http.get('http://jsonplaceholder.typicode.com/posts/1', (res) => {
    let data = '';

    // Um pedaço de dado foi recebido.
    res.on('data', (chunk) => {
        data += chunk;
    });

    // A Resposta inteira foi recebida. Imprime o resultado
    res.on('end', () => {
        console.log(JSON.parse(data));
    });

}).on("error", (err) => {
    console.log("Erro: " + err.message);
});