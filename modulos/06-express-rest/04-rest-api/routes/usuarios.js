const express = require('express');
const router = express.Router();
let usuarios = [{ id: 1, nome: 'Ana' }];
router.get('/', (req, res) => res.json(usuarios));
router.post('/', (req, res) => { const usuario = { id: Date.now(), nome: req.body.nome }; if (!usuario.nome) return res.status(400).json({ erro: 'Nome obrigatório' }); usuarios.push(usuario); return res.status(201).json(usuario); });
router.put('/:id', (req, res) => { const usuario = usuarios.find((item) => item.id === Number(req.params.id)); if (!usuario) return res.sendStatus(404); usuario.nome = req.body.nome || usuario.nome; return res.json(usuario); });
router.delete('/:id', (req, res) => { const tamanho = usuarios.length; usuarios = usuarios.filter((item) => item.id !== Number(req.params.id)); return res.sendStatus(usuarios.length < tamanho ? 204 : 404); });
module.exports = router;