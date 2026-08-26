/**
 * SOLUÇÃO-MODELO — Expressões Regulares
 * Enunciado resolvido: exercícios 1 e 2 de modulos/04-poo-js-moderno/02-expressoes-regulares/exercicios.md
 * Execute: node modulos/04-poo-js-moderno/solucoes/02-expressoes-regulares.js
 */

// EXERCÍCIO 1 — Telefone da clínica
// Âncoras ^ $ garantem o texto INTEIRO casando; \( e \) escapam os parênteses
// literais; o 9 inicial diferencia celular (formato do enunciado) de fixo —
// é por isso que "(47) 28888-1234" é rejeitado.
const TELEFONE_CELULAR = /^\(\d{2}\) 9\d{4}-\d{4}$/;

function validarTelefone(texto) {
  return TELEFONE_CELULAR.test(texto);
}

const telefonesDeTeste = ['(47) 98888-1234', '47 88881234', '(47) 28888-1234'];
telefonesDeTeste.forEach((telefone) => {
  console.log(`${telefone} -> ${validarTelefone(telefone)}`);
});

// EXERCÍCIO 2 — Hashtags do post da loja
const legenda = 'Promoção! #promocao #fretegratis e mais #blackfriday2026 confira';

// A flag g coleta TODAS as ocorrências; sem ela, match devolve só a primeira.
const hashtags = legenda.match(/#\w+/g);
console.log(hashtags); // ['#promocao', '#fretegratis', '#blackfriday2026']

// DISCUSSÃO:
// 1) Regex literal é objeto: criá-lo como constante evita recompilar o padrão a
//    cada chamada e facilita testar/reaproveitar.
// 2) \w cobre [A-Za-z0-9_], SEM acentos: '#promoção' casaria só até '#promo'.
//    Para Unicode, use /#[\p{L}\d]+/gu (a flag u é obrigatória).
// 3) Cuidado com flag g em regex usadas com test(): lastIndex avança entre
//    chamadas e resultados oscilam entre true/false. Prefira match/exec frescos
//    ou recrie a expressão a cada uso.
