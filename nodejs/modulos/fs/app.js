const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Conteúdo do arquivo:", data);
});
console.log("esta mensagem aparece primeiro")

