//importando o modulo fs (file style)
const fs = require('fs');

//lendo um arquivo de forma assincronada
fs.readFile('exempl.txt', 'utf8', (erro, dados) => {
    //tratando erro
  if (erro) {
    //adicionando erro
    console.error('Erro ao ler o arquivo:', erro);
    //retornando erro
    return;
  }
  // se nao houver  erro, exibimos o conteudo do arquivo
  console.log('Conteúdo do arquivo:', dados);
});

//imprimindo uma mensagem antes da leitura do arquivo
console.log('esta mensagem aparece primeiro.');