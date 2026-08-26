/**
 * ============================================================
 * PLAYGROUND — Condicionais
 * ------------------------------------------------------------
 * Módulo: 01 — Fundamentos   |   Aula: modulos/01-fundamentos/05-condicionais/
 * Execute: node playground/01-fundamentos/05-condicionais.js
 * Código comentado para estudar, alterar e QUEBRAR à vontade.
 * Errar aqui faz parte do método!
 * ============================================================
 */

// ===== 1. IF / ELSE IF / ELSE: O CAMINHO DA DECISÃO =====
const idade = 17;

if (idade >= 18) {
  // Executa só quando a condição é verdadeira.
  console.log('Pode tirar carteira de motorista.');
} else if (idade >= 16) {
  // Testado apenas se a condição anterior FALHOU.
  console.log('Pode votar, mas não dirigir.');
} else {
  // Cai aqui quando nenhuma condição acima foi verdadeira.
  console.log('Ainda menor de idade.');
}

// A ordem importa: as condições são testadas de CIMA para BAIXO,
// e a primeira verdadeira vence (as demais são ignoradas).

// ===== 2. TRUTHINESS: TUDO TEM UM VALOR LÓGICO =====
// Em um if, QUALQUER valor é convertido para true ou false.
// São "falsy" APENAS estes seis: false, 0, '', null, undefined e NaN.

const valoresFalsy = [false, 0, '', null, undefined, NaN];
valoresFalsy.forEach((valor) => {
  // A dupla negação (!!) converte qualquer valor em booleano "puro".
  console.log(`!!${String(valor)} →`, !!valor);
});

// Todo o resto é "truthy", inclusive coisas estranhas:
console.log("!!'0' →", !!'0');      // true: string NÃO vazia (mesmo contendo zero!)
console.log('!![] →', !![]);        // true: array vazio é truthy (pegadinha!)
console.log('!!{} →', !!{});        // true: objeto vazio também

// Uso prático: testar se usuário digitou algo.
const apelido = '';
if (!apelido) {
  console.log('Apelido vazio: usando "Anônimo".');
}

// ===== 3. CONDIÇÕES COMPOSTAS COM && E || =====
const nota = 8;
const frequencia = 90;

// && exige TODAS as condições; || basta UMA delas.
if (nota >= 6 && frequencia >= 75) {
  console.log('Aprovado por nota e frequência.');
}

if (nota < 6 || frequencia < 75) {
  console.log('Em recuperação.');
} else {
  console.log('Sem pendências.');
}

// ===== 4. SWITCH: QUANDO COMPARO UMA VARIÁVEL A VALORES FIXOS =====
const diaSemana = 3;

switch (diaSemana) {
case 1:
  console.log('Domingo');
  break; // break IMPEDE o código de "escorrer" para o case seguinte
case 2:
  console.log('Segunda');
  break;
case 3:
  console.log('Terça'); // cai aqui, pois diaSemana === 3
  break;
default:
  // default roda quando NENHUM case combina (é o "else" do switch).
  console.log('Dia inválido');
}

// Sem o break, a execução CONTINUA nos cases abaixo (fall-through).
// Isso pode ser útil de propósito: cases "agrupados".
const fruta = 'maçã';
switch (fruta) {
case 'maçã':
case 'pera': // sem break: maçã e pera caem no MESMO bloco
  console.log(fruta, 'é uma fruta doce.');
  break;
case 'limão':
  console.log(fruta, 'é azeda.');
  break;
}

// Atenção: switch usa comparação ESTRICTA (===). '3' não combina com 3.

// ===== 5. ENCADEAMENTO PLANO: EARLY RETURN EM FUNÇÕES =====
// Aninhar muitos ifs dentro de ifs dificulta a leitura ("pirâmide da dor").
// Solução: trate os casos inválidos PRIMEIRO e saia cedo da função.

function classificarNota(valor) {
  if (typeof valor !== 'number' || Number.isNaN(valor)) {
    return 'Nota inválida'; // sai na hora: nada abaixo é executado
  }
  if (valor < 0 || valor > 10) {
    return 'Fora do intervalo';
  }
  if (valor >= 9) return 'Excelente';
  if (valor >= 7) return 'Bom';
  if (valor >= 6) return 'Suficiente';
  return 'Insuficiente';
}

console.log(classificarNota(9.5)); // Excelente
console.log(classificarNota(11));  // Fora do intervalo
console.log(classificarNota('x')); // Nota inválida

// ===== EXPERIMENTE =====
// 1) Remova um break do switch dos dias e observe o fall-through acontecendo.
// 2) Troque `const apelido = ''` por ' ' (espaço): o if continua pegando? Por quê?
// 3) Reescreva classificarNota com if/else aninhados e compare a legibilidade.

module.exports = { classificarNota };
