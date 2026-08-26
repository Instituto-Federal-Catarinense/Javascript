const inteiro = parseInt('42px', 10);
const decimal = parseFloat('3.14 metros');
const invalido = Number('abc');

console.log({ inteiro, decimal, invalido, eInvalido: Number.isNaN(invalido) });
console.log(Math.PI, Math.floor(4.9), Math.ceil(4.1), Math.round(4.5));
console.log(Math.min(8, 3, 10), Math.max(8, 3, 10));
const dado = Math.floor(Math.random() * 6) + 1;
console.log(`Resultado do dado: ${dado}`);

module.exports = { inteiro, decimal };