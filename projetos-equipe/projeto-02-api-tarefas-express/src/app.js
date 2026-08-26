'use strict';

// ==========================================================================
// app.js — criação do aplicativo Express
// --------------------------------------------------------------------------
// O app é separado do server de propósito: assim os testes podem importar
// o app com require('./src/app') sem precisar abrir uma porta de rede.
// Fluxo: app.js (define rotas) -> server.js (escuta a porta).
// ==========================================================================

const express = require('express');

const tarefasRouter = require('./routes/tarefas.router');

const app = express();

// Middleware embutido: converte o corpo JSON da requisição em req.body.
// Sem esta linha, req.body seria undefined nos POST e PUT.
app.use(express.json());

// Monta todas as rotas do router sob o prefixo /tarefas.
// Ex.: GET /tarefas, POST /tarefas, PUT /tarefas/1 ...
app.use('/tarefas', tarefasRouter);

// TODO(issue-10): adicionar aqui um middleware global de erros
// (4 argumentos: err, req, res, next) e um handler para rotas
// inexistentes, sempre respondendo JSON padronizado.

module.exports = app;
