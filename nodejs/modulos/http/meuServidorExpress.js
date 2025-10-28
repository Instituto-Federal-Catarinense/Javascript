// arquivo: server.mjs (ou server.js com "type": "module" no package.json)
import express from 'express';

const app = express();
const port = 3000;

// rota principal
app.get('/', (req, res) => {
  res.send('Bem-vindo à rota principal!');
});

// rota de usuários
app.get('/usuarios', (req, res) => {
  res.send('Lista de usuários');
});

// rota com parâmetro
app.get('/usuarios/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Usuário com ID ${id}`);
});

// rota POST
app.post('/usuarios', (req, res) => {
  res.send('Novo usuário criado!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
