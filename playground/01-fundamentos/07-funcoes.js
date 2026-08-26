/**
 * ============================================================
 * PLAYGROUND — Funções
 * ------------------------------------------------------------
 * Módulo: 01 — Fundamentos   |   Aula: modulos/01-fundamentos/07-funcoes/
 * Execute: node playground/01-fundamentos/07-funcoes.js
 * Código comentado para estudar, alterar e QUEBRAR à vontade.
 * Errar aqui faz parte do método!
 * ============================================================
 */

// ===== 1. FUNÇÃO DECLARADA (sofre hoisting: pode chamar antes de definir) =====
console.log(saudacao('Ana')); // funciona ANTES da declaração aparecer no arquivo!

function saudacao(nome) {
  return `Olá, ${nome}!`;
}

// Anatomia: function NOME(parâmetros) { corpo; return; }
// 'nome' é PARÂMETRO na definição e ARGUMENTO quando chamamos com um valor.

// ===== 2. EXPRESSÃO DE FUNÇÃO (função anônima guardada numa variável) =====
// Aqui a função nasce como VALOR atribuído a uma const.
const despedida = function (nome) {
  return `Tchau, ${nome}!`;
};
console.log(despedida('Bruno'));

// Diferença importante: expressões NÃO sofrem hoisting completo.
try {
  console.log(antesDeExistir()); // tentativa de chamar cedo demais...
} catch (erro) {
  console.log('Erro capturado:', erro.message); // antesDeExistir is not a function
}
var antesDeExistir = function () {
  return 'nunca chego aqui';
};

// ===== 3. ARROW FUNCTION: SINTAXE CURTA (padrão moderno) =====
// Sem "function", sem nome obrigatório. Com UMA expressão, tem return implícito.

const dobrar = (n) => n * 2;          // parênteses podem sumir com 1 parâmetro
const somar = (a, b) => a + b;        // múltiplos parâmetros exigem parênteses
console.log(dobrar(8), somar(2, 3));  // 16 5

// Com várias linhas, voltam as chaves E o return explícito:
const media = (n1, n2) => {
  const resultado = (n1 + n2) / 2;
  return resultado; // sem return, a função devolveria undefined!
};
console.log('media(7, 9):', media(7, 9));

// Retorno de objeto em arrow precisa de parênteses (senão {} vira bloco):
const criarPonto = (x, y) => ({ x, y });
console.log(criarPonto(3, 4));

// Diferença teórica: arrow não cria seu próprio `this` — ótimo para callbacks,
// inadequada para métodos que precisam se referir ao objeto (aula 09).

// ===== 4. PARÂMETROS DEFAULT (VALORES PADRÃO) =====
// O default entra em ação quando o argumento vem undefined (ou nem vem).

function boasVindas(nome = 'estudante', curso = 'Informática') {
  return `Bem-vindo(a), ${nome}, ao curso de ${curso}!`;
}
console.log(boasVindas());                    // usa os dois defaults
console.log(boasVindas('Carla'));             // só o segundo é default
console.log(boasVindas('Carla', 'Agro'));     // nenhum default usado
console.log(boasVindas(undefined, 'Mecânica')); // força o primeiro default

// ===== 5. RETORNO: TUDO QUE A FUNÇÃO "DEVOLVE" PARA QUEM CHAMOU =====
// return entrega o valor E ENCERRA a função na hora (código abaixo dele morre).

function primeiraLetra(texto) {
  if (!texto) return ''; // early return para entrada vazia/undefined
  return texto[0];
}
console.log('primeiraLetra("JS"):', primeiraLetra('JS'));
console.log('primeiraLetra(""):', primeiraLetra(''));

// Função SEM return devolve undefined — teste clássico:
function semRetorno() {}
console.log('semRetorno() devolve:', semRetorno());

// return só carrega UM valor... mas podemos empacotar vários num objeto/array:
function estatisticas(a, b) {
  return { soma: a + b, produto: a * b };
}
console.log(estatisticas(6, 7));

// ===== 6. FUNÇÕES COMO VALORES (o coração do JavaScript!) =====
// Funções são valores: dá para guardar em arrays/objetos e PASSAR como argumento.

// Guardando funções num objeto ("tabela de operações"):
const operacoes = {
  soma: (a, b) => a + b,
  subtracao: (a, b) => a - b,
};

// CALLBACK: função passada como parâmetro para outra função.
function calcular(a, b, operacao) {
  return operacao(a, b); // quem decide o que fazer é quem CHAMA
}
console.log(calcular(10, 5, operacoes.soma));      // 15
console.log(calcular(10, 5, operacoes.subtracao)); // 5

// Você já viu callbacks sem perceber: forEach/map recebem funções!
[1, 2, 3].forEach((numero) => console.log('forEach passou por:', numero));

// ===== EXPERIMENTE =====
// 1) Transforme `saudacao` em arrow function mantendo o mesmo comportamento.
// 2) Adicione um terceiro parâmetro default à `media` (peso?) e teste as chamadas.
// 3) Crie `calcular(10, 5, (a, b) => a * b)` passando a multiplicação direto na chamada.

module.exports = { saudacao, despedida, dobrar, somar, media, boasVindas, calcular };
