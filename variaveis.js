//var nome = "receba"
//console.log (nome);

//console.log("---- var ----");
//if (true) {
    //var nome = "devolva";
    //console.log(nome);
    //var exemploVar = "Visível fora do bloco!";}//

let nome = "Shrek";
console.log(nome);
    
console.log("----var----");
if (true) {
  let nome = "joao";
  console.log("Acessível dentro do bloco: " + nome);
}
console.log("Acessivel fora do bloco:" + nome);

//console.log(exemploVar); // Funciona, mas pode causar problemas.
console.log(nome);

console.log("---- let ----");
if (true) {
    let exemploLet = "Visível apenas dentro do bloco!";
    console.log(exemploLet); // Funciona aqui.
}
 //console.log(exemploLet); // Erro: exemploLet não está definido.

console.log("---- const ----");
const PI = 3.14; // Valor que não muda
console.log(PI); // 3.14
 //PI = 3.15; // Erro: Não é permitido alterar uma const

function escopoLocal() {
    let local = "Escopo de função";
    console.log(local);
}
escopoLocal();
 //console.log(local); // Erro: 'local' é inacessível fora da função
