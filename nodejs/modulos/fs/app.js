//Importa o módulo 'fs' (file system), que permite trabalhar com arquivos no Node.js
const fs = require('fs');

// Lê o conteúdo do arquivo 'exemplo.txt' com codificação 'utf8'
fs.readFile('exemplo.txt', 'utf8', (err, data) => {
  //Se ocorrer um erro ao tentar ler o arquivo, ele entra aqui
  if (err) {
    //adicionando o erro no console
    console.error('erro ao ler o arquivo',err);
    //encerra a função
    return;
  }
  //se não houve erro, mostra o conteúdo do arquivo no console
  console.log('conteúdo do arquivo:', data);
});
//Esta mensagem aparece antes da leitura do arquivo terminar, por causa do comportamento assíncrono do Node.js
console.log('Essa mensagem aparece primeiro.');