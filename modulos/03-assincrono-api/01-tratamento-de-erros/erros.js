function dividir(dividendo, divisor) {
  if (divisor === 0) throw new RangeError('O divisor não pode ser zero.');
  return dividendo / divisor;
}
try { console.log(dividir(10, 2)); dividir(1, 0); }
catch (erro) { console.error(`${erro.name}: ${erro.message}`); }
finally { console.log('Operação encerrada.'); }
try { JSON.parse('{invalido}'); } catch (erro) { console.error('JSON inválido:', erro.name); }
module.exports = { dividir };