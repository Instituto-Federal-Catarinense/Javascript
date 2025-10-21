const path = require('path');

module.exports = {
  index: (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'clientes.html'));
  },
  detalhe: (req, res) => {
    const id = req.params.id;
    res.send(`
      <h1>Cliente ${id}</h1>
      <p>Detalhes do cliente ${id} (exemplo)</p>
      <p><a href="/clientes">Voltar para Clientes</a></p>
    `);
  }
};
