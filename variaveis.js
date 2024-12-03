console.log("---- var ----");
if (true) {
    var exemploVar = "Visível fora do bloco!";
}
console.log(exemploVar); // Funciona, mas pode causar problemas.

console.log("---- let ----");
if (true) {
    let exemploLet = "Visível apenas dentro do bloco!";
    console.log(exemploLet); // Funciona aqui.
}
// console.log(exemploLet); // Erro: exemploLet não está definido.

console.log("---- const ----");
const PI = 3.14; // Valor que não muda
console.log(PI); // 3.14
// PI = 3.15; // Erro: Não é permitido alterar uma const

console.log("---- var2 ----");
if (true) {
    var exemploVar2 = "Var2 fora do bloco!";
}

console.log("---- let2 ----");
if (true) {
    let exemploLet2 = "Let2 visível apenas dentro do bloco!";
}

function escopoLocal() {
    let local = "Escopo de função";
    console.log(local);
}

console.log("---- const2 ----");
const dois = 2; // Valor que não muda
console.log(dois); // 2

console.log(exemploVar2); // Funciona, mas pode causar problemas.
console.log(exemploLet2); // Funciona aqui.
dois = 2;

escopoLocal();
// console.log(local); // Erro: 'local' é inacessível fora da função
