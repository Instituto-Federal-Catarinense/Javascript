//Importa o módulo nativo 'os' do Node.js.
const os = require('os');

//Exibe informações sobre o sistema operacional no console.
//Exibe a arquitetura do sistema.
console.log('Arquitetura do sistema:', os.arch());
//Exibe a quantidade de CPUs.
console.log('Quantidade de CPUs:', os.cpus().length);
//Exibe o total de memória em bytes.
console.log('Memória total (bytes):', os.totalmem());
//Exibe a memória livre em bytes.
console.log('Memória livre (bytes):', os.freemem());
//Exibe o sistema operacional.
console.log(os.platform());