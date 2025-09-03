
//importando um modulo fs (file system)
const sf = require ("fs");

//lendo um arquivo de forma assincrona
fs.readFile('exemplo.txt', 'utf8', (erro, dados)=> {
    //tratando erro
    if(erro) {
        //adicionando o erro no console
        console.error('Erro ao ler o arquivo:', erro);
        //retornando para não executa o console.log abaixo
        return;
    }
    //se não houver erro exibindo o conteúdo do arquivo 
    console.log('conteúdo do arquivo:', dados);
});
//imprimindo uma mensagem antes da leitura do arquivo
console.log('Esta mensagem aparce primeiro.');