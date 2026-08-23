const nome = 'Ana';
const idade = 20;
const estudante = true;
const disciplinas = ['JavaScript', 'HTML'];
const cadastro = { nome, idade };

console.log(typeof nome, typeof idade, typeof estudante);
console.log(typeof undefined, typeof null, typeof cadastro);
console.log(`A estudante ${nome} tem ${idade} anos.`);
console.log('5' + 2, Number('5') + 2, Number.isNaN(Number('x')));

module.exports = { nome, idade, estudante, disciplinas, cadastro };