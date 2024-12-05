console.log("---- var ----");
if (true) {
    var exemploVar = "Visível fora do bloco!";
}
console.log(exemploVar);

console.log("---- let ----");
if (true) {
    let exemploLet = "Visível apenas dentro do bloco!";
    console.log(exemploLet);
}
console.log(exemploLet);


console.log("---- const ----");
const PI = 3.14;
console.log(PI);
PI = 3.15; 

function escopoLocal() {
    let local = "Escopo de função";
    console.log(local);
}
escopoLocal();
 console.log(local);
