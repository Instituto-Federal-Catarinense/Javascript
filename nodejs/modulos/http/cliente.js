const http = require('http');

http.get ('http://jsonplaceholder.typicode.com/todos/2', (res) => {
    let data = '';
    //um pedaço de dado foi recebido.
    res.on('data', (chunk) => {
        data += chunk;
    });


    // a resposta inteira foi recebida. imprime o resultado
    res.on('end', () => {
        console.log(JSON.parse(data));
    });


}).on("error", (err) => {
    console.log("Erro: " + err.message);
});