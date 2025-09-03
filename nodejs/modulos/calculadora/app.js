// Importando a função do arquivo onde ela está definida (por exemplo, idade.js)
const { idade } = require('./idade');

// Exemplo de uso da função
const nome = 'João';
const anoNascimento = 1990;

const mensagem = idade(nome, anoNascimento);

// Exibindo a mensagem no console
console.log(mensagem);
