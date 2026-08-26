const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mensagem = 'Contato: ana@exemplo.com e código 12345.';
console.log(email.test('ana@exemplo.com'));
console.log(mensagem.match(/\d+/g));
console.log(mensagem.replace(/ana/gi, 'pessoa'));
module.exports = { email };