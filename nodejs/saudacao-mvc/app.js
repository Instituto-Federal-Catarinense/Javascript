const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para ler dados de formulários
app.use(express.urlencoded({ extended: true }));

// Rotas
let indexRoutes;
try {
	indexRoutes = require('./routes/index');
} catch (err) {
	console.error('Falha ao carregar ./routes/index:', err.message);
	const r = require('express').Router();
	r.get('/', (req, res) => res.send('<h1>Página Inicial (rota temporária)</h1>'));
	indexRoutes = r;
}
app.use('/', indexRoutes);

// users (com fallback se não existir)
try {
	const usersRoutes = require('./routes/users');
	app.use('/users', usersRoutes);
} catch (err) {
	console.warn('Rotas /users não encontradas — usando fallback.');
	const r = require('express').Router();
	r.get('/', (req, res) => res.send('<h1>Lista de usuários (fallback)</h1>'));
	r.get('/:id', (req, res) => res.send(`<h1>Perfil do usuário: ${req.params.id}</h1>`));
	app.use('/users', r);
}

// produtos (com fallback se não existir)
try {
	const produtosRoutes = require('./routes/produtos');
	app.use('/produtos', produtosRoutes);
} catch (err) {
	console.warn('Rotas /produtos não encontradas — usando fallback.');
	const r = require('express').Router();
	r.get('/', (req, res) => res.send('<h1>Lista de produtos (fallback)</h1>'));
	app.use('/produtos', r);
}

// clientes (com fallback se não existir)
try {
	const clientesRoutes = require('./routes/clientes');
	app.use('/clientes', clientesRoutes);
} catch (err) {
	console.warn('Rotas /clientes não encontradas — usando fallback.');
	const r = require('express').Router();
	r.get('/', (req, res) => res.send('<h1>Clientes (fallback)</h1>'));
	r.get('/:id', (req, res) => res.send(`<h1>Cliente ${req.params.id}</h1>`));
	app.use('/clientes', r);
}

// login (com fallback se não existir)
try {
	const loginRoutes = require('./routes/login');
	app.use('/login', loginRoutes);
} catch (err) {
	console.warn('Rotas /login não encontradas — usando fallback.');
	const r = require('express').Router();
	r.get('/', (req, res) => res.send('<h1>Login (fallback)</h1><p><a href="/">Voltar</a></p>'));
	r.post('/', (req, res) => res.send('<p>Processar login (fallback)</p>'));
	app.use('/login', r);
}

// Servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
