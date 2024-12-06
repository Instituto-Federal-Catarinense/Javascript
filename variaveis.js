var sobrenome = "Roxo";
console.log(sobrenome);

console.log("---- var ----");
if (true) {
    console.log("Acessivel dentro do bloco: " + sobrenome);
    var exemploVar = "Visível fora do bloco!";
}
console.log(exemploVar); // Funciona, mas pode causar problemas.

console.log("---- let ----");
let datanascimento = "04/04/2008";
if (true) {
    console.log(datanascimento); // funciona aqui.
    let exemploLet = "Visivel apenas dentro do bloco";
    console.log(exemploLet); // Funciona aqui.
}
console.log("---- let ----");
if (true) {
    let exemploLet = "Visível apenas dentro do bloco!";
    console.log(exemploLet); // Funciona aqui.
}
//console.log(exemploLet); // Erro: exemploLet não está definido.

console.log("Acessivel globalmente: " + datanascimento)
console.log("---- const ----");
const PI = 3.14; // Valor que não muda
console.log(PI); // 3.14
// PI = 3.15; // Erro: Não é permitido alterar uma const

function escopoLocal() {
    let local = "Escopo de função";
    console.log(local);
}
escopoLocal();
// console.log(local); // Erro: 'local' é inacessível fora da função

// Usando const
const nome = "Alan";
console.log(nome); // Output: Alan
// nome = "João"; // Isso causaria um erro porque 'const' não permite reatribuição

// Usando let
let idade = 25;
console.log(idade); // Output: 25
idade = 26; // Reatribuição é permitida com 'let'
console.log(idade); // Output: 26

// Usando var
var cidade = "Sombrio";
console.log(cidade); // Output: Sombrio
cidade = "Florianópolis"; // Reatribuição é permitida com 'var'
console.log(cidade); // Output: Florianópolis