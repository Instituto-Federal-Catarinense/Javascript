// Importa o módulo 'os' do Node.js para acessar informações do sistema operacional
const os = require('os');
// Exibe no console qual sistema operacional está sendo utilizado
console.log(`Você esta usando o ${os.platform()}`);
// Exibe a arquitetura do sistema operacional (ex: x64, arm)
console.log(`Arquitetura do sistema: ${os.arch()}`);
// Exibe a quantidade total de memória do sistema em bytes
console.log(`Memória total do sistema: ${os.totalmem()}`);
// Exibe a quantidade de memória livre disponível no sistema em bytes
console.log(`Memória livre do sistema: ${os.freemem()}`);
// Exibe o número de CPUs disponíveis no sistema
console.log(`Número de CPUs: ${os.cpus().length}`);



