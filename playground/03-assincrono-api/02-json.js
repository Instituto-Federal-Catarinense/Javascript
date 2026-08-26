/**
 * ============================================================
 * PLAYGROUND — JSON: stringify, parse e armadilhas
 * ------------------------------------------------------------
 * Módulo: 03 — Assíncrono e API   |   Aula: modulos/03-assincrono-api/02-json/
 * Execute: node playground/03-assincrono-api/02-json.js
 * Código comentado para estudar, alterar e QUEBRAR à vontade.
 * ============================================================
 */

// ===== 1. JSON.STRINGIFY: objeto JavaScript -> texto JSON =====
// JSON é a "língua oficial" das APIs: todo dado enviado/recebido é TEXTO.

const aluno = {
  id: 1,
  nome: 'Ana',
  ativo: true,
  notas: [7.5, 8, 9],
  endereco: { cidade: 'Sao Jose', uf: 'SC' },
};

const jsonTexto = JSON.stringify(aluno);
console.log('JSON compacto :', jsonTexto);

// O 3o argumento formata com indentação (bom para leitura humana).
console.log('JSON bonito   :\n', JSON.stringify(aluno, null, 2));

// ===== 2. JSON.PARSE: texto JSON -> objeto JavaScript =====
// Atenção: se o texto for inválido, parse LANÇA ERRO. Sempre use try/catch!

const deVolta = JSON.parse(jsonTexto);
console.log('\nParse funcionou?', deVolta.nome === aluno.nome && deVolta.endereco.cidade === aluno.endereco.cidade);

try {
  JSON.parse('{nome: "Ana"}'); // chaves sem aspas: JSON invalido!
} catch (erro) {
  console.log('JSON invalido gera erro:', erro.name, '->', erro.message.slice(0, 40) + '...');
}

// ===== 3. REPLACER E REVIVER: filtros e transformações =====
// O replacer (2o argumento do stringify) filtra ou transforma valores.

const comReplacer = JSON.stringify(aluno, ['id', 'nome']); // só estas chaves saem
console.log('\nReplacer (lista de chaves):', comReplacer);

// Replacer como função: recebe (chave, valor) e decide o que devolver.
const semNotas = JSON.stringify(aluno, (chave, valor) => (chave === 'notas' ? undefined : valor));
console.log('Replacer (funcao)        :', semNotas); // "notas" sumiu

// O reviver (2o argumento do parse) transforma dados NA LEITURA.
// Exemplo clássico: reviver datas que vieram como string ISO.
const eventoJson = JSON.stringify({ nome: 'Hackathon', data: new Date('2026-09-10') });
const evento = JSON.parse(eventoJson, (chave, valor) => {
  // Chave vazia ('') significa "o objeto raiz inteiro".
  return chave === 'data' ? new Date(valor) : valor;
});
console.log('\nReviver converteu para Date?', evento.data instanceof Date, '->', evento.data.toDateString());

// ===== 4. ARMADILHA 1: undefined, funções e símbolos desaparecem =====

const armadilha = {
  ok: 1,
  indefinido: undefined, // some no stringify!
  funcao: () => {},      // some também!
};
console.log('\nArmadilha undefined/funcao:', JSON.stringify(armadilha));

// Em ARRAYS, undefined vira null (posições são preservadas):
console.log('Array com undefined     :', JSON.stringify([1, undefined, 3]));

// ===== 5. ARMADILHA 2: Date vira string (e não volta sozinha) =====
const comData = { agora: new Date() };
console.log('\nDate original  :', comData.agora instanceof Date);
const reconvertido = JSON.parse(JSON.stringify(comData));
console.log('Apos round-trip:', reconvertido.agora instanceof Date, '(virou string!)');

// ===== 6. ARMADILHA 3: referências circuais QUEBRAM o stringify =====
const a = { nome: 'a' };
const b = { nome: 'b', parceiro: a };
a.parceiro = b; // a aponta para b e b aponta para a: ciclo!

try {
  JSON.stringify(a);
} catch (erro) {
  console.log('\nCiclo detectado:', erro.message); // "Converting circular structure to JSON"
}
// Solução comum: remover o ciclo com replacer antes de serializar.
const seguro = JSON.stringify(a, (chave, valor) => (chave === 'parceiro' ? '[ciclo]' : valor));
console.log('Ciclo contornado com replacer:', seguro);

// ===== 7. DEEP COPY VIA JSON: útil, mas limitado =====
// JSON.parse(JSON.stringify(obj)) cria uma cópia profunda SEM referências.
const original = { titulo: 'Livro', tags: ['js', 'json'] };
const copia = JSON.parse(JSON.stringify(original));

copia.tags.push('node'); // alterar a copia...
console.log('\nOriginal intacto?', original.tags.join(', '), '| Copia:', copia.tags.join(', '));

// LIMITAÇÕES dessa cópia: perde undefined, funções, Date (vira string),
// Map/Set (viram {}), Infinity/NaN (viram null). Para casos sérios,
// prefira structuredClone() (nativo desde o Node 17).
const clonagem = structuredClone({ d: new Date(), m: new Map([['k', 1]]) });
console.log('structuredClone preserva Date?', clonagem.d instanceof Date, 'e Map?', clonagem.m instanceof Map);

// ===== EXPERIMENTE =====
// 1. Adicione um campo `criadoEm: new Date()` no objeto aluno e observe o stringify.
// 2. Escreva um reviver que converta strings "dd/mm/aaaa" em objetos Date no parse.
// 3. Tente fazer deep copy de um objeto com Map via JSON e confirme o que se perde.
