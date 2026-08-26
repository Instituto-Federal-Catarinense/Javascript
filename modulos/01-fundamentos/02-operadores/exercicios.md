# Exercícios — Operadores

> **Como resolver:** crie os arquivos `exercicio-01.js`, `exercicio-02.js`... nesta mesma pasta,
> no seu fork ou na sua branch pessoal. Ao final do módulo compare com `../../solucoes/`.

## Antes de começar
- Releia o [README da aula](./README.md) e execute o exemplo com `node operadores.js`.
- Preste atenção na diferença entre `==` e `===` e no comportamento de `&&`, `||` e `??`.

## Lista de exercícios

### 1) Troco da compra `[fácil]`
Numa papelaria, um cliente leva 4 cadernos de R$ 3,75 e paga com uma nota de R$ 20. Calcule o total e o troco usando apenas variáveis e operadores aritméticos. Saída esperada:

```
Total: R$ 15.00 | Troco: R$ 5.00
```

<details>
<summary>Dica</summary>

Multiplicação primeiro, subtração depois. Para formatar com dois decimais use `.toFixed(2)`.
</details>

### 2) Frete grátis `[fácil]`
A lojinha dá frete grátis quando a compra passa de R$ 150 **e** o cliente é do programa fidelidade. Com os valores `valorCompra = 162.30`, `ehFidelidade = true`, monte a expressão lógica completa e imprima o resultado com um ternário: `"Frete grátis aplicado"` ou `"Frete de R$ 12.90"`.

<details>
<summary>Dica</summary>

O ternário avalia a expressão `&&` inteira antes de escolher o texto.
</details>

### 3) Desconto escalonado `[médio]`
Regras do caixa: compras acima de R$ 300 têm 20% de desconto; acima de R$ 100, 10%; abaixo disso, nada. Para `valor = 340`, calcule o valor final respeitando a precedência de operadores (use parênteses para deixar a intenção clara). Além disso, aceite um cupom opcional: `cupomExtra = null` deve virar `0` sem usar `if`, graças ao `??`.

Saída esperada:

```
Valor final com desconto: R$ 272.00
Cupom extra: R$ 0.00
```

<details>
<summary>Dica</summary>

`percentual / 100 * valor` e `valor * percentual / 100` dão o mesmo resultado — escolha uma ordem e documente com parênteses.
</details>

### 4) Encaixe nas caixas `[médio]`
Uma loja embala bombons em caixas de 6 unidades. Para um pedido de 47 bombons, calcule usando operadores aritméticos quantas caixas completas serão usadas, quantos bombons ficam fora de caixa e quantas caixas seriam necessárias se não pudesse sobrar unidade solta. Imprima as três respostas.

<details>
<summary>Dica</summary>

Divisão inteira pode ser obtida descartando a parte decimal; o `%` entrega diretamente o que sobra.
</details>

### 5) Desafio integrador: fechamento rápido do caixa `[desafiador]`
Simule o fechamento de três vendas do dia, cada uma definida por variáveis (`valor`, `formaPagamento`, `ehFidelidade`). Para cada venda:
- Aplique 5% de desconto se for pagamento no Pix (`===`) e o cliente for fidelidade (`&&`).
- Some o total do dia acumulando em uma variável.
- Verifique com operadores lógicos (sem `if`) se todas as vendas foram acima de R$ 50 e guarde o resultado booleano.
- Ao final, decomponha o total em cédulas de 50, 20, 10 e 5 usando divisão inteira e resto (`%`), imprimindo quantas de cada.

Nenhuma decisão pode usar `if` ou ternário além dos estritamente necessários para imprimir textos — priorize expressões com `===`, `&&`, `||` e `??`.

<details>
<summary>Dica</summary>

Para "sem if", guarde o booleano em uma variável e imprima-o direto. Na decomposição em cédulas, atualize o restante a cada etapa com `%`.
</details>

## Critérios de aceite
- [ ] O código roda sem erros (`node exercicio-XX.js`)
- [ ] Usa `const`/`let` adequadamente (nunca `var`)
- [ ] Nomes de variáveis descritivos em português
- [ ] Todas as comparações usam `===`/`!==` (nenhum `==` solto)
- [ ] `??` é usado pelo menos uma vez para valor padrão e `&&`/`||` aparecem em expressões reais de decisão
