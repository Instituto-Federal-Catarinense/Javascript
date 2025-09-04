const http = require('http');

http.get('http://jsonplaceholder.typicode.com/todos/1', (res) => {
    let data = '';

    // Um pedaço de dado foi recebido.
    res.on('data', (chunk) => {
        data += chunk;
    });

    // A resposta foi recebida. Imprime o resultado.
    res.on('end', () => {
        console.log(JSON.parse(data));
    });

}).on('error', (err) => {
    console.log("Error: " + err.message);
});