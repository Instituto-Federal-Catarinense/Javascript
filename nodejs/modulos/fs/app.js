//importando o mudlo fs (fyle system)
const fs = require('fs');

//lendo um arquivo de forma assincrona
fs.readFile('exemplo.txt','utf8', (erro, dados) => {
    //tratando erro
    if (erro) {
        //adicionando o erro ao console
        console.error('Erro ao ler o arquivo', erro)
        //retornando para nao executar o console.log abaixo
        return;
    };
    //se nuo ouver erro, exibindo o conteudo do arquivo
    console.log('Conteúdo do arquivo: ', dados)
});
//imprimindo uma mensagem antes da leitura do arquivo
console.log('Esta mensagem aparece primeiro.')