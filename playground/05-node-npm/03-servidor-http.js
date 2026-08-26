/**
 * ============================================================
 * PLAYGROUND — Servidor HTTP nativo com rotas
 * ------------------------------------------------------------
 * Módulo: 05 — Node e npm   |   Aula: modulos/05-node-npm/03-servidor-http-roteamento/
 * Execute: node playground/05-node-npm/03-servidor-http.js
 * Código comentado para estudar, alterar e QUEBRAR à vontade.
 *
 * COMO RODAR E TESTAR:
 *   1. No terminal: node playground/05-node-npm/03-servidor-http.js
 *   2. Abra no navegador: http://localhost:3000  (e /sobre)
 *   3. Ou use curl em outro terminal:
 *        curl http://localhost:3000/sobre
 *        curl http://localhost:3000/api/hora
 *        curl -i http://localhost:3000/rota-que-nao-existe
 *   4. Encerre o servidor com Ctrl+C.
 *
 * Observação de projeto: o server.listen fica atrás do teste
 * `require.main === module`, então este arquivo pode ser importado
 * (require) por outros módulos SEM abrir porta nem travar nada.
 * ============================================================
 */

const http = require('http'); // módulo nativo: servidor HTTP sem dependências

const PORTA = 3000;

// ===== 1. CRIANDO O SERVIDOR =====
// createServer recebe um HANDLER (função) chamado a cada requisição.
// Ele recebe dois objetos:
//   req -> requisição do cliente (método, url, headers...)
//   res -> nossa resposta (status, headers, corpo...)

const servidor = http.createServer((req, res) => {
  // Normalizamos a URL para rotear com facilidade:
  const rota = req.url;
  const metodo = req.method;

  console.log(`${metodo} ${rota}`); // log simples no terminal do servidor

  // ===== 2. ROTEAMENTO MANUAL: if por caminho =====

  if (metodo === 'GET' && rota === '/') {
    // Texto puro na home. Primeiro definimos o cabeçalho da resposta...
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    // ...depois o corpo, encerrando a resposta:
    res.end('Bem-vindo ao playground HTTP! Tente /sobre ou /api/hora');
    return; // importante: não continuar testando outras rotas
  }

  if (metodo === 'GET' && rota === '/sobre') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    // Podemos devolver HTML completo como texto:
    res.end('<h1>Sobre</h1><p>Servidor didatico feito com o modulo http do Node.</p>');
    return;
  }

  if (metodo === 'GET' && rota === '/api/hora') {
    // APIs costumam responder JSON. Montamos o objeto e serializamos:
    const dados = {
      horaLocal: new Date().toLocaleTimeString('pt-BR'),
      isoUtc: new Date().toISOString(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(dados, null, 2));
    return;
  }

  // ===== 3. 404: tudo que não casou com as rotas acima =====
  res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({ erro: 'Rota nao encontrada', rotaSolicitada: rota }));
});

// ===== 4. LIGANDO O SERVIDOR COM SEGURANÇA =====
// `require.main === module` é true APENAS quando este arquivo foi
// executado diretamente (node arquivo.js). Se ele for importado por
// outro script, o listen NÃO roda — evitando bloquear testes automáticos.

if (require.main === module) {
  servidor.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
    console.log('Pressione Ctrl+C para encerrar.');
  });
}

// ===== 5. BÔNUS: exportando para reuso =====
// Assim, um arquivo de testes poderia fazer:
//   const { servidor } = require('./03-servidor-http.js');
// e inspecioná-lo sem subir uma porta real.
module.exports = { servidor };

// ===== EXPERIMENTE =====
// 1. Adicione uma rota GET /api/usuarios devolvendo um array JSON fixo.
// 2. Bloqueie metodos POST respondendo 405 (Method Not Allowed).
// 3. Use req.headers['user-agent'] para exibir o navegador do visitante em /sobre.
