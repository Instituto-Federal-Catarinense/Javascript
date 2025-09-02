// Importa o módulo 'fs' para manipulação de arquivos
const fs = require('fs');

// Lê o arquivo 'file.txt' de forma assíncrona
fs.readFile('file.txt','utf8', (err, data) => {
  // Se ocorrer um erro na leitura
  if (err) {
  // Exibe o erro no console
  console.error(err);
  return;
  }
  // Exibe o conteúdo do arquivo no console
  console.log("Conteúdo do arquivo:", data);
});
// Esta mensagem aparece antes da leitura do arquivo devido à natureza assíncrona
console.log("esta mensagem aparece primeiro")

