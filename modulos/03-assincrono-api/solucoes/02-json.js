/**
 * SOLUÇÃO-MODELO — JSON
 * Enunciado resolvido: exercícios 1 e 2 de modulos/03-assincrono-api/02-json/exercicios.md
 * Execute: node modulos/03-assincrono-api/solucoes/02-json.js
 */

// EXERCÍCIO 1 — Boletim em texto
const boletim = { aluno: 'Helena', serie: '9o ano', notas: { matematica: 8.5, historia: 7 } };

// Terceiro argumento do stringify = indentação legível para humanos;
// sem ele o texto sai numa linha só (formato ideal para transmissão).
const boletimTexto = JSON.stringify(boletim, null, 2);
console.log(boletimTexto);

// parse reconstrói objetos e arrays de verdade — dá para navegar normalmente.
const boletimReconstruido = JSON.parse(boletimTexto);
console.log(`Nota de Matemática: ${boletimReconstruido.notas.matematica}`);

// EXERCÍCIO 2 — Diário da turma
const turma = [
  { nome: 'Helena', nota: 8.5 },
  { nome: 'Igor', nota: 5.5 },
  { nome: 'Júlia', nota: 6 },
];

// Ida e volta completa: simula salvar num servidor/storage e reler depois.
const diariaTexto = JSON.stringify(turma);
const turmaLida = JSON.parse(diariaTexto);

const aprovados = turmaLida.filter((aluno) => aluno.nota >= 6).length;
console.log(`Aprovados: ${aprovados}`);

// Prova de preservação de tipos: a nota voltou como number, não como string.
turmaLida.forEach((aluno) => {
  console.log(`${aluno.nome}: nota ${aluno.nota} (${typeof aluno.nota})`);
});

// DISCUSSÃO:
// 1) JSON não carrega funções, undefined nem Date: datas viram strings ISO e
//    precisam de reviver (ou conversão manual) para voltar como Date.
// 2) JSON.parse de texto externo SEMPRE merece try/catch — payload truncado
//    lança SyntaxError capaz de derrubar o processo inteiro.
// 3) Chaves viram strings na serialização e propriedades não enumeráveis somem;
//    a ida e volta preserva tipos simples (string/number/boolean), mas não a
//    identidade de métodos nem símbolos.
