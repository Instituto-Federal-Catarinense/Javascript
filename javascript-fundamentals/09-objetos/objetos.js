const pessoa = { nome: 'Carlos', idade: 25, contato: { email: 'carlos@exemplo.com' } };
const { nome, idade, ...restante } = pessoa;
const atualizada = { ...pessoa, idade: idade + 1, cidade: 'Curitiba' };
const email = pessoa.endereco?.email ?? 'não informado';

console.log(nome, idade, restante, atualizada, email);
console.log(Object.keys(pessoa), Object.values(pessoa), Object.entries(pessoa));
module.exports = { pessoa, atualizada };