# Exercícios — Arrays

> **Como resolver:** crie os arquivos `exercicio-01.js`, `exercicio-02.js`... nesta mesma pasta,
> no seu fork ou na sua branch pessoal. Ao final do módulo compare com `../../solucoes/`.

## Antes de começar
- Releia o [README da aula](./README.md) e execute o exemplo com `node arrays.js`.
- Separe mentalmente os métodos que mutam o array original (`push`, `pop`, `sort`) dos que devolvem arrays novos (`map`, `filter`).

## Lista de exercícios

### 1) Carrinho da lojinha `[fácil]`
Comece com o carrinho `[12.5, 7.9, 23.0, 4.5]`. O cliente acrescenta um chocolate de R$ 3,20 e depois desiste do item mais caro (remova-o). Imprima a lista final, a quantidade de itens e o subtotal.

```
Itens: 4 | Subtotal: R$ 28.10
```

<details>
<summary>Dica</summary>

`push` entra no fim; para remover "o mais caro", localize o índice antes de decidir qual método de remoção usar — ou ordene uma cópia para descobrir o valor.
</details>

### 2) Promoção da semana `[fácil]`
Da lista de preços `[45.9, 15.5, 8.75, 32.0, 19.99, 5.2]`:
1. Filtre os produtos abaixo de R$ 20 (candidatos à promoção).
2. Gere um novo array aplicando 10% de desconto sobre esses candidatos.
3. Imprima as duas listas formatadas com duas casas decimais.

<details>
<summary>Dica</summary>

`filter` seleciona, `map` transforma — encadeie os dois.
</details>

### 3) Diagnóstico das vendas `[médio]`
Com as vendas diárias `[120, 85, 240, 60, 190]`, responda sem laços manuais:
1. Total da semana (`reduce`).
2. Primeira venda que passou de R$ 200 (`find`) e sua posição.
3. Alguma venda foi negativa? (`some`)
4. Todas as vendas ficaram acima de R$ 50? (`every`)

Imprima as quatro respostas em frases completas.

<details>
<summary>Dica</summary>

O `find` devolve o valor, não a posição; combine-o com `findIndex` ou localize antes com outro recurso visto na aula.
</details>

### 4) Ranking sem estragar o original `[médio]`
Ordene uma **cópia** das vendas em ordem decrescente mantendo o array original intacto (imprima os dois para provar). Em seguida, receba as vendas separadas por semana — `[[100, 90], [80], [70, 65, 55]]` — achate tudo em uma lista única e calcule a média geral.

<details>
<summary>Dica</summary>

Copie com spread antes do `sort`; o `flat` resolve o aninhamento das semanas.
</details>

### 5) Desafio integrador: fechamento do caixa `[desafiador]`
Receba as vendas do dia como objetos simples `{ produto, preco, pagamento }` (crie ao menos seis registros misturando `pix`, `cartao` e `dinheiro`, com um registro de teste com preço `0` que deve ser ignorado). Produza o relatório:
1. Filtre fora os registros inválidos (preço zero ou negativo).
2. Aplique 5% de desconto nas vendas por Pix (`map`).
3. Calcule o total arrecadado por forma de pagamento usando `reduce`.
4. Descubra a maior venda única e o produto correspondente.
5. Monte o pódio das três maiores vendas em um array novo, ordenado, sem alterar a lista original.
6. Proíbe-se laço manual: todo passo deve usar `map`, `filter`, `reduce`, `find`, `some`, `every`, `sort` ou `flat`.

Saída esperada (valores variam conforme seus dados):

```
Total: R$ 512.34 | Pix: R$ 180.50 | Cartao: R$ 220.84 | Dinheiro: R$ 111.00
Maior venda: Teclado - R$ 149.90
Podio: 149.9, 132.0, 98.7
```

<details>
<summary>Dica</summary>

Para o total por forma de pagamento, o acumulador do `reduce` pode ser um objeto começando em `{ pix: 0, cartao: 0, dinheiro: 0 }`.
</details>

## Critérios de aceite
- [ ] O código roda sem erros (`node exercicio-XX.js`)
- [ ] Usa `const`/`let` adequadamente (nunca `var`)
- [ ] Nomes de variáveis descritivos em português
- [ ] Nenhum `for` manual: todos os passos usam métodos funcionais de array
- [ ] O array original permanece intacto onde o enunciado pediu cópia (exercícios 4 e 5)
