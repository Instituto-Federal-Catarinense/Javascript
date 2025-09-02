const fs = require('fs'); // cria uma conexão com o sistema de arquivos

// leitura de arquivo de forma assíncrona
fs.readFile('file.txt', 'utf8', (erro, data) => {  
  // callback que é executada quando a leitura termina
  if (erro) {
    // adiciona o erro no console 
    console.error('Erro ao ler o arquivo: ',erro); 
    // retornando para nao executar o código abaixo
    return;
  }
  // se não houve erro, imprime o conteúdo do arquivo
  console.log("Conteúdo do arquivo:", data);
});
// esta mensagem aparece primeiro porque a leitura do arquivo é assíncrona
console.log("esta mensagem aparece primeiro")

