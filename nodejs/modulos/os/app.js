//importando o modulo os (operating system)
 const os = require('os');

 //exibindo informacoes do sistema operacional 
 
 //exibindo a arquitetura do sistema 
 console.log('Arquitetura do sistema:', os.arch());
 //exibindo a quantidade de cpus
 console.log('Quantidade de CPUs:', os.cpus().length);
 //exibindo o total de memoria em bytes 
 console.log('Memória total (bytes):', os.totalmen());
 //exibindo a memoria livre em bytes 
 console.log('Memória livre (bytes):', os.freemen());
 //exibindo o sistema operacional 
 console.log(os.platform());