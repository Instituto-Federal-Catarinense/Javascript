//importa
const fs = require('fs')

//le o arquivo
fs.readFile('exempl.txt', 'utf8', (erro, dados) => {
    //se tiver erro
    if (erro) {
        //mostra o erro
        console.error('Erro ao ler o arquivo', erro)
        //retorna para não mostrar o console de baixo
        return
    }
    //leitura
    console.log('Conteúdo do arquivo: ', dados)
})

//mensagem antes de ler o arquivo
console.log('Esta mensagem aparece')