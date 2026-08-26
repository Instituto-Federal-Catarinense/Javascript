class Pessoa {
  constructor(nome) { this.nome = nome; }
  apresentar() { return `Meu nome é ${this.nome}.`; }
  static tipo() { return 'Pessoa'; }
}
class Estudante extends Pessoa {
  constructor(nome, curso) { super(nome); this.curso = curso; }
  get descricao() { return `${this.nome} estuda ${this.curso}.`; }
}
const estudante = new Estudante('Rui', 'JavaScript');
console.log(estudante.apresentar(), estudante.descricao, Pessoa.tipo());
module.exports = { Pessoa, Estudante };