/**
 * ============================================================
 * PLAYGROUND — Closures e Escopo
 * ------------------------------------------------------------
 * Módulo: 04 — POO JS Moderno   |   Aula: modulos/04-poo-js-moderno/03-closures-e-escopo/
 * Execute: node playground/04-poo-js-moderno/03-closures-e-escopo.js
 * Código comentado para estudar, alterar e QUEBRAR à vontade.
 *
 * CLOSURE (fechamento) = a função interna "lembra" das variáveis
 * do lugar onde nasceu, mesmo depois de a função externa terminar.
 * ============================================================
 */

// ===== 1. O CONCEITO EM UMA FUNÇÃO =====

function criarContador() {
  let valor = 0; // variável "preso" dentro da closure

  // A função devolvida guarda acesso a `valor` para sempre:
  return function incrementar() {
    valor += 1; // cada chamada lembra do estado anterior!
    return valor;
  };
}

const contadorA = criarContador();
const contadorB = criarContador(); // nova execução = NOVA variável `valor`

console.log('contadorA:', contadorA(), contadorA(), contadorA()); // 1, 2, 3
console.log('contadorB:', contadorB(), contadorB());               // 1, 2 (independente!)
// `valor` não existe fora: tente console.log(valor) e receba ReferenceError.

// ===== 2. CONTADOR PRIVADO: closure como "cofre" =====
// Antes dos campos privados (#), closures eram A forma de encapsular dados.

function criarCofre(senhaInicial) {
  // Estas variáveis são inacessíveis por fora — só os métodos veem:
  let senha = senhaInicial;
  let aberto = false;

  return {
    abrir(tentativa) {
      if (tentativa !== senha) {
        return 'Senha incorreta!';
      }
      aberto = true;
      return 'Cofre aberto.';
    },
    trocarSenha(nova, atual) {
      if (atual !== senha) {
        return 'Nao autorizado.';
      }
      senha = nova;
      return 'Senha alterada com sucesso.';
    },
    estaAberto() {
      return aberto;
    },
  };
}

const cofre = criarCofre('1234');
console.log('\nCofre:', cofre.abrir('9999'));
console.log('Cofre:', cofre.abrir('1234'), '| aberto?', cofre.estaAberto());
console.log('Troca:', cofre.trocarSenha('4321', '1234'));

// ===== 3. FÁBRICA DE FUNÇÕES: gerar comportamento sob medida =====
// Uma função que cria outras funções já configuradas.

function criarSaudacao(cumprimento) {
  return (nome) => `${cumprimento}, ${nome}!`;
}

const bomDia = criarSaudacao('Bom dia');
const boaNoite = criarSaudacao('Boa noite');
console.log('\n' + bomDia('Ana'));
console.log(boaNoite('Bruno'));

// Exemplo prático: multiplicadores parciais (currying simples).
const multiplicarPor = (fator) => (numero) => numero * fator;
const dobrar = multiplicarPor(2);
const triplicar = multiplicarPor(3);
console.log('dobrar(10)    =', dobrar(10));
console.log('triplicar(10) =', triplicar(10));

// ===== 4. MEMORIZAÇÃO (MEMOIZATION): cache feito com closure =====
// Guardamos resultados já calculados para não repetir trabalho.

function memorizar(funcaoOriginal) {
  const cache = new Map(); // vive na closure, invisível para fora

  return function (...argumentos) {
    const chave = JSON.stringify(argumentos); // serializa args como chave

    if (cache.has(chave)) {
      console.log('   [cache] resultado ja conhecido!');
      return cache.get(chave);
    }

    const resultado = funcaoOriginal.apply(this, argumentos); // calcula uma vez
    cache.set(chave, resultado);
    return resultado;
  };
}

function fibonacci(n) {
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

const fibonacciMemo = memorizar(fibonacci);

console.log('\nFibonacci(30):');
console.log('  1a chamada:', fibonacciMemo(30)); // calcula e grava no cache
console.log('  2a chamada:', fibonacciMemo(30)); // responde instantâneo do cache

// ===== 5. CLÁSSICO DO VESTIBULAR: loop var vs let =====
// `var` tem escopo de FUNÇÃO: todas as iterações compartilham a MESMA i.
// `let` tem escopo de BLOCO: cada iteração ganha SUA PRÓPRIA i.

console.log('\nLoop com var (bug classico):');
for (var i = 0; i < 3; i += 1) {
  setTimeout(() => console.log('  var ->', i)); // imprime 3, 3, 3
}

console.log('Loop com let (correto):');
for (let j = 0; j < 3; j += 1) {
  setTimeout(() => console.log('  let ->', j)); // imprime 0, 1, 2
}
// Por quê? O callback captura a VARIÁVEL, não o VALOR do momento.
// Com var, ao rodar o timeout, i já valeu 3 para todo mundo.

setTimeout(() => console.log('\nFim do playground.'), 100);

// ===== EXPERIMENTE =====
// 1. Faca criarContador aceitar um passo customizado (contar de 2 em 2).
// 2. Adicione um metodo esquecerCache() na funcao memorizar.
// 3. Corrija o bug do var SEM usar let (dica: IIFE capturando i por parametro).
