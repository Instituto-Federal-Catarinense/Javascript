/** SOLUÇÃO-MODELO — 01-banco-de-dados (Model Usuario) | Enunciado: exercícios 1 e 2 de ../../01-banco-de-dados/exercicios.md | Uso: importado por app.js */
const mongoose = require('mongoose');

// Exercício 1 — schema rigoroso:
//   nome  -> obrigatório, mínimo 3 caracteres;
//   email -> único, obrigatório, validado por regex;
//   idade -> mínima 0.
// Cada regra leva mensagem própria: é ela que vira resposta legível no 400.
const esquemaUsuario = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: [true, 'Nome é obrigatório'],
      minlength: [3, 'Nome deve ter no mínimo 3 caracteres'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'E-mail é obrigatório'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'E-mail inválido'],
    },
    idade: {
      type: Number,
      min: [0, 'Idade não pode ser negativa'],
    },
  },
  // Exercício 2 — timestamps: o Mongoose passa a manter createdAt e updatedAt
  // automaticamente em toda gravação/atualização.
  { timestamps: true },
);

module.exports = mongoose.model('Usuario', esquemaUsuario);

/*
 * DISCUSSÃO (exercício 2):
 * - `_id`: ObjectId de 12 bytes gerado PELO DRIVER/MongoDB na criação do
 *   documento (não é auto-incremento como no SQL).
 * - `createdAt`: gravado uma única vez no primeiro save/create.
 * - `updatedAt`: recarimbado a cada atualização — após um PUT ele muda,
 *   `createdAt` permanece.
 * - `unique` NÃO é validator comum: cria um ÍNDICE único; duplicata chega
 *   como erro de código 11000 (tratável separadamente do ValidationError).
 */
