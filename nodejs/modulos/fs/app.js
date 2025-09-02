// Cria uma constante "fs" que impota o módulo nativo "fs" do Node.js
const fs = require('fs');

// Lê o conteúdo do arquivo "example.txt" de forma assíncrona
fs.readFile('example.txt', 'utf8', (err, data) => {
    // Se err existir, mostra o erro
    // Se não, mostra o conteúdo do arquivo
    

    //Caso dê um erro na leitura do arquivo exibe o erro no console
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }
    console.log('Conteúdo do arquivo:', data);
});

// Esta mensagem é exibida antes da leitura do arquivo, demonstrando a natureza assíncrona do Node.js
console.log('Esta mensagem aparece primeiro.');