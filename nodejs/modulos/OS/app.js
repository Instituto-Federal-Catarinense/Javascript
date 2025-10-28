// Importando o módulo 'os' para obter informações do sistema operacional
//const os = require('os');

import os from 'os';

// exibindo informações do sistema operacional
// exibindo a arquitetura do sistema
console.log('Arquitetura do sistema:',os.arch()); 
// exibindo a quantidade de núcleos da CPU
console.log('Quantidade de CPUs:',os.cpus().lenght);
// exibindo a quantidade de memória total, em bytes
console.log('Memória total (bytes)',os.totalmem());
// exibindo a memória livre do sistema, em bytes
console.log('Memória livre (bytes)',os.freemem());
// exibindo a plataforma do sistema operacional
console.log(os.platform());