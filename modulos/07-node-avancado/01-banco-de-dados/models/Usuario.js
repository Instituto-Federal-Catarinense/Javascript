const mongoose = require('mongoose');
const esquemaUsuario = new mongoose.Schema({ nome: { type: String, required: true, trim: true }, email: { type: String, required: true, unique: true } }, { timestamps: true });
module.exports = mongoose.model('Usuario', esquemaUsuario);