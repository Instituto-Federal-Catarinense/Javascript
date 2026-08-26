/** SOLUÇÃO-MODELO — 02-autenticacao (middleware/auth.js) | Enunciado: exercício 4 de ../02-autenticacao/exercicios.md | Uso: aplicado às rotas protegidas em app.js */
const jwt = require('jsonwebtoken');

module.exports = function autenticar(req, res, next) {
  const cabecalho = req.headers.authorization || '';
  // optional chain equivalente: startsWith já é seguro sobre string vazia.
  if (!cabecalho.startsWith('Bearer ')) {
    return res.status(401).json({ erro: 'Token ausente ou malformado' });
  }

  const token = cabecalho.slice(7);
  try {
    req.usuario = jwt.verify(token, process.env.JWT_SEGREDO);
    return next();
  } catch (erro) {
    // Mensagens distintas ajudam quem integra: expirou x inválido.
    const motivo = erro.name === 'TokenExpiredError' ? 'Token expirado' : 'Token inválido';
    return res.status(401).json({ erro: motivo });
  }
};
