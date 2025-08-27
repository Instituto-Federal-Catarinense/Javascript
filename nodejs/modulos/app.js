const modulo = require('./meuModulo'); // Importando o módulo
const calculadora_idade = require('./calculadora_idade');

const mensagem = modulo.saudacao('Évelyn'); // Executando a função
const idadeEm2025 = calculadora_idade.idade('Évelyn', 2008); // Executando a função idade do módulo calculadoraidade

console.log(mensagem);
console.log(idadeEm2025);