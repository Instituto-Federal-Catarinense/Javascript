const express = require('express'); const jwt = require('jsonwebtoken'); const bcrypt = require('bcryptjs'); const autenticar = require('./middleware/auth');
const app = express(); app.use(express.json());
const usuarios = [{ id: 1, email: 'aluno@exemplo.com', senha: bcrypt.hashSync('123456', 10) }];
app.post('/login', async (req, res) => { const usuario = usuarios.find((item) => item.email === req.body.email); if (!usuario || !(await bcrypt.compare(req.body.senha, usuario.senha))) return res.status(401).json({ erro: 'Credenciais inválidas' }); const token = jwt.sign({ id: usuario.id }, process.env.JWT_SEGREDO || 'desenvolvimento'); return res.json({ token }); });
app.get('/perfil', autenticar, (req, res) => res.json({ usuarioId: req.usuario.id }));
if (require.main === module) app.listen(3004, () => console.log('Autenticação em 3004')); module.exports = app;