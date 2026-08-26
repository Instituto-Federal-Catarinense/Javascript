/**
 * SOLUÇÃO-MODELO — Tipos de Dados
 * Enunciado resolvido: exercícios 1 e 2 de modulos/01-fundamentos/01-tipos-de-dados/exercicios.md
 * Execute: node modulos/01-fundamentos/solucoes/01-tipos-de-dados.js
 */

// EXERCÍCIO 1 — Ficha catalográfica
const titulo = 'O Cortiço';
const anoPublicacao = 1899;
const disponivel = true;
const isbn = '978-85-359-1066-5';
const localEstoque = null;

// Agrupar as constantes num objeto permite inspecioná-las num único laço,
// em vez de repetir typeof cinco vezes à mão.
const livro = { titulo, anoPublicacao, disponivel, isbn, localEstoque };

Object.keys(livro).forEach((chave) => {
  console.log(`${chave} -> ${typeof livro[chave]}`);
});
// Repare na saída: localEstoque -> object. typeof null devolve 'object' por um
// bug histórico dos primeiros dias da linguagem, mantido por compatibilidade.

// EXERCÍCIO 2 — Classificador de valores
function classificar(valor) {
  // O template literal imprime qualquer valor sem lançar erro,
  // inclusive undefined e null.
  return `O valor "${valor}" é do tipo ${typeof valor}`;
}

const valoresDeTeste = ['O Cortiço', 1899, true, undefined, null, NaN];
valoresDeTeste.forEach((valor) => console.log(classificar(valor)));

// Os dois resultados estranhos comentados:
// - null sai como 'object': mesmo bug histórico citado acima. Para diferenciar
//   null de objetos reais, o teste idiomático é valor === null.
// - NaN sai como 'number': NaN significa "Not a Number", mas tecnicamente é um
//   valor numérico inválido definido pelo padrão IEEE 754; aparece como resultado
//   de conversões fracassadas (Number('abc')). Cheque com Number.isNaN(valor).

// DISCUSSÃO:
// 1) Erro comum: confiar em typeof para validar entradas. typeof null === 'object'
//    e typeof NaN === 'number' mostram que ele descreve "como o motor enxerga",
//    não "o que faz sentido semanticamente".
// 2) Variação: Array.isArray é a única checagem confiável para arrays,
//    pois typeof [] também devolve 'object'.
// 3) Number('') devolve 0, não NaN — por isso validações de formulário precisam
//    tratar o texto vazio ANTES de converter para número.
