const animal = { falar() { return `${this.nome} fez um som.`; } };
const cachorro = Object.create(animal);
cachorro.nome = 'Bidu';
console.log(cachorro.falar(), Object.hasOwn(cachorro, 'nome'), 'falar' in cachorro);
console.log(Object.getPrototypeOf(cachorro) === animal);
module.exports = { animal, cachorro };