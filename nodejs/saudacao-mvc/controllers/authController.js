const path = require('path');

module.exports = {
  showLogin: (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'login.html'));
  },

  login: (req, res) => {
    const { username, password } = req.body || {};
    // Validação simples de exemplo — substitua por lógica real
    if (username === 'admin' && password === 'admin') {
      // sucesso: redireciona para o índice ou outra página
      return res.redirect('/');
    }
    // falha: volta ao login com mensagem
    res.status(401).send(`
      <h1>Login falhou</h1>
      <p>Usuário ou senha inválidos.</p>
      <p><a href="/login">Tentar novamente</a></p>
    `);
  }
};
