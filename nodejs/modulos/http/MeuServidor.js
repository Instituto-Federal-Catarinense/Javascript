

import { createServer } from 'http';

const server = createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
   if (req.url === '/' && req.method === 'GET') {
    res.end('Página inicial');
  } else if (req.url === '/sobre' && req.method === 'GET') {
    res.end('Página sobre');
  } else {
    res.statusCode = 404;
    res.end('Rota não encontrada');
  }
 
});

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
