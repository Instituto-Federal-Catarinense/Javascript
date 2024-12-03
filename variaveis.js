console.log("---- var ----");
if (true) {
    var exemploVar = "Agora foram diminuidas as chances de erro drasticamente";
    console.log(exemploVar); //assim pode funcionar mas não é recomendado usar mais o var
}


console.log("---- let ----");
if (true) {
    let exemploLet = "Visível apenas dentro do bloco!";
    console.log(exemploLet);
}
let exemploLet = "Agora esse let existe"
console.log(exemploLet);

console.log("---- const ----");
let PI = 3.14; // Valor que muda
console.log("Pi vale " + PI); // 3.14
PI = 3.15;
console.log("Agora PI vale " + PI) //3.15

function escopoLocal() {
    let local = "Escopo de função";
    console.log(local);
}
let local = "local2.0"
escopoLocal();
    console.log(local); //agora ele está puxando uma variavel global, evitando que ocorra o erro anterior