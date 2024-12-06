let nome = "Biny";
console.log(nome);

console.log("---- var ----");
if (true) {
    let nome = " Binyamin";
    console.log("Acessível dentro do bloco: " + nome);
}
console.log(nome); 

console.log("---- let ----");
let sobrenome = "Borges";
if (true) {
    console.log(sobrenome); //  funciona aqui.
    let exemploLet = "Visível apenas dentro do bloco!";
    console.log(exemploLet); // Funciona aqui.
}
//console.log(exemploLet); // Erro: exemploLet não está definido.
console.log("Acessível globalmente: " + sobrenome);

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
