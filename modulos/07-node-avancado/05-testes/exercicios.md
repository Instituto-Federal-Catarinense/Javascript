# Exercícios — Testes com Jest

> **Como resolver:** crie os arquivos `exercicio-01.js`, `exercicio-02.js`... nesta mesma pasta,
> no seu fork ou na sua branch pessoal. Ao final do módulo compare com `../../solucoes/`.

## Antes de começar
- Releia o [README da aula](./README.md) e rode o exemplo com `npm install` e `npm test`.
- Revise `describe`, `test`, `expect` e combinadores como `toBe`, `toEqual` e `toThrow`.

## Lista de exercícios

### 1) Cobrindo a soma existente `[fácil]`
Amplie `soma.test.js`: além do caso feliz, teste números negativos, decimais (`0.1 + 0.2`) e o caso `0 + 0`. Use `describe` para agrupar os cenários da função.

<details>
<summary>Dica</summary>

Para decimais prefira `toBeCloseTo(0.3)` — `toBe(0.3)` falha por causa do ponto flutuante.
</details>

### 2) Nova função: desconto da loja `[fácil]`
Crie `desconto.js` exportando `calcularDesconto(valor, percentual)` e escreva `desconto.test.js` com ao menos 3 testes: 10% sobre 200 (esperado 180), percentual 0 e valor 0. Rode `npm test` até todos passarem.

<details>
<summary>Dica</summary>

Lembre de exportar com `module.exports` e importar no arquivo de teste com `require`.
</details>

### 3) Testando exceções `[médio]`
Faça `calcularDesconto` lançar `Error` quando `percentual` for negativo ou maior que 100, e quando `valor` não for número. Cubra cada regra com um teste usando `expect(() => ...).toThrow('...')` com a mensagem exata.

<details>
<summary>Dica</summary>

Passe a mensagem como string ao `toThrow` para garantir que o erro certo foi lançado.
</details>

### 4) Execute e explique: toBe vs toEqual `[médio]`
Crie `explicacao.test.js` com estes dois testes, execute e EXPLIQUE em comentário por que um passa e o outro falha:

```javascript
test('toBe com objetos', () => {
  expect({ item: 'caneta', preco: 3 }).toBe({ item: 'caneta', preco: 3 });
});
test('toEqual com objetos', () => {
  expect({ item: 'caneta', preco: 3 }).toEqual({ item: 'caneta', preco: 3 });
});
```

Depois corrija o primeiro teste sem apagá-lo.

<details>
<summary>Dica</summary>

`toBe` compara com `Object.is` — identidade; `toEqual` compara estrutura recursivamente.
</details>

### 5) Agrupando com describe e beforeEach `[médio]`
Modele `carrinho.js` (loja): `criar()`, `adicionar(carrinho, produto, preco)` e `total(carrinho)`. Nos testes, monte um carrinho novo antes de CADA teste com `beforeEach` e cubra: adicionar 3 itens, adicionar o mesmo item duas vezes e total de carrinho vazio.

<details>
<summary>Dica</summary>

O `beforeEach` garante isolamento: nenhum teste pode depender do estado deixado pelo anterior.
</details>

### 6) Desafio integrador: TDD do módulo de entregas `[desafiador]`
Escreva PRIMEIRO os testes de `entrega.js` e só depois implemente a função `calcularFrete(pesoKg, distanciaKm, tipo)` com as regras: base R$ 5 + R$ 0,50/kg + R$ 0,10/km; tipo `expresso` multiplica por 1,5; peso acima de 20 kg adiciona taxa fixa de R$ 12; entradas inválidas (peso <= 0, distância negativa, tipo desconhecido) lançam erro. Meta: ao menos 8 testes verdes e rodar `npx jest --coverage` reportando 100% nas linhas do módulo.

<details>
<summary>Dica</summary>

Liste as regras como casos de teste antes de abrir o `entrega.js`; cada regra vira um `test`.
</details>

## Critérios de aceite
- [ ] O código roda sem erros
- [ ] `npm test` está verde e cada função nova tem arquivo `.test.js` correspondente
- [ ] Os casos de exceção são testados com `toThrow` (não apenas try/catch manual)
