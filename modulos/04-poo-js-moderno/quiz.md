# Quiz — Módulo 04: POO e JS Moderno

Responda sem consultar o material. Depois confira o gabarito comentado no fim.

## Parte 1 — Múltipla escolha

**Q1.** A sintaxe de classes do JavaScript (`class`) é:

- a) Um sistema de classes totalmente novo, sem relação com funções
- b) Açúcar sintático sobre o modelo de protótipos da linguagem
- c) Igual às classes de Java, com herança múltipla
- d) Uma biblioteca que precisa ser importada

**Q2.** Qual palavra-chave cria uma instância de uma classe?

- a) `create`
- b) `instance`
- c) `new`
- d) `this`

**Q3.** Dentro de uma subclasse, `super()` serve para:

- a) Chamar métodos estáticos
- b) Executar o construtor da classe pai
- c) Criar uma nova instância
- d) Sobrescrever o método atual

**Q4.** Em regex, o metacaractere `\d` casa com:

- a) Qualquer caractere
- b) Um dígito de 0 a 9
- c) Uma letra minúscula
- d) Espaços em branco

## Parte 2 — Verdadeiro ou falso (justifique)

**Q5.** Instâncias criadas a partir da mesma classe compartilham seus métodos através do prototype, em vez de copiar os métodos para cada objeto.

**Q6.** Uma closure permite que uma função interna continue acessando variáveis do escopo externo mesmo depois de esse escopo ter terminado sua execução.

**Q7.** O `this` dentro de uma arrow function depende de quem chama a função no momento da execução.

## Parte 3 — Analise o código

**Q8.**

```js
class Animal {
  constructor(nome) { this.nome = nome; }
  falar() { return `${this.nome} faz som`; }
}
class Cachorro extends Animal {
  falar() { return `${this.nome} late`; }
}
const c = new Cachorro('Rex');
console.log(c.falar());
```

O que imprime? Qual método é executado?

**Q9.**

```js
function contador() {
  let n = 0;
  return () => ++n;
}
const inc = contador();
inc();
inc();
console.log(inc());
```

O que imprime? Por que `n` não zera entre as chamadas?

**Q10.**

```js
const tel = 'abc123';
console.log(/\d+/.test(tel));
console.log(tel.match(/\d+/)[0]);
```

O que imprime em cada linha?

---

<details>
<summary><strong>Gabarito comentado</strong> (clique após responder)</summary>

**Q1 — b)** Classes são açúcar sintático sobre protótipos: por trás, `new Cachorro()` cria um objeto cujo prototype aponta para `Cachorro.prototype`. Diferenças internas existem (métodos não-enumeráveis, `class` não sofre hoisting utilizável), mas o modelo de herança continua prototipal.

**Q2 — c)** `new` cria um objeto vazio, liga seu `[[Prototype]]` ao `prototype` da classe/função, executa o construtor com `this` apontando para o novo objeto e o retorna.

**Q3 — b)** `super()` invoca o construtor da classe pai — obrigatório antes de usar `this` quando a subclasse declara construtor próprio. `super.metodo()` também permite chamar a versão do pai de um método sobrescrito.

**Q4 — b)** `\d` equivale a `[0-9]`. Para qualquer caractere use `.`, para letras `[a-z]`, para espaços `\s`.

**Q5 — Verdadeiro.** Os métodos vivem em `Classe.prototype`; cada instância só guarda suas propriedades próprias. Quando você chama `obj.metodo()`, a busca sobe na cadeia de protótipos até encontrar o método — economia de memória e possibilidade de adicionar comportamento depois.

**Q6 — Verdadeiro.** É exatamente essa a definição: a função interna mantém uma referência ao ambiente léxico externo, preservando variáveis como o `n` do exercício Q9 mesmo após `contador()` retornar.

**Q7 — Falso.** Arrow functions NÃO têm `this` próprio: ele é resolvido lexicalmente, herdando o `this` do escopo onde foram definidas. Funções normais têm `this` dinâmico, definido pela chamada.

**Q8 — Imprime `"Rex late"`.** O método executado é `Cachorro.falar()`: a busca na cadeia de protótipos encontra o método na própria subclasse ANTES de chegar ao pai (sobrescrita/override).

**Q9 — Imprime `3`.** Cada chamada executa `++n` sobre o MESMO `n`, capturado pela closure: 1, depois 2, depois 3. A variável persiste porque a arrow function retornada mantém referência ao escopo de `contador()`, que não é destruído enquanto `inc` existir.

**Q10 — Primeira linha: `true`; segunda: `"123"`.** `test` retorna boolean indicando se existe algum trecho casando com o padrão (há dígitos). `match` devolve o array de correspondências; a primeira é `'123'`, pois `\d+` captura a sequência contígua de dígitos.

</details>
