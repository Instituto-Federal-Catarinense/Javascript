/**
 * SOLUÇÃO-MODELO — Closures e Escopo
 * Enunciado resolvido: exercícios 1 e 2 de modulos/04-poo-js-moderno/03-closures-e-escopo/exercicios.md
 * Execute: node modulos/04-poo-js-moderno/solucoes/03-closures-e-escopo.js
 */

// EXERCÍCIO 1 — Fábrica de multiplicadores
// A função interna lembra do fator da externa mesmo depois de a fábrica terminar:
// esse vínculo com o escopo de nascimento É a closure.
function criarMultiplicador(fator) {
  return (numero) => numero * fator;
}

const dobro = criarMultiplicador(2);
const metade = criarMultiplicador(0.5);

console.log(`dobro(6) = ${dobro(6)}`);
console.log(`metade(6) = ${metade(6)}`);

// EXERCÍCIO 2 — Senha do caixa protegida
// senhaInicial vive apenas dentro da fábrica; o objeto devolvido expõe somente
// abrir(), então não existe caminho público até a senha.
function criarCaixa(senhaInicial) {
  return {
    abrir(tentativa) {
      return tentativa === senhaInicial ? 'Aberto' : 'Senha errada';
    },
  };
}

const caixa = criarCaixa('secreta123');
console.log(caixa.abrir('errada'));
console.log(caixa.abrir('secreta123'));

// Prova do encapsulamento: o objeto impresso mostra apenas o método,
// nunca o valor guardado na closure.
console.log('Objeto caixa:', caixa);

// DISCUSSÃO:
// 1) Cada chamada da fábrica cria um escopo NOVO: criarCaixa('a') e
//    criarCaixa('b') guardam senhas independentes — closures são instâncias de
//    estado, não variáveis globais disfarçadas.
// 2) Erro comum: expor a variável interna sem querer (getSenha devolve a própria
//    string). Encapsule o acesso às respostas, não apenas a variável.
// 3) Closures dentro de laços com var compartilham a MESMA variável entre todas
//    as iterações; com let, cada volta tem sua cópia — mais um motivo para
//    abandonar var.
