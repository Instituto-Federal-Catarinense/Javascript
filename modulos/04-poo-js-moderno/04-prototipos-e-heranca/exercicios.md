# Exercícios — Protótipos e Herança

> **Como resolver:** crie os arquivos `exercicio-01.js`, `exercicio-02.js`... nesta mesma pasta,
> no seu fork ou na sua branch pessoal. Ao final do módulo compare com `../../solucoes/`.

## Antes de começar
- Releia o [README da aula](./README.md) e execute os exemplos de `prototipos.js`.
- Revise `Object.create`, a cadeia de protótipos, `hasOwnProperty` e o operador `in`.

## Lista de exercícios

### 1) Protótipo de veículo da loja `[fácil]`
Crie `veiculoBase` com propriedades `rodas: 4` e método `descrever()`. Gere dois objetos com `Object.create(veiculoBase)`: uma moto (sobrescrevendo `rodas: 2`) e um caminhão. Chame `descrever()` nos três e observe quem usa qual valor.

<details>
<summary>Dica</summary>

O objeto criado pode passar suas próprias propriedades como segundo argumento de `Object.create` ou depois de criado.
</details>

### 2) Método compartilhado depois do fato `[fácil]`
Com os veículos do exercício 1 já criados, adicione `veiculoBase.buzinar = function () { ... }`. Mostre que a moto e o caminhão passam a buzinar imediatamente, sem nenhuma alteração neles.

<details>
<summary>Dica</summary>

A busca de propriedades sobe pela cadeia na hora da chamada — mudanças no protótipo alcançam objetos existentes.
</details>

### 3) Próprio ou herdado? `[médio]`
Dado o exemplar de biblioteca abaixo, percorra uma lista fixa de chaves (`'titulo'`, `'emprestar'`, `'toString'`, `'prateleira'`) e imprima para cada uma: existe com `in`? é própria com `hasOwnProperty`?

```javascript
const midiaBase = { emprestar() { return 'Empréstimo registrado'; } };
const livro = Object.create(midiaBase);
livro.titulo = 'Dom Casmurro';
```

Explique em comentário por que `toString` passa no teste do `in` mas não no `hasOwnProperty`.

<details>
<summary>Dica</summary>

`in` enxerga toda a cadeia (inclusive `Object.prototype`); `hasOwnProperty` olha só o objeto.
</details>

### 4) Cadeia de três níveis `[médio]`
Monte a cadeia `itemBiblioteca → livro → livroDidatico` usando `Object.create`, onde cada nível adiciona uma propriedade (`codigo`, `titulo`, `edicao`) e um método próprio. Depois:
- imprima `Object.getPrototypeOf` de cada nível;
- use `isPrototypeOf` para provar que `itemBiblioteca` está na cadeia de `livroDidatico`.

<details>
<summary>Dica</summary>

Encadeie: `const livro = Object.create(itemBiblioteca); const livroDidatico = Object.create(livro);`
</details>

### 5) Execute e explique `[médio]`
Execute o trecho e EXPLIQUE em comentários a diferença entre as duas contagens:

```javascript
const base = { visivel: true };
const derivado = Object.create(base);
derivado.novo = 42;

let totalForIn = 0;
for (const chave in derivado) totalForIn += 1;

const totalProprias = Object.keys(derivado).length;
console.log(totalForIn, totalProprias); // ? ?
```

<details>
<summary>Dica</summary>

`for...in` caminha pela cadeia de protótipos; `Object.keys` lista apenas propriedades próprias enumeráveis.
</details>

### 6) Desafio integrador: acervo sem classes `[desafiador]`
Reimplemente, só com protótipos (nada de `class`), o modelo da biblioteca: protótipo `pessoa` (nome, `apresentar()`), dele derivado `leitorePrototype` (matrícula, limite de 3 empréstimos com controle interno) e dele derivado `bibliotecarioPrototype` (que pode registrar empréstimos de qualquer leitor). Compare no final: recrie `Leitor` também com `class` e mostre que os dois objetos respondem aos mesmos métodos.

<details>
<summary>Dica</summary>

Use `Object.create` para ligar os protótipos e funções fábricas (`criarLeitor(nome)`) para criar instâncias.
</details>

## Critérios de aceite
- [ ] O código roda sem erros
- [ ] Nenhum exercício usa `class` nos itens 1 a 5
- [ ] As respostas sobre `hasOwnProperty` vs `in` estão justificadas em comentários
