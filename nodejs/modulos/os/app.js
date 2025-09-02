// Importa o módulo 'os', que permite acessar informações sobre o sistema operacional
const os = require('os');
// Mostra no console qual é o sistema operacional (como 'win32' para Windows, 'linux' para Linux, etc.)
console.log(os.platform());