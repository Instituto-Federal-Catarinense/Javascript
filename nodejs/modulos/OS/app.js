// Importa o módulo 'os' para acessar informações do sistema operacional
const os = require('os');
// Exibe a plataforma do sistema operacional (ex: 'linux', 'win32')
console.log('plataforma do sistema:', os.platform());
// Exibe a arquitetura do sistema (ex: 'x64', 'arm')
console.log('arquitetura do sistema:', os.arch());
// Exibe informações sobre a memória total e livre do sistema
console.log('informações da memória:', os.totalmem(), os.freemem());
// Exibe apenas a quantidade de memória livre em bytes
console.log('memoria livre (bytes):', os.freemem());
// Exibe a quantidade de núcleos de CPU disponíveis
console.log('informações da CPU:', os.cpus().length);

