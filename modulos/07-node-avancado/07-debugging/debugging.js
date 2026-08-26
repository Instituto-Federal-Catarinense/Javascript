function calcularMedia(notas) {
  if (!notas.length) throw new Error('A lista de notas não pode ser vazia.');
  debugger;
  return notas.reduce((total, nota) => total + nota, 0) / notas.length;
}
console.log(`Média: ${calcularMedia([7, 8, 9])}`);
module.exports = { calcularMedia };