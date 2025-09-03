//importa
const os = require('os')
//exibe a arquitetura do sistema
console.log('Arquitetura do sistema:', os.arch())
//exibe a quantidade de CPUs
console.log('Quantidade de CPUs:', os.cpus().length)
//exibe a memória total
console.log('Memória total (bytes):', os.totalmem())
//exibe a memória livre
console.log('Memória livre (bytes):', os.freemem())
//exibe o sistema operacional
console.log(os.platform())