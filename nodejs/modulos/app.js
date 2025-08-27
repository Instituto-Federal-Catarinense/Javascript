const modulo = require('./meuModulo'); // Importando o módulo
const calculadora_idade = require('./calculadora_idade');


const mensagem = modulo.saudacao('Joédio'); // Executando a função
const idadeEm2025 = calculadora_idade.idade ('JoédioPr', 1990);

console.log(mensagem);
console.log (idadeEm2025);