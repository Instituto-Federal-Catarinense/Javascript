const fs = require('fs');
fs.readFile('exemplo.txt', 'utf8', (erro, conteudo_do_arquivo) => {
    if (erro) {
        console.error('Erro ao ler o arquivo:', erro);
        return;
    }
    console.log('Conteúdo do arquivo:', conteudo_do_arquivo);
});
console.log("Essa mensagem aparece primeiro.");
