/**
 * ============================================================
 * PLAYGROUND — Protótipos e Herança
 * ------------------------------------------------------------
 * Módulo: 04 — POO JS Moderno   |   Aula: modulos/04-poo-js-moderno/04-prototipos-e-heranca/
 * Execute: node playground/04-poo-js-moderno/04-prototipos-e-heranca.js
 * Código comentado para estudar, alterar e QUEBRAR à vontade.
 *
 * Ideia central: em JavaScript, objetos herdam DE OUTROS OBJETOS
 * através de uma cadeia de protótipos — classes são apenas
 * uma sintaxe bonita por cima desse mecanismo.
 * ============================================================
 */

// ===== 1. TODO OBJETO TEM UM PROTOTYPE =====
// __proto__ é o link secreto que todo objeto carrega.
// Quando buscamos uma propriedade, o motor segue esse link até achar
// (ou chegar em null, fim da cadeia).

const animal = { respira: true };

const cachorro = {
  late: true,
  // __proto__ conecta cachorro -> animal (herança de objeto):
  __proto__: animal,
};

console.log('cachorro.late   :', cachorro.late);   // próprio do cachorro
console.log('cachorro.respira:', cachorro.respira); // HERDADO via prototype!

// Para inspecionar, prefira Object.getPrototypeOf (API moderna e segura):
console.log('Pai do cachorro e animal?', Object.getPrototypeOf(cachorro) === animal);
console.log('Pai do animal e Object.prototype?', Object.getPrototypeOf(animal) === Object.prototype);
console.log('Fim da cadeia: Object.prototype.__proto__ =', Object.getPrototypeOf(Object.prototype));

// ===== 2. A CADEIA SENDO PERCORRIDA PASSO A PASSO =====
// Vamos montar 3 elos: gato -> felino -> serVivo.

const serVivo = { crescer() { return 'crescendo...'; } };
const felino = { miar() { return 'miau'; }, __proto__: serVivo };
const gato = { nome: 'Frajola', __proto__: felino };

// hasOwnProperty revela se a propriedade é PRÓPRIA ou herdada:
console.log('\ngato.nome proprio?      ', Object.hasOwn(gato, 'nome'));      // true
console.log('gato.miar proprio?      ', Object.hasOwn(gato, 'miar'));      // false
console.log('gato.miar existe?       ', typeof gato.miar === 'function');  // true (herdou)
console.log('gato.crescer funciona?  ', gato.crescer());                   // subiu 2 niveis!

// ===== 3. OBJECT.CREATE: herdar sem constructor =====
// Object.create(proto) cria objeto novo cujo prototype é o informado.

const veiculoBase = {
  mover() {
    return `${this.tipo || 'veiculo'} se movendo`;
  },
};

const bicicleta = Object.create(veiculoBase);
bicicleta.tipo = 'bicicleta';
bicicleta.pedalar = function () { return `pedalando a ${this.tipo}`; };

console.log('\nObject.create:');
console.log(' ', bicicleta.mover());    // método herdado usando this da instancia
console.log(' ', bicicleta.pedalar()); // método próprio

// Prototype também serve para COMPARTILHAR dados entre instâncias
// (economia de memória: um único método para milhares de objetos).

// ===== 4. COMO AS CLASSES USAM PROTOTYPES POR BAIXO DOS PANOS =====
// `class` NÃO cria um sistema novo: métodos declarados na classe são
// gravados em Classe.prototype, e `new` conecta a instância a ele.

class Pessoa {
  cumprimentar() {
    return `Ola, sou ${this.nome}`;
  }
}

const ana = new Pessoa();
ana.nome = 'Ana';

// Prova 1: o método mora no prototype, não no objeto:
console.log('\nClasses sao prototipos disfarcados:');
console.log('  ana.cumprimentar proprio?       ', Object.hasOwn(ana, 'cumprimentar')); // false
console.log('  mora em Pessoa.prototype?       ', typeof Pessoa.prototype.cumprimentar === 'function');

// Prova 2: o prototype da instância É o prototype da classe:
console.log('  proto de ana === Pessoa.prototype?', Object.getPrototypeOf(ana) === Pessoa.prototype);

// Prova 3: herança de classes segue a mesma cadeia de objetos:
class Aluno extends Pessoa {}
const bruno = new Aluno();
bruno.nome = 'Bruno';
console.log('  bruno herda de Aluno.prototype? ', Object.getPrototypeOf(bruno) === Aluno.prototype);
console.log('  Aluno.prototype herda Pessoa?   ', Object.getPrototypeOf(Aluno.prototype) === Pessoa.prototype);
console.log('  bruno.cumprimentar():', bruno.cumprimentar());

// Resumo visual da cadeia do bruno:
// bruno -> Aluno.prototype -> Pessoa.prototype -> Object.prototype -> null

// ===== EXPERIMENTE =====
// 1. Imprima toda a cadeia do gato num while usando Object.getPrototypeOf.
// 2. Adicione um metodo direto em Pessoa.prototype apos criar ana e veja ela "ganhar".
// 3. Use Object.create(null) e descubra por que o objeto perde ate o toString.
