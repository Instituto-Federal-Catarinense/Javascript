/** SOLUÇÃO-MODELO — 04-rest-api (Router de usuários) | Enunciado: exercícios 1 e 2 de ../../04-rest-api/exercicios.md | Uso: montado por app.js em /usuarios */
const express = require('express');

const roteador = express.Router();

// "Banco" em memória, igual ao exemplo da aula.
let usuarios = [
  { id: 1, nome: 'Ana', email: 'ana@loja.com' },
];

// Listagem simples (a paginação do exercício 3 entraria aqui via query string).
roteador.get('/', (req, res) => res.json(usuarios));

// Exercício 1 — busca por id com 404 dedicado.
roteador.get('/:id', (req, res) => {
  const id = Number(req.params.id); // req.params.id é string!
  const usuario = usuarios.find((item) => item.id === id);
  if (!usuario) {
    return res.status(404).json({ erro: 'Usuário não encontrado' });
  }
  return res.json(usuario);
});

// Exercício 2 — POST com validação acumulada em array.
roteador.post('/', (req, res) => {
  const { nome, email } = req.body;
  const erros = [];

  if (typeof nome !== 'string' || nome.trim() === '') {
    erros.push('Nome obrigatório');
  }
  if (typeof email !== 'string' || !email.includes('@')) {
    erros.push('E-mail deve conter @');
  }

  if (erros.length > 0) {
    return res.status(400).json({ erros });
  }

  const usuario = { id: Date.now(), nome: nome.trim(), email };
  usuarios.push(usuario);
  return res.status(201).json(usuario);
});

// Atualização parcial — mesmo contrato do exemplo da aula.
roteador.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  const usuario = usuarios.find((item) => item.id === id);
  if (!usuario) {
    return res.status(404).json({ erro: 'Usuário não encontrado' });
  }
  usuario.nome = req.body.nome || usuario.nome;
  usuario.email = req.body.email || usuario.email;
  return res.json(usuario);
});

// Remoção — compara o tamanho antes/depois para distinguir 204 de 404.
roteador.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  const tamanhoAntes = usuarios.length;
  usuarios = usuarios.filter((item) => item.id !== id);
  return res.sendStatus(usuarios.length < tamanhoAntes ? 204 : 404);
});

module.exports = roteador;

// DISCUSSÃO:
// - O filtro do DELETE devolve outro array: comparar comprimentos é a forma
//   simples de saber se alguém foi removido de fato.
// - Refatorações naturais da lista: extrair um services/usuarioService.js com
//   listar/buscarPorId/criar/atualizar/remover (exercício 4) e paginar a
//   listagem com slice((pagina - 1) * limite, pagina * limite) (exercício 3).
