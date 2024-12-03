// ---- var ----
console.log("---- var ----");
if (true) {
    var exemploVar = "Visível fora do bloco!";  // 'var' não tem escopo de bloco
}
console.log(exemploVar); // Funciona, mas pode causar problemas porque 'var' não respeita o escopo de bloco.

// ---- let ----
console.log("---- let ----");
if (true) {
    let exemploLet = "Visível apenas dentro do bloco!";  // 'let' tem escopo de bloco
    console.log(exemploLet); // Funciona aqui, pois está dentro do bloco
}
// console.log(exemploLet); // Erro: exemploLet não está definido fora do bloco

// ---- const ----
console.log("---- const ----");
const PI = 3.14; // Constantes não podem ser reatribuídas
console.log(PI); // 3.14
// PI = 3.15; // Erro: Não é permitido alterar uma constante

// Função com escopo local
function escopoLocal() {
    let local = "Escopo de função";  // 'local' tem escopo de função
    console.log(local); // Funciona dentro da função
}
escopoLocal(); // Chama a função
// console.log(local); // Erro: 'local' é inacessível fora da função
