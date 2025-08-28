// Calculadora de Idade //
function idade(nome, anoNasc, anoNecessario){
    const idadeCalculada = anoNecessario - anoNasc;
    return `Olá ${nome}! Em ${anoNecessario} você terá ${idadeCalculada} anos!`;
}
// Exportando a função para que possa ser utilizada em outros arquivos //
module.exports = {
    idade 
}