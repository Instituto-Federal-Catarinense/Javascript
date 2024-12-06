var nome = "maria";
console.log (nome);
console.log("---- var ----");
if (true) {
    console.log ("Acessível dentro do bloco:"+nome);
    var exemploVar = "Visível fora do bloco!";
}
console.log(exemploVar); // Funciona, mas pode causar problemas.

console.log("---- let ----");
let sobrenome = "amaral"
if (true) {
     console.log(sobrenome); // Funciona aqui.
    let exemploLet = "Visivel apenas dentro do bloco";

console.log(exemploLet); }// Erro: exemploLet não está definido.
console.log("acessivel globalmente: " + sobrenome);
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
