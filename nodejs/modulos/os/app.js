const os = require('os'); // importa o módulo do sistema operacional

console.log(`Você esta usando o ${os.platform()}`); // exibe a plataforma do sistema operacional

console.log(`A arquitetura do seu processador é ${os.arch()}`); // exibe a arquitetura do processador

console.log(`A memória total do seu sistema é ${os.totalmem()} GB`); // exibe a memória total em GB

console.log(`A memória livre do seu sistema é ${os.freemem()} GB`); // exibe a memória livre em GB

console.log(`O tempo de atividade do sistema é horas`); // exibe o tempo de atividade em horas

console.log('quantidade de CPUs:', os.cpus().length); // exibe a quantidade de CPUs

