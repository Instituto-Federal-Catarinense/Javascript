function idade(nome, anoNasc){
    idade = 2025 - anoNasc;
    return `Olá, ${nome}! Você tem ${idade} anos.`;
}

function idade_var(nome, anoNasc, anoVar){
    idade_var = anoVar - anoNasc;
    if (anoVar < anoNasc){
        return `Ano inválido!`
    }
    return `Olá, ${nome}! Você tem ${idade_var} anos em ${anoVar}.`;
}
module.exports = {
    idade,
    idade_var
};