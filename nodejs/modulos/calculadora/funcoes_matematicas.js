// crie e exporte as quatro operações matemáticas básicas: soma, subtração, multiplicação e divisão.
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
        return 'Erro: Divisão por zero não é permitida.';
    }
    return a / b;
}

module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao
};