// importando o módulo fs (file system)
//const fs = require('fs');

import fs from 'fs';

// lendo um arquivo de forma assíncrona
fs.readFile('example.txt', 'utf8', (err, data) => { // callback
    // tratando erros
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }
    // exibindo o conteúdo do arquivo no console
    console.log('Conteúdo do arquivo:', data);
}); 

// mensagem que será exibida antes da leitura do arquivo
console.log('Esta mensagem aparece primeiro.');