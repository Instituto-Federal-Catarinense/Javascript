console.log("---- var ----");
if (true) {
    var exemploVar = "Visível fora do bloco!";
    var exemploVar2 = "Outra variável var fora do bloco!";
}
console.log(exemploVar); // Funciona, mas pode causar problemas.
console.log(exemploVar2); // Também funciona, pois var tem escopo de função ou global, não de bloco.

console.log("---- let ----");
if (true) {
    let exemploLet = "Visível apenas dentro do bloco!";
    let exemploLet2 = "Outro let visível apenas dentro do bloco!";
    console.log(exemploLet); // Funciona aqui.
    console.log(exemploLet2); // Funciona aqui também.
}
// console.log(exemploLet); // Erro: exemploLet não está definido.
// console.log(exemploLet2); // Erro: exemploLet2 não está definido, pois é local ao bloco.

console.log("---- const ----");
const PI = 3.14; // Valor constante
console.log(PI); // 3.14
// PI = 3.15; // Erro: Não é permitido alterar uma const.

console.log("---- escopo de função ----");
function escopoLocal() {
    let local = "Escopo de função";
    const constanteFuncao = "Constante dentro da função";
    console.log(local); // Funciona
    console.log(constanteFuncao); // Funciona
}
escopoLocal();
// console.log(local); // Erro: 'local' é inacessível fora da função
// console.log(constanteFuncao); // Erro: 'constanteFuncao' é inacessível fora da função

console.log("---- var e let no loop ----");
for (var i = 0; i < 3; i++) {
    var varNoLoop = "Valor de var dentro do loop";
    let letNoLoop = "Valor de let dentro do loop";
    console.log("var dentro do loop: " + varNoLoop); // Funciona em todas as iterações
    console.log("let dentro do loop: " + letNoLoop); // Funciona apenas dentro do loop
}
console.log(varNoLoop); // Funciona, pois var tem escopo de função ou global
// console.log(letNoLoop); // Erro: let tem escopo de bloco e não é acessível fora do loop

console.log("---- hoisting com var e let ----");
console.log(hoistedVar); // undefined (hoisting com var)
var hoistedVar = "Eu sou hoisted!";
console.log(hoistedVar); // "Eu sou hoisted!"

// console.log(hoistedLet); // Erro: hoistedLet is not defined (hoisting com let)
// let hoistedLet = "Eu sou hoisted com let!";
