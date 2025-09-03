//importando o modulo os (operating system)
const os = require('os');

//exibindo informações do sistema operacional
//exibindo a arquitetura do sistema
console.log('Arquitetura do sistema', os.arch());
//exibindo a quantidade de CPUs
console.log('Quantidade CPUs:', os.cpus().length);
//exibindo o total de memórias em bytes
console.log('Memóriaria total em (bytes):', os.totalmem());
//exibindo a memoria livre em bytes
console.log('Memória livre (bytes):', os.freemem());
//exibindo o sistema operacional
console.log(os.plataform());
