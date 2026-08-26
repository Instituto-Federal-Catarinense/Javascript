/**
 * SOLUÇÃO-MODELO — Classes e POO
 * Enunciado resolvido: exercícios 1 e 2 de modulos/04-poo-js-moderno/01-classes-e-poo/exercicios.md
 * Execute: node modulos/04-poo-js-moderno/solucoes/01-classes-e-poo.js
 */

class Aluno {
  constructor(nome, matricula) {
    this.nome = nome;
    this.matricula = matricula;
    this.notas = []; // coleções nascem no constructor: cada instância tem a sua
    this._nota = null; // convenção: underline = "uso interno" do getter/setter
  }

  adicionarNota(valor) {
    this.notas.push(valor);
  }

  // EXERCÍCIO 2 — propriedade controlada
  // O setter valida ANTES de gravar; código externo não consegue burlar a regra
  // escrevendo direto em nota — só passa pelo setter ou acessa _nota por má-fé.
  set nota(valor) {
    if (valor < 0 || valor > 10) {
      throw new Error('Nota inválida');
    }
    this._nota = valor;
  }

  get nota() {
    return this._nota;
  }

  media() {
    if (this.notas.length === 0) return 0;
    const soma = this.notas.reduce((acumulado, nota) => acumulado + nota, 0);
    return soma / this.notas.length;
  }
}

// EXERCÍCIO 1 em ação: média de Ana com notas 8, 7 e 9 deve dar 8.
const ana = new Aluno('Ana', '2026-0001');
[8, 7, 9].forEach((nota) => ana.adicionarNota(nota));
console.log(`Média de ${ana.nome}: ${ana.media()}`);

// EXERCÍCIO 2 em ação: atribuição válida passa; inválida é capturada.
ana.nota = 9.5;
console.log(`Nota avulsa de Ana: ${ana.nota}`);

try {
  ana.nota = 15; // viola a regra -> Error('Nota inválida')
} catch (erro) {
  console.log(`Erro capturado: ${erro.message}`);
}
console.log(`Nota após tentativa inválida: ${ana.nota}`); // estado preservado

// DISCUSSÃO:
// 1) Underscore é convenção, não privacidade real: para esconder de verdade, use
//    campos #privados (#nota), suportados pelos engines modernos.
// 2) Erro comum: declarar arrays/objetos como campos da classe fora do constructor
//    e acabar compartilhando-os entre instâncias. Inicialize coleções sempre ali.
// 3) Lançar Error no setter cabe em invariantes (regras inegociáveis); alternativas
//    mais suaves devolvem false ou limitam o valor (clamp) — escolha conforme o
//    contrato que a equipe espera da classe.
