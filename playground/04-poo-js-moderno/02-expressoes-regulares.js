/**
 * ============================================================
 * PLAYGROUND — Expressões Regulares (Regex)
 * ------------------------------------------------------------
 * Módulo: 04 — POO JS Moderno   |   Aula: modulos/04-poo-js-moderno/02-expressoes-regulares/
 * Execute: node playground/04-poo-js-moderno/02-expressoes-regulares.js
 * Código comentado para estudar, alterar e QUEBRAR à vontade.
 * ============================================================
 */

// ===== 1. CONSTRUINDO UMA REGEX E USANDO FLAGS =====
// Duas formas equivalentes:
//   Literal : /padrao/flags        (preferida quando o padrão é fixo)
//   Objeto  : new RegExp('padrao', 'flags')  (quando o padrão vem dinâmico)

const padraoLiteral = /curso/gi; // flags: g = global, i = ignore case
const padraoObjeto = new RegExp('javascript', 'i');

const frase = 'Curso de JavaScript. O curso cobre JS moderno.';

console.log('test() responde sim/nao :', padraoObjeto.test('Adoro javascript')); // true
console.log('match com /gi           :', frase.match(padraoLiteral)); // todas as ocorrencias
console.log('replace global          :', frase.replace(/curso/gi, 'TREINAMENTO'));

// Sem a flag g, replace troca APENAS a primeira ocorrência:
console.log('replace sem flag g      :', frase.replace(/curso/i, 'TREINAMENTO'));

// ===== 2. GRUPOS DE CAPTURA: extraindo pedaços específicos =====
// Parênteses criam grupos; (?<nome>...) cria grupo NOMEADO.

const linhaLog = '[2026-08-25 14:32:07] ERRO: conexao recusada em porta 5432';
const regexLog = /\[(?<data>[\d-]+) (?<hora>[\d:]+)\] (?<nivel>\w+): (?<mensagem>.+)/;

const captura = regexLog.exec(linhaLog); // exec devolve detalhes ou null
if (captura) {
  console.log('\n--- Extraindo dados do log ---');
  console.log('Data     :', captura.groups.data);
  console.log('Hora     :', captura.groups.hora);
  console.log('Nivel    :', captura.groups.nivel);
  console.log('Mensagem :', captura.groups.mensagem);
}

// matchAll (com flag g!) percorre TODAS as correspondências com seus grupos:
const codigos = 'Refs: ABC-1234, xyz-9, QQQ-0007 e DEF-5678.';
const regexCodigo = /([A-Z]{3})-(\d{4})/g;
for (const m of codigos.matchAll(regexCodigo)) {
  console.log(`Codigo ${m[0]} -> letras: ${m[1]}, numeros: ${m[2]}`);
}

// ===== 3. VALIDAÇÃO DE EMAIL SIMPLES =====
// Regra didática: algo@algo.algo (sem espaços). Regex "perfeita" de email
// não existe — em produção prefira validar confirmando por email!

function emailValido(texto) {
  // ^ começo | [^\s@]+ sem espaco nem @ | @ literal | mesmo de antes | \. ponto | $ fim
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(texto);
}

console.log('\n--- Validacao de email ---');
['ana@ifsc.edu.br', 'joao.silva@gmail.com', 'sem-arroba.com', 'dois@@errado'].forEach((email) => {
  console.log(`  ${email.padEnd(24)} -> ${emailValido(email) ? 'valido' : 'INVALIDO'}`);
});

// ===== 4. VALIDAÇÃO DE CPF FORMATADO (só a MÁSCARA, não os dígitos) =====
// Formato oficial: 123.456.789-00

function cpfFormatadoValido(texto) {
  // \d = digito | {3} = tres vezes | \. ponto literal | - hifen literal
  return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(texto);
}

console.log('\n--- Validacao de CPF formatado ---');
['123.456.789-00', '12345678900', '123.456.78-900', 'abc.def.ghi-jk'].forEach((cpf) => {
  console.log(`  ${cpf.padEnd(16)} -> ${cpfFormatadoValido(cpf) ? 'formato ok' : 'FORMATO INVALIDO'}`);
});

// ===== 5. VALIDAÇÃO DE CEP E LIMPEZA COM REPLACE =====

function cepValido(texto) {
  return /^\d{5}-?\d{3}$/.test(texto); // hífen opcional (-? significa "zero ou um")
}

function limparMascara(texto) {
  // \D = tudo que NÃO é dígito; substituímos por vazio.
  return texto.replace(/\D/g, '');
}

console.log('\n--- CEP ---');
['89216-300', '89216300', '8921-6300'].forEach((cep) => {
  const valido = cepValido(cep);
  console.log(`  ${cep.padEnd(12)} -> ${valido ? 'valido' : 'invalido'}${valido ? `, so digitos: ${limparMascara(cep)}` : ''}`);
});

// ===== 6. REPLACE COM FUNÇÃO E REFERÊNCIA A GRUPOS =====
// $<nome> reutiliza grupos nomeados na própria substituição:
const dataIso = '2026-08-25';
const dataBr = dataIso.replace(/(?<ano>\d{4})-(?<mes>\d{2})-(?<dia>\d{2})/, '$<dia>/$<mes>/$<ano>');
console.log('\nISO -> BR:', dataIso, '->', dataBr);

// Replace aceitando função: cada casamento é processado por código.
const precos = 'Cafe R$5, Livro R$42';
const dobrado = precos.replace(/R\$(\d+)/g, (_, numero) => `R$${numero * 2}`);
console.log('Precos dobrados:', dobrado);

// ===== EXPERIMENTE =====
// 1. Escreva uma regex que valide telefone no formato (47) 99999-9999.
// 2. Extraia todas as palavras entre colchetes de um texto usando matchAll.
// 3. Modifique a regex de log para aceitar niveis INFO e WARN tambem.
