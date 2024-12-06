var nome = "ana";
console.log(nome);

console.log("---- var ----");
if (true) {
    console.log("Acessível dentro do bloco"+ nome);
    var exemploVar = "Visível fora do bloco!";
}
console.log(exemploVar); 

console.log("---- let ----");
if (true) {
    let exemploLet = "Visível apenas dentro do bloco!";
    console.log(exemploLet); 
}
console.log("---- const ----");
const PI = 3.14; 
console.log(PI); 


function escopoLocal() {
    let local = "Escopo de função";
    console.log(local);
}
escopoLocal();
console.log(local);

function escopoLocal() {
    const patata="palhaço"
    console.log(patata);
   // patata = "patati" //Erro: Não é permitido alterar uma const
}

