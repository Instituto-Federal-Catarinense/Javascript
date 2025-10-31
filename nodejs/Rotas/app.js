import http from 'http';

const PORT = 3000;

const server = http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;

    response.setHeader('Content-Type', 'text/html charset=utf-8');

    if (url === '/') {
        response.statuscode = 200;
        response.end('<h1>Pagina inicial</h1>');

    } else if (url === '/sobre' && method === 'GET') {
        response.statuscode = 200;
        response.end('<h1>sobre nos</h1><p>Esta é uma aplicaçao de exmplo com node.js puro</p>');

    } else if (url === '/contato') {
        response.statuscode = 200;
        response.end('<h1>contato</h1><p>Entre em contato conosco</p>');
    }
    else {
        response.statuscode = 404;
        response.end('<h1>Pagina nao encontrada</h1>');
    }
});

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});