const http = require('http');

http.get('http://jsonplaceholder.typicode.com/todos/1', (res) => {
    let data = '';
    
    // Recebe os dados em pedaços
    res.on('data', (chunk) => {
        data += chunk;
    });

    // Quando a resposta terminar, exibe os dados
    res.on('end', () => {
        console.log(JSON.parse(data));
    });
}).on('error', (err) => {
    console.error('Erro: ' + err.message);
});