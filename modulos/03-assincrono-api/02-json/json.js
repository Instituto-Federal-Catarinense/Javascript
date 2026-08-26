const usuario = { nome: 'Lia', idade: 22, ativo: true };
const texto = JSON.stringify(usuario);
const novamente = JSON.parse(texto);
const resposta = { dados: [novamente], pagina: 1 };
console.log(texto, resposta.dados[0].nome);
module.exports = { usuario, texto, novamente };