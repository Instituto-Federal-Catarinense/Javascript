const fs = require('fs');

fs.readFile('exemplo.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('erro ao ler o arquivo',err);
    return;
  }
  console.log('conteúdo do arquivo:', data);
});

console.log('Operação de leitura de arquivo iniciada.');