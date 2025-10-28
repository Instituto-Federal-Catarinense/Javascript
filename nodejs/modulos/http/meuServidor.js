import http from 'http';

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Remove barra final, exceto para a raiz
  let url = req.url.replace(/\/$/, '') || '/';

  // Ignora favicon
  if (url === '/favicon.ico') {
    res.writeHead(204);
    res.end();
    return;
  }


  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Rota principal');
  } else if (req.url === '/sobre') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Rota Sobre');
  } else if (req.url === '/contato') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Rota Contato');
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Rota não encontrada');
  }
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/`);
});