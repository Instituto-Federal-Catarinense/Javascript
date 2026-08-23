const frase = '  JavaScript torna a web interativa.  ';
const limpa = frase.trim();
const palavras = limpa.split(' ');

console.log(limpa.length, limpa.toUpperCase(), limpa.toLowerCase());
console.log(limpa.slice(0, 10), limpa.substring(11, 21));
console.log(limpa.indexOf('web'), limpa.includes('interativa'));
console.log(limpa.startsWith('Java'), limpa.endsWith('.'));
console.log(limpa.replace('web', 'internet'));
console.log(limpa.replaceAll('a', '@'), palavras.join('|'));
console.log(`A frase tem ${palavras.length} palavras.`);

module.exports = { limpa, palavras };