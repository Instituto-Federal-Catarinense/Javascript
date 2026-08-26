# Quiz — Módulo 01: Fundamentos

Responda sem consultar o material. Depois confira o gabarito comentado no fim.

## Parte 1 — Múltipla escolha

**Q1.** Qual declaração cria uma variável de escopo de bloco que NÃO pode ser reatribuída?

- a) `var`
- b) `let`
- c) `const`
- d) `static`

**Q2.** O que `typeof null` retorna?

- a) `"null"`
- b) `"undefined"`
- c) `"object"`
- d) `"boolean"`

**Q3.** Qual é o resultado da expressão `2 + "2"` em JavaScript?

- a) `4` (número)
- b) `"22"` (string)
- c) `NaN`
- d) Erro em tempo de execução

**Q4.** Qual laço garante que o bloco execute PELO MENOS uma vez, mesmo com a condição falsa desde o início?

- a) `for`
- b) `while`
- c) `do...while`
- d) `for...of`

## Parte 2 — Verdadeiro ou falso (justifique)

**Q5.** Uma variável declarada com `let` pode ser redeclarada dentro do mesmo escopo sem erro.

**Q6.** Arrays em JavaScript são um tipo especial de objeto.

**Q7.** O operador `===` compara valor e tipo, enquanto `==` compara apenas valor após conversão.

## Parte 3 — Analise o código

**Q8.**

```js
let x = 5;
{
  let x = 10;
  console.log(x);
}
console.log(x);
```

O que imprime no console?

**Q9.**

```js
const frutas = ['maçã', 'banana', 'uva'];
frutas.shift();
console.log(frutas[1]);
```

O que imprime? Por que reatribuir `frutas = []` daria erro, mas `shift()` não?

**Q10.**

```js
function soma(a, b = 2) {
  return a + b;
}
console.log(soma(3));
console.log(soma(3, 4));
```

O que imprime no console, em ordem?

---

<details>
<summary><strong>Gabarito comentado</strong> (clique após responder)</summary>

**Q1 — c)** `const` tem escopo de bloco e exige inicialização; sua ligação (binding) não pode ser reatribuída. Atenção: objetos/arrays declarados com `const` ainda podem ter seu conteúdo mutado.

**Q2 — c)** `typeof null` retorna `"object"`. É um comportamento histórico da linguagem mantido por compatibilidade — um erro conhecido de design que nunca foi corrigido para não quebrar sites.

**Q3 — b)** O operador `+` com string converte o número para texto e concatena: `"22"`. Já `-`, `*` e `/` converteriam para número (`"22" - 2` seria `20`).

**Q4 — c)** No `do...while` o corpo executa primeiro e a condição é testada depois; logo, roda ao menos uma vez. Nos demais, se a condição começa falsa, o corpo nunca executa.

**Q5 — Falso.** Redeclarar `let` no mesmo escopo lança `SyntaxError: Identifier 'x' has already been declared`. Redeclaração só era permitida com `var`.

**Q6 — Verdadeiro.** `typeof [1,2,3]` retorna `"object"`; arrays são objetos cujas chaves são índices numéricos mais a propriedade `length`. Para distinguir, use `Array.isArray()`.

**Q7 — Verdadeiro.** `===` (igualdade estrita) não faz conversão de tipos; `==` (frouxa) converte os operandos antes de comparar, gerando resultados como `"5" == 5` ser `true` mas `"5" === 5` ser `false`.

**Q8 — Imprime `10` e depois `5`.** A primeira saída vem do `x` do bloco (escopo de bloco), a segunda do `x` externo. São variáveis independentes: a interna apenas "sombreia" a externa dentro das chaves.

**Q9 — Imprime `"uva"`.** Após `shift()` remover `'maçã'`, o array vira `['banana', 'uva']` e o índice `1` é `'uva'`. Reatribuir com `frutas = []` daria `TypeError` porque `const` impede reatribuição; `shift()` apenas MUTA o conteúdo, o que é permitido.

**Q10 — Imprime `5` e depois `7`.** Em `soma(3)` o parâmetro `b` usa o valor padrão `2` (`3 + 2 = 5`). Em `soma(3, 4)` o argumento `4` substitui o padrão (`3 + 4 = 7`).

</details>
