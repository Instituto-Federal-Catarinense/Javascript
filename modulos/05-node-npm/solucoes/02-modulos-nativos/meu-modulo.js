/** SOLUÇÃO-MODELO — 02-modulos-nativos (parte 1 de 2) | Enunciado: exercício 1 de ../02-modulos-nativos/exercicios.md | Uso: importado por app.js */
function saudacao(nome) {
  return `Olá, ${nome}! Bem-vindo ao Node.js!`;
}

// Exporta como objeto único — padrão do curso para facilitar desestruturação.
module.exports = { saudacao };
