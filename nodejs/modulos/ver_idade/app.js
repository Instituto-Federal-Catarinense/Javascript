const { calcularIdade } = require('./funcoes_matematicas');

// Exemplo de uso da função calcularIdade
const anoNascimento = 2000;
const idade = calcularIdade(anoNascimento);
console.log(`Quem nasceu em ${anoNascimento} tem ${idade} anos em ${new Date().getFullYear()}.`);
