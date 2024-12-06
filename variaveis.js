var nome = ("Felipe");
    console.log(nome);

console.log("---- var ----");
if (true) {
        console.log("Acessivel dentro do bloco" + nome);
    var exemploVar = "Visível fora do bloco!";
}
console.log(exemploVar); // Funciona, mas pode causar problemas.

console.log("---- let ----");
if (true) {
    let exemploLet = "Visível apenas dentro do bloco!";
    console.log(exemploLet); // Funciona aqui.
}
//console.log(exemploLet); // Erro: exemploLet não está definido.

console.log("Número de PI: ");
const PI = 3.14; // Valor que não muda
console.log(PI); // 3.14
//PI = 3.15; // Erro: Não é permitido alterar uma const

function escopoLocal() {
    let local = "Aleatorices: ";var nome = ("Felipe");
    console.log(nome);

    console.log(local);var nome = ("Felipe");
    console.log(nome);

}
escopoLocal();
//console.log(local); // Erro: 'local' é inacessível fora da função
console.log("Enfim: ");
if (true) {
    let amemLet = "Amém Jesus!";
    console.log(amemLet);
}

console.log("Número da sorte: ");
const fe = 777;
    console.log(fe);
    

