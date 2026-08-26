'use strict';

// ==========================================================================
// tarefas.router.js — rotas do recurso "tarefas"
// --------------------------------------------------------------------------
// Estado atual: TODAS as rotas respondem 501 (Not Implemented).
// A equipe implementa uma issue de cada vez, sempre por branch + PR.
//
// Contrato da API (ver README):
//   GET    /tarefas      -> 200 (lista) | paginação na issue 11
//   POST   /tarefas      -> 201 (criada) | 400 se titulo inválido
//   GET    /tarefas/:id  -> 200 | 404 se não existir
//   PUT    /tarefas/:id  -> 200 | 400 inválido | 404 inexistente
//   DELETE /tarefas/:id  -> 204 sem corpo | 404 inexistente
// ==========================================================================

const express = require('express');

const router = express.Router();

// "Banco de dados" em memória: morre quando o processo reinicia.
// A issue 13 substituirá isto por persistência em db.json (fs/promises).
const tarefas = [];
let proximoId = 1;

// Utilitário simples para achar tarefa pelo id da URL.
// req.params.id é SEMPRE string; converter antes de comparar.
function buscarPorId(id) {
  return tarefas.find((t) => t.id === Number(id));
}

// ---------------------------------------------------------------------------
// GET /tarefas — listar todas
// ---------------------------------------------------------------------------
router.get('/', (req, res) => {
  // TODO(issue-1): responder res.status(200).json(tarefas);
  // TODO(issue-11): ler req.query.pagina e req.query.limite e devolver
  //   { dados, total, pagina, limite, totalPaginas }.
  // TODO(issue-12): combinar com filtro req.query.busca no titulo.
  return res.status(501).json({ mensagem: 'TODO: implementar' });
});

// ---------------------------------------------------------------------------
// POST /tarefas — criar nova tarefa
// ---------------------------------------------------------------------------
router.post('/', (req, res) => {
  // TODO(issue-2): validar req.body.titulo (string, trim não vazio),
  //   montar { id: proximoId++, titulo, concluida: false },
  //   adicionar no array e responder res.status(201).json(tarefaCriada).
  //   Status esperado: 201 Created (nunca 200!).
  // TODO(issue-3): corpo ausente/titulo vazio -> res.status(400).json(...)
  // TODO(issue-9): mover a validação para o middleware validarTarefa.
  return res.status(501).json({ mensagem: 'TODO: implementar' });
});

// ---------------------------------------------------------------------------
// GET /tarefas/:id — buscar uma tarefa
// ---------------------------------------------------------------------------
router.get('/:id', (req, res) => {
  // TODO(issue-4): usar buscarPorId(req.params.id);
  //   encontrou -> res.status(200).json(tarefa);
  //   não achou -> res.status(404).json({ mensagem: 'Tarefa nao encontrada' }).
  return res.status(501).json({ mensagem: 'TODO: implementar' });
});

// ---------------------------------------------------------------------------
// PUT /tarefas/:id — atualizar titulo e/ou concluida
// ---------------------------------------------------------------------------
router.put('/:id', (req, res) => {
  // TODO(issue-5): localizar a tarefa;
  //   não existe -> 404; campos invalidos -> 400;
  //   existindo, copiar apenas titulo/concluida presentes em req.body
  //   (nunca permitir trocar o id!) e responder res.status(200).json(tarefa).
  return res.status(501).json({ mensagem: 'TODO: implementar' });
});

// ---------------------------------------------------------------------------
// DELETE /tarefas/:id — remover tarefa
// ---------------------------------------------------------------------------
router.delete('/:id', (req, res) => {
  // TODO(issue-6): localizar e remover do array (splice/filter);
  //   sucesso -> res.status(204).send() (204 NUNCA tem corpo!);
  //   não existe -> res.status(404).json({ mensagem: '...' }).
  return res.status(501).json({ mensagem: 'TODO: implementar' });
});

module.exports = router;
