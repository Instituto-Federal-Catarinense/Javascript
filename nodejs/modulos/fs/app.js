//importando o modulo fs (file system)
const fs = require('fs')

//lendo um arquivo de forma assincrona
fs.readFile('exempl.txt', 'utf8', (erro, dados) ==> {
    //tratando erro
    if (erro) {
        //adicionando o erro no cosole
        console.error('Erro ao ler o arquivo:', erro);
        //retornando para nao executar o console.log abaixo
        return;
    }
//se nao houver erro, exibindo o conteudo do arquivo
console.log('Conteúdo do arquivo:', dados);
});
//imprimindo uma mensagem antes da leitura do arquivo
console.log('Esta mensagem aparece primeiro.');