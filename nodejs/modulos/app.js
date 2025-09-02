// Importa o módulo personalizado chamado 'meuModulo'.
// Esse módulo deve conter uma função para gerar uma saudação.
const saudacao = require('./meuModulo'); // Importando o módulo

// Chama a função do módulo, passando o nome 'Filipe' como argumento.
const mensagem = saudacao('Filipe'); // Executando a função

// Exibe a mensagem gerada pela função no console.
console.log(mensagem);