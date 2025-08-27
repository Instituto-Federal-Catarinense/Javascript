function idade(nome, anoNasc) {
    idade = 2025 - anoNasc;
    return `Olá, ${nome}! em 2025 você terá ${idade}!`;
}

// Exportando a função para que possa ser usada em outros arquivos
module.exports = {
    idade
};