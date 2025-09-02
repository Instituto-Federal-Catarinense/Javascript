const os = require('os');

// Exibe informações sobre o sistema operacional
// Exibindo a arquitetura do sistema 
console.log('Arquitetura do sistema:', os.arch());

//exibindo a quantidade de CPUs
console.log('Quantidade de CPUs:', os.cpus().length);

//Exibindo a quantidade de memória em bytes
console.log('Memória livre (bytes):', os.totalmem());

//Exibe a quantidade de memória livre em bytes
console.log('Memória livre (bytes):', os.freemem());

//Exibe o sistema operacional
console.log(os.platform());

console.log(os.platform());