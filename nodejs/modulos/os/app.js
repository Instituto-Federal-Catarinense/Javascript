// importando o modulo os  (operting system)
const os = require('os');

// exibindo informações sobre o sistema operacional
// exibindo arquitetura do sistema
console.log('Arquitetura do sistema:', os.arch());
// exibindo informações da CPU
console.log('Informações da CPU:', os.cpus());
// exibindo total da memória em bytes
console.log('total da memória (bytes):', os.totalmem());
// exibindo memória livre em bytes
console.log('memória livre (bytes):', os.freemem());
// exibindo sistema operacional
console.log('os.platform()');