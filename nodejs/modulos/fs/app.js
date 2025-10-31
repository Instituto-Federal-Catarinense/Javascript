// Importa o módulo 'fs' (file system) para manipulação de arquivos
//const fs = require('fs');


import fs from 'fs';
// Lê o arquivo 'exemplo.txt' de forma assíncrona
fs.readFile('exemplo.txt', 'utf8', (err, data) => {
  // Se ocorrer um erro na leitura, exibe a mensagem de erro
  if (err) {
    console.error('erro ao ler o arquivo', err);
    return; // Encerra a função caso haja erro
  }
  // Se não houver erro, exibe o conteúdo do arquivo
  console.log('conteúdo do arquivo:', data);
});

// Mensagem exibida antes da leitura do arquivo ser concluída
console.log('Operação de leitura de arquivo iniciada.');