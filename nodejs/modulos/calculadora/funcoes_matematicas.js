function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        throw new Error('Divisão por zero não é permitida.');
    }
    return a / b;
}

function idade(ano) {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - ano;
}


module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir,
    idade
};