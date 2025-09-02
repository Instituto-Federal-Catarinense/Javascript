function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Divisão por zero não é permitida.";
    }
    return a / b;
}



// Exportando as funções para que possam ser usadas em outros arquivos
module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao
};