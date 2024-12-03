console.log("---- var ----");
if (true) {
    var exemploVar = "Visível fora do bloco!";
}
console.log(exemploVar); // Funciona, mas pode causar problemas.

console.log("---- var e escopo de função ----");
function escopoFuncao() {
    var variavelFuncao = "Estou dentro de uma função";
    console.log(variavelFuncao);
}
escopoFuncao();
// console.log(variavelFuncao); // Erro: 'variavelFuncao' não está acessível fora da função.

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

function escopoLocal() {
    let local = "Escopo de função";
    console.log(local);
}
escopoLocal();
// console.log(local); // Erro: 'local' é inacessível fora da função

console.log("---- var em loop ----");
for (var i = 0; i < 3; i++) {
    console.log(`Dentro do loop (var): i = ${i}`);
}
console.log(`Fora do loop (var): i = ${i}`); // 'i' é acessível fora do loop, pois 'var' tem escopo global ou de função.

console.log("---- let ----");
if (true) {
    let exemploLet = "Visível apenas dentro do bloco!";
    console.log(exemploLet); // Funciona aqui.
}

console.log("---- let em loop ----");
for (let j = 0; j < 3; j++) {
    console.log(`Dentro do loop (let): j = ${j}`);
}
// console.log(`Fora do loop (let): j = ${j}`); // Erro: j não é acessível fora do loop, pois 'let' tem escopo de bloco.
