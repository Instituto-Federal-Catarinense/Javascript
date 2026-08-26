/**
 * ============================================================
 * PLAYGROUND — Tratamento de Erros
 * ------------------------------------------------------------
 * Módulo: 03 — Assíncrono e API   |   Aula: modulos/03-assincrono-api/01-tratamento-de-erros/
 * Execute: node playground/03-assincrono-api/01-tratamento-de-erros.js
 * Código comentado para estudar, alterar e QUEBRAR à vontade.
 * ============================================================
 */

// ===== 1. TRY / CATCH / FINALLY: a base de tudo =====
// O bloco `try` executa código que PODE falhar.
// Se algo falhar, o `catch` captura o erro e o programa NÃO trava.

function dividir(a, b) {
  if (b === 0) {
    // `throw` lança um erro e INTERROMPE a função imediatamente.
    // Quem chamou a função decide (ou não) capturar com try/catch.
    throw new Error('Divisão por zero nao e permitida');
  }
  return a / b;
}

try {
  console.log('10 / 2 =', dividir(10, 2)); // funciona normalmente
  console.log('10 / 0 =', dividir(10, 0)); // lança erro -> pula para o catch
  console.log('Esta linha NUNCA sera executada'); // ignorada por causa do throw
} catch (erro) {
  // O objeto `erro` carrega informações sobre o problema.
  console.log('Capturamos o erro:', erro.message);
} finally {
  // `finally` roda SEMPRE, com ou sem erro.
  // Ideal para liberar recursos: fechar arquivos, conexões etc.
  console.log('Bloco finally executado.\n');
}

// ===== 2. TIPOS DE ERRO NATIVOS: cada um conta uma história =====

// TypeError: operação em valor de tipo inapropriado.
try {
  const nada = null;
  nada.propriedade; // ler propriedade de null -> TypeError
} catch (erro) {
  console.log('Tipo do erro:', erro.name, '->', erro.message);
}

// RangeError: valor fora do intervalo permitido.
try {
  const lista = new Array(-1); // tamanho negativo é inválido -> RangeError
  console.log(lista.length);
} catch (erro) {
  console.log('Tipo do erro:', erro.name, '->', erro.message);
}

// ReferenceError: usar uma variável que não existe.
try {
  // eslint-disable-next-line no-undef -- o ReferenceError aqui é o objeto da lição
  variavelQueNaoExiste; // nunca foi declarada -> ReferenceError
} catch (erro) {
  console.log('Tipo do erro:', erro.name, '->', erro.message);
}

// ===== 3. LENDO O STACK TRACE COM CALMA =====
// O stack trace parece assustador, mas ele se lê DE CIMA PARA BAIXO:
// a primeira linha diz O QUE deu errado; as linhas seguintes dizem ONDE.

function funcaoInterna() {
  throw new Error('Erro proposital para estudar o stack trace');
}
function funcaoMeio() {
  funcaoInterna(); // quem chama entra no rastro
}
function funcaoExterna() {
  funcaoMeio();
}

try {
  funcaoExterna();
} catch (erro) {
  console.log('\n--- Stack trace (leia de cima para baixo) ---');
  console.log(erro.stack.split('\n').slice(0, 4).join('\n'));
  // Dica: procure o primeiro arquivo SEU na lista — o bug costuma estar ali.
}

// ===== 4. ERROS CUSTOMIZADOS: class extends Error =====
// Criar seu próprio tipo de erro dá NOMES aos problemas do seu domínio,
// permitindo tratá-los de forma específica no catch.

class SaldoInsuficienteError extends Error {
  constructor(saldo, valorSolicitado) {
    // `super` repassa a mensagem para o construtor de Error.
    super(`Saldo de R$ ${saldo.toFixed(2)} insuficiente para sacar R$ ${valorSolicitado.toFixed(2)}`);
    this.name = 'SaldoInsuficienteError'; // nome legível nos logs
    this.saldo = saldo;
    this.valorSolicitado = valorSolicitado;
    // Ajuste do prototype necessario ao estender Error (herança de classes nativas).
    Object.setPrototypeOf(this, SaldoInsuficienteError.prototype);
  }
}

function sacar(saldo, valor) {
  if (valor > saldo) {
    throw new SaldoInsuficienteError(saldo, valor);
  }
  return saldo - valor;
}

const carteira = 50;

try {
  sacar(carteira, 100);
} catch (erro) {
  // Podemos verificar o TIPO do erro e reagir diferente para cada caso.
  if (erro instanceof SaldoInsuficienteError) {
    console.log('\nErro de negocio detectado!');
    console.log('Mensagem:', erro.message);
    console.log('Faltaram R$', (erro.valorSolicitado - erro.saldo).toFixed(2));
  } else {
    throw erro; // erro desconhecido: relança para não esconder o problema
  }
}

// ===== EXPERIMENTE =====
// 1. Remova o try/catch da seção 1 e veja o programa travar no throw.
// 2. Adicione uma classe SenhaFracaError e valide senhas menores que 8 caracteres.
// 3. Troque o `finally` da seção 1 por código depois do catch e compare os resultados.
