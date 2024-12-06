var nome = "william";
console.log(nome);


console.log("---- var ----");
if (true) {
    console.log("ACessivel dentro do bloco: " + nome);
    var exemploVar = "Visível fora do bloco!";
}
console.log(exemploVar); // Funciona, mas pode causar problemas.

console.log("---- let ----");
let sobrenome = "floripo";
if (true) {
    console.log(sobrenome);
    let exemploLet = "Visível apenas dentro do bloco!";
    console.log(exemploLet); // Funciona aqui.
}
console.log("Acessivel globalmente: " + sobrenome)

console.log("Tentando acessar exemploLet fora do bloco:");
try {
    console.log(exemploLet); // Erro: exemploLet não está definido
} catch (error) {
    console.log(error.message); // Exibe o erro de forma controlada
}

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
