const readline = require('readline');
const funcoes = require('./funcoes_matematicas');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe o ano de nascimento: ', (anoNascimento) => {
    rl.question('Informe o ano atual: ', (anoAtual) => {
        const idade = funcoes.subtrair(Number(anoAtual), Number(anoNascimento));
        console.log(`Sua idade é: ${idade} anos`);
        rl.close();
    });
});