const http = require('http');

http.get('http://jsonplaceholder.typicode.com/todos/57', (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log(JSON.parse(data));
    });

}).on('error', (err) => {
    console.error("Error: " + err.message);
});