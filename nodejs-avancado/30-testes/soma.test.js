const soma = require('./soma');
describe('soma', () => { test('soma dois números', () => { expect(soma(2, 3)).toBe(5); }); test('aceita negativos', () => { expect(soma(-2, 3)).toBe(1); }); });