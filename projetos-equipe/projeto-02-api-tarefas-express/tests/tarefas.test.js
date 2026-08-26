'use strict';

// ==========================================================================
// tarefas.test.js — testes de integração da API
// --------------------------------------------------------------------------
// O supertest faz requisições HTTP reais contra o app exportado em app.js,
// sem precisar subir servidor nem escolher porta. Cada it.todo abaixo é um
// teste a ser implementado pela issue 7 (um por endpoint do contrato).
//
// Padrão sugerido de cada teste:
//   const resposta = await request(app).get('/tarefas');
//   expect(resposta.status).toBe(200);
// ==========================================================================

const request = require('supertest');

const app = require('../src/app');

describe('API de tarefas', () => {
  // Dica: como os dados ficam em memória dentro do router, limpe o estado
  // entre testes quando os testes começarem a criar dados (beforeEach).

  it.todo('GET /tarefas deve retornar 200 e um array JSON de tarefas');

  it.todo('POST /tarefas deve criar uma tarefa e retornar 201 com id e concluida false');

  it.todo('GET /tarefas/:id deve retornar 200 para id existente e 404 para id inexistente');

  it.todo('PUT /tarefas/:id deve atualizar a tarefa e retornar 200, e 400 para titulo invalido');

  it.todo('DELETE /tarefas/:id deve retornar 204 sem corpo e depois 404 ao buscar a tarefa removida');
});
