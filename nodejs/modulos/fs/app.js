const fs = require ('fs')

fs.readFile('example.txt', 'utf8', (conteudo_do_arquivo, erro) => {
  if (erro) {
    console.error('Erro ao ler o arquivo:', erro)
    return
  }
  console.log('Conteúdo do arquivo:', conteudo_do_arquivo)
});

console.log('Esta mensagem aparece primeiro');