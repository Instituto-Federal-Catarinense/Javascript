const subtotal = 80;
const desconto = subtotal > 50 ? 10 : 0;
const total = subtotal - desconto;
const usuario = { nome: 'Bia', apelido: null };

console.log({ soma: 2 + 3, resto: 10 % 3, total });
console.log(0 == false, 0 === false);
console.log(usuario.apelido ?? usuario.nome);
console.log(total > 0 && total <= 100);

module.exports = { total };