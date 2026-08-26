const produtos = [
  { nome: 'Livro', preco: 30, categoria: 'educação' },
  { nome: 'Caneta', preco: 5, categoria: 'papelaria' },
  { nome: 'Curso', preco: 100, categoria: 'educação' },
];
const nomes = produtos.map((produto) => produto.nome);
const caros = produtos.filter((produto) => produto.preco > 20);
const total = produtos.reduce((soma, produto) => soma + produto.preco, 0);
console.log(nomes, caros, total, produtos.find((produto) => produto.nome === 'Livro'));
console.log(produtos.some((produto) => produto.preco > 90), produtos.every((produto) => produto.preco > 0));
console.log([...produtos].sort((a, b) => a.preco - b.preco));
console.log([[1, 2], [3, [4]]].flat(2), produtos.slice(0, 2), produtos.includes('Livro'));
const fila = ['A']; fila.push('B'); fila.pop(); fila.unshift('Z'); fila.shift();
console.log(fila, produtos.indexOf(produtos[0]), produtos.join(', '));
module.exports = { produtos, total };