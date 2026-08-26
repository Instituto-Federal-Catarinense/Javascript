function criarContador(inicial = 0) {
  let valor = inicial;
  return { incrementar: () => ++valor, atual: () => valor };
}
const contador = criarContador(10);
console.log(contador.incrementar(), contador.atual());
module.exports = { criarContador };