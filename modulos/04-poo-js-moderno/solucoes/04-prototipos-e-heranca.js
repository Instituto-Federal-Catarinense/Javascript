/**
 * SOLUÇÃO-MODELO — Protótipos e Herança
 * Enunciado resolvido: exercícios 1 e 2 de modulos/04-poo-js-moderno/04-prototipos-e-heranca/exercicios.md
 * Execute: node modulos/04-poo-js-moderno/solucoes/04-prototipos-e-heranca.js
 */

// EXERCÍCIO 1 — Protótipo de veículo da loja
// Protótipo = objeto fallback: quem não tem a propriedade própria procura nela.
const veiculoBase = {
  rodas: 4,
  descrever() {
    return `Veículo com ${this.rodas} rodas`;
  },
};

const moto = Object.create(veiculoBase);
moto.rodas = 2; // propriedade própria "sombra" vence o protótipo na busca

const caminhao = Object.create(veiculoBase); // herda rodas: 4 sem declarar nada

console.log(veiculoBase.descrever()); // usa o valor original
console.log(moto.descrever()); // usa o valor sombreado pela moto
console.log(caminhao.descrever()); // sobe até o protótipo

// EXERCÍCIO 2 — Método compartilhado depois do fato
// A busca sobe pela cadeia NA HORA da chamada: métodos novos no protótipo
// alcançam objetos que já existiam antes da alteração.
veiculoBase.buzinar = () => 'Bi bi!';

console.log(`Moto buzina: ${moto.buzinar()}`);
console.log(`Caminhão buzina: ${caminhao.buzinar()}`);

// DISCUSSÃO:
// 1) this em descrever aponta para quem chamou (moto, caminhao...): por isso o
//    MESMO método entrega resultados diferentes conforme a cadeia.
// 2) Sobrescrever no objeto (moto.rodas = 2) é local e barato; mudar o protótipo
//    afeta todos os derivados de uma vez. Nunca polua protótipos nativos
//    (Object.prototype, Array.prototype) em código real.
// 3) hasOwnProperty distingue "é meu" de "veio da cadeia"; objetos criados com
//    Object.create(null) nem a possuem — Object.hasOwn(obj, chave) é o sucessor
//    seguro nos engines modernos.
