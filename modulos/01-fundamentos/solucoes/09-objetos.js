/**
 * SOLUÇÃO-MODELO — Objetos
 * Enunciado resolvido: exercícios 1 e 2 de modulos/01-fundamentos/09-objetos/exercicios.md
 * Execute: node modulos/01-fundamentos/solucoes/09-objetos.js
 */

// EXERCÍCIO 1 — Ficha do jogador
const nina = {
  apelido: 'Nina',
  nivel: 7,
  pontos: 1240,
};

// Propriedades podem ser acrescentadas depois da criação; this referencia o
// próprio objeto quando o método é chamado como nina.descrever().
nina.vida = 100;
nina.descrever = function () {
  return `${this.apelido} - nível ${this.nivel}, ${this.pontos} pontos`;
};

console.log(nina.descrever());
console.log(Object.keys(nina));

// EXERCÍCIO 2 — Partida encerrada, ficha preservada
// Spread copia tudo e as propriedades REESCRITAS depois dele vencem;
// o objeto original permanece intacto — imutabilidade na prática.
const ninaPosPartida = { ...nina, pontos: nina.pontos + 380, nivel: 8 };

console.log(`Antes: nível ${nina.nivel}, ${nina.pontos} pontos`);
console.log(`Depois: nível ${ninaPosPartida.nivel}, ${ninaPosPartida.pontos} pontos`);

// Destructuring com rest: apelido sai isolado e o resto agrupa num objeto novo.
const { apelido, ...dadosPartida } = ninaPosPartida;
console.log(`Apelido isolado: ${apelido}`);
console.log('Resto da ficha:', dadosPartida);

// DISCUSSÃO:
// 1) Arrow function no lugar de function quebraria descrever(): arrow não cria
//    this próprio, então this.apelido apontaria para fora do objeto. Métodos que
//    usam this devem ser function ou method shorthand.
// 2) Ordem no spread importa: { pontos: X, ...original } faria o original
//    sobrescrever X; escreva ...base primeiro e as exceções depois.
// 3) dadosPartida inclui o método descrever junto com os números; se quisesse só
//    estatísticas, filtraria Object.entries por typeof valor === 'number'.
