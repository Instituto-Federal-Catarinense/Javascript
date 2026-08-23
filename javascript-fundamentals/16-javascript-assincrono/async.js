const esperar = (valor, atraso) => new Promise((resolver) => setTimeout(() => resolver(valor), atraso));
async function executar() {
  const [primeiro, segundo] = await Promise.all([esperar('A', 10), esperar('B', 5)]);
  const vencedor = await Promise.race([esperar('rápido', 2), esperar('lento', 20)]);
  console.log({ primeiro, segundo, vencedor });
}
executar().catch((erro) => console.error('Falha:', erro));
module.exports = { esperar };