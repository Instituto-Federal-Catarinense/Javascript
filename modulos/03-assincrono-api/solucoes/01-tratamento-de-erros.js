/**
 * SOLUÇÃO-MODELO — Tratamento de Erros
 * Enunciado resolvido: exercícios 1 e 2 de modulos/03-assincrono-api/01-tratamento-de-erros/exercicios.md
 * Execute: node modulos/03-assincrono-api/solucoes/01-tratamento-de-erros.js
 */

// EXERCÍCIO 1 — Débito sem saldo
// A função LANÇA em vez de devolver código de erro: interrompe o fluxo na hora
// e deixa para quem chama decidir o que mostrar ao usuário dentro do catch.
function debitar(saldoCartao, tarifa) {
  if (saldoCartao < tarifa) {
    throw new Error('Saldo insuficiente para a passagem');
  }
  return saldoCartao - tarifa;
}

try {
  console.log(`Débito ok. Novo saldo: R$ ${debitar(10, 4.5).toFixed(2)}`);
  debitar(3.0, 4.5); // lança aqui; as linhas seguintes do try não executam
  console.log('Esta linha nunca roda após a falha');
} catch (erro) {
  console.log(`Operação recusada: ${erro.message}`);
}

// EXERCÍCIO 2 — Recarga inválida
// RangeError comunica erro de FAIXA de valor — mais específico que Error genérico.
// Validações separadas dão mensagens precisas sobre qual regra foi violada.
function recarregar(valor) {
  if (typeof valor !== 'number' || Number.isNaN(valor)) {
    throw new RangeError('A recarga precisa ser um número válido');
  }
  if (valor <= 0) {
    throw new RangeError('A recarga precisa ser positiva');
  }
  if (valor % 5 !== 0) {
    throw new RangeError('A recarga precisa ser múltipla de 5');
  }
  return valor;
}

const tentativasDeRecarga = [20, 0, 7];
tentativasDeRecarga.forEach((valor) => {
  try { // cada chamada em seu próprio bloco: uma falha não cancela as demais
    console.log(`Recarga de R$ ${recarregar(valor).toFixed(2)} efetuada`);
  } catch (erro) {
    console.log(`Recusa de ${valor}: ${erro.message}`);
  }
});

// DISCUSSÃO:
// 1) Nenhum catch pode ficar vazio: capturar sem tratar esconde bugs. Se precisar
//    ignorar conscientemente, registre ao menos um comentário ou log.
// 2) Erro comum: usar exceções para fluxo normal (ex.: "saldo baixo" é caso de
//    negócio esperado). Exceções servem para situações que impedem continuar.
// 3) Variação didática da lista: criar SaldoInsuficienteError extends Error permite
//    diferenciar no catch com instanceof e dar conselhos específicos ao usuário.
