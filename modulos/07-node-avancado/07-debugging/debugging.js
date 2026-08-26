function calcularMedia(notas) {
  if (!notas.length) throw new Error('A lista de notas não pode ser vazia.');
  // eslint-disable-next-line no-debugger -- a aula é sobre debugging: este ponto pausa o node --inspect
  debugger;
  return notas.reduce((total, nota) => total + nota, 0) / notas.length;
}
console.log(`Média: ${calcularMedia([7, 8, 9])}`);
module.exports = { calcularMedia };