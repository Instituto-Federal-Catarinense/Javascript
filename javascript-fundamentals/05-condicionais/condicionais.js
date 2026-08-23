function avaliarNota(nota) {
  if (nota < 0 || nota > 10) return 'Nota inválida';
  if (nota >= 7) return 'Aprovado';
  if (nota >= 5) return 'Recuperação';
  return 'Reprovado';
}

const dia = 2;
let nomeDia;
switch (dia) {
  case 1: nomeDia = 'domingo'; break;
  case 2: nomeDia = 'segunda-feira'; break;
  default: nomeDia = 'outro dia';
}

console.log(avaliarNota(8), nomeDia, 18 >= 18 ? 'maior de idade' : 'menor de idade');
module.exports = { avaliarNota };