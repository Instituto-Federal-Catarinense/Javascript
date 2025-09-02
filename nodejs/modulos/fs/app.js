const fs = require('fs')

fs.readFile('example.txt', 'utf8', (erro, conteudo_do_arquivo) => {
    if (erro) {
        console.error('Error reading file:', erro)
        return
    }
    console.log('File contents:', conteudo_do_arquivo)
})

console.log('This is a simple Node.js application.')