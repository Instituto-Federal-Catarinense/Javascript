const https = require('https');

https.get('https://jsonplaceholder.typicode.com/todos/2', (res) => {
    let data = '';

//um pedaço de dado foi recebido.
res.on('data', (chunk) => {
    data += chunk;
});

//A resposta inteira foi recebida. Imprime o resultado.
res.on('end', () => {
    console.log(JSON.parse(data));
});

}).on("error", (err) => {
    console.log("Erro: " + err.mesage);
});