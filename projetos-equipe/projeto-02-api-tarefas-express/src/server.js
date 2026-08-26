'use strict';

// ==========================================================================
// server.js — ponto de entrada da aplicação
// --------------------------------------------------------------------------
// Só existe para escutar a porta. Toda a configuração fica no app.js,
// permitindo que os testes usem o app sem abrir porta alguma.
// ==========================================================================

const app = require('./app');

// Em produção a porta vem de variável de ambiente; localmente usamos 3000.
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  // Log simples para confirmar que o servidor subiu corretamente.
  // (Este é o único console.log aceito no projeto pelo DoD.)
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
