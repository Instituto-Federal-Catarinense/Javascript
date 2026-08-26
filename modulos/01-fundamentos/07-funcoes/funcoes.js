function saudar(nome = 'estudante') { return `Olá, ${nome}!`; }
const dobrar = function (numero) { return numero * 2; };
const somar = (...numeros) => numeros.reduce((total, numero) => total + numero, 0);
function calcular(a, b, operacao) { return operacao(a, b); }
const produto = calcular(3, 4, (a, b) => a * b);

console.log(saudar(), dobrar(5), somar(1, 2, 3), produto);
(function () { const mensagem = 'IIFE isolada'; console.log(mensagem); }());
module.exports = { saudar, somar };