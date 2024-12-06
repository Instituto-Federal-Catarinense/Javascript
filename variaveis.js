var nome = "Kamili";
console.log (nome);

console.log("---- var ----");
if (true) {
    console.log("Acessível dentro do bloco:" +nome)
    var exemploVar = "Visível fora do bloco!";
}
console.log(exemploVar); // Funciona, mas pode causar problemas.

console.log("---- let ----");
let sobrenome ="Casagrande";
if (true) {
    console.log(sobrenome); //Funciona aqui.
    let exemploLet = "Visível apenas dentro do bloco!";
    console.log(exemploLet); // Funciona aqui.
}
// console.log(exemploLet); // Erro: exemploLet não está definido.

console.log("Acessível globalmente:" +sobrenome);
console.log("---- const ----");
const PI = 3.14; // Valor que não muda
console.log(PI); // 3.14
// PI = 3.15; // Erro: Não é permitido alterar uma const

function escopoLocal() {
    let local = "Escopo de função";
    console.log(local);
}

//escopoLocal();
// console.log(local); // Erro: 'local' é inacessível fora da função

// brincando na aula 

//function teste() {
   // let local = "Testando123";
   // console.log(local);
//}
//teste();
//af

//console.log("teste2");
//const teste = 9090;
//console.log(teste2);
//teste2= 377373;

