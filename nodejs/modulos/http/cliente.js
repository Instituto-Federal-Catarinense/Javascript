// cliente.js
// Importa o módulo HTTP nativo do Node.js
const http = require('http');


http.get('http://jsonplaceholder.typicode.com/todos/1', (res) => {
  let data = '';

// Recebe os dados em pedaços (chunks)
  res.on('data', (chunk) => {
    data += chunk;
  });

// Quando todos os dados forem recebidos, exibe o resultado
  res.on('end', () => {
    console.log(JSON.parse(data));
  });

// Trata erros de requisição HTTP
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});