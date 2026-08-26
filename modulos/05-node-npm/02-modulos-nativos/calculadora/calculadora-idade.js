export function idade(nome, anoNasc, anoAtual) {
  const idadeCalculada = anoAtual - anoNasc;
  return `Olá, ${nome}! Em ${anoAtual} você terá ${idadeCalculada} anos!`;
}
