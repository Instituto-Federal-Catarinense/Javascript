//importando o modulo fs (file system)
//const fs = require ('fs');
import fs from 'fs';

//lendo um arquivo de forma assincrona
fs.readFile ('exempl.txt' , 'utf8' , (erro, dados) => {
    //tratando erro
    if (erro) {
        //adicionando o erro no console
        console.error('Erro ao ler o arquivo:' , erro);
        //Retornando para não executar o console.log abaixo
        return;
    }
    //se não houver erro, exibindo o conteudo do arquivo
    console.log ('Conteudo do arquivo' , dados);
});
//imprimindo uma mensagem antes da leitutra do arquivo
console.log ('Esta mensagem aparece primeiro.');