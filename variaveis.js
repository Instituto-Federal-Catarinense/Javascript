console.log("---- var ----");
if (true) {
    var exemploVar = "Visível fora do bloco!";
    var outroExemploVar = "Outro exemplo de var!";
}

console.log(exemploVar); // Funciona, mas pode causar problemas.
console.log(outroExemploVar); // Funciona, pois 'var' é acessível fora do bloco.

console.log("---- let ----");
if (true) {
    let exemploLet = "Visível apenas dentro do bloco!";
    let outroExemploLet = "Outro exemplo de let!";
    console.log(exemploLet); // Funciona aqui.
    console.log(outroExemploLet); // Funciona aqui.
}
// console.log(exemploLet); // Erro: exemploLet não está definido.
// console.log(outroExemploLet); // Erro: outroExemploLet não está definido.

console.log("---- const ----");
const PI = 3.14; // Valor que não muda
console.log(PI); // 3.14
// PI = 3.15; // Erro: Não é permitido alterar uma const

const euler = 2.718;
console.log(euler); // 2.718

console.log("---- escopo de função ----");
function escopoLocal() {
    let local = "Escopo de função";
    const constanteLocal = "Constante no escopo de função";
    console.log(local); // Funciona
    console.log(constanteLocal); // Funciona
}
// console.log(local); // Erro: 'local' é inacessível fora da função
// console.log(constanteLocal); // Erro: 'constanteLocal' é inacessível fora da função

console.log("---- escopo de bloco ----");
if (true) {
    let dentroDoBlocoLet = "Visível apenas dentro do bloco";
    const dentroDoBlocoConst = "Constante visível apenas dentro do bloco";
    console.log(dentroDoBlocoLet); // Funciona aqui.
    console.log(dentroDoBlocoConst); // Funciona aqui.
}
// console.log(dentroDoBlocoLet); // Erro: 'dentroDoBlocoLet' não está definido
// console.log(dentroDoBlocoConst); // Erro: 'dentroDoBlocoConst' não está definido

console.log("---- mais exemplos ----");
var globalVar = "Variável global";

function testeEscopo() {
    var localFuncVar = "Variável local dentro da função";
    console.log(localFuncVar); // Funciona
    console.log(globalVar); // Funciona, pois globalVar é global
}

testeEscopo();

// console.log(localFuncVar); // Erro: 'localFuncVar' não está definida fora da função
console.log(globalVar); // Funciona, pois é uma variável global


