const http = require('http');

// um pedaco de dado foi recebido

http.get('http://jsonplaceholder.typicode.com/todos/2', (res) => { 
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });

    // a resposta inteira foi recebida. imprimimos o resultado
    res.on('end', () => {
        console.log(JSON.parse(data));
    });

}).on("error", (err) => {node
    console.error("Erro: " + err.message);
});