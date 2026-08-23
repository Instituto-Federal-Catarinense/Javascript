const numeros = [1, 2, 3, 4, 5];
let soma = 0;
for (const numero of numeros) {
  if (numero === 3) continue;
  soma += numero;
}

let contador = 0;
while (contador < 2) contador += 1;
do { contador += 1; } while (contador < 3);
for (const indice in numeros) console.log(`Índice ${indice}: ${numeros[indice]}`);
for (let numero = 0; numero < 10; numero += 1) {
  if (numero === 6) break;
}
console.log({ soma, contador });
module.exports = { soma };