# Exercícios — Laços de Repetição

> **Como resolver:** crie os arquivos `exercicio-01.js`, `exercicio-02.js`... nesta mesma pasta,
> no seu fork ou na sua branch pessoal. Ao final do módulo compare com `../../solucoes/`.

## Antes de começar
- Releia o [README da aula](./README.md) e execute o exemplo com `node lacos.js`.
- Observe quando cada formato brilha: contagem (`for`), condição aberta (`while`), primeira execução garantida (`do...while`), valores (`for...of`) e chaves (`for...in`).

## Lista de exercícios

### 1) Multa por atraso `[fácil]`
Um livro atrasado gera multa de R$ 0,50 por dia. Com um `while`, acumule a multa dia a dia durante os 9 dias de atraso e imprima o valor acumulado ao final:

```
Dia 9: multa acumulada de R$ 4.50
```

<details>
<summary>Dica</summary>

Um contador cresce até atingir 9; o acumulador soma 0.50 a cada volta.
</details>

### 2) Estante numerada `[fácil]`
A biblioteca tem prateleiras numeradas de 1 a 12. Com um laço `for`, imprima cada número de prateleira, mas **pule** as prateleiras reservadas (múltiplos de 3) usando `continue`, e interrompa a listagem com `break` se chegar à prateleira 11 (área de manutenção).

<details>
<summary>Dica</summary>

O teste de múltiplo usa o operador de resto; o `break` precisa virar uma condição dentro do laço.
</details>

### 3) Busca na estante `[médio]`
Dada a lista de títulos abaixo, percorra-a com `for...of` até encontrar `"O Cortiço"`. A cada título conferido, imprima `"Conferindo: <título>"`; ao achar, imprima `"Livro encontrado na posição X"` e pare a busca.

```javascript
const estante = ['Dom Casmurro', 'Iracema', 'O Cortiço', 'Vidas Secas', 'Capitães da Areia'];
```

Ao final, imprima quantos títulos foram conferidos antes da parada.

<details>
<summary>Dica</summary>

Guarde o índice em uma variável externa ao laço, incrementando a cada iteração — `for...of` não entrega a posição sozinho.
</details>

### 4) Inventário por seção `[médio]`
O acervo está resumido no objeto abaixo. Com `for...in`, imprima uma linha por seção no formato `ficcao: 12 livros`, e depois um total geral somando os valores.

```javascript
const acervo = { ficcao: 12, didatico: 30, revistas: 8, raro: 2 };
```

<details>
<summary>Dica</summary>

Em cada volta do `for...in`, a variável guarda a chave; o valor vem de `acervo[chave]`.
</details>

### 5) Desafio integrador: caixa do balcão `[desafiador]`
Cinco pessoas estão na fila para devolver livros, representadas por objetos simples `{ nome, diasAtraso }` dentro de um array (use os dados que quiser, incluindo uma pessoa sem atraso). Processe a fila na ordem:
1. Quem tem atraso paga R$ 0,50 por dia — acumule no caixa do dia.
2. Quem não tem atraso é dispensado com mensagem própria (use `continue`).
3. O caixa tem limite de R$ 5,00: se ultrapassar, feche o atendimento imediatamente (`break`) e registre quem ficou na fila.
4. Use pelo menos dois formatos de laço diferentes (por exemplo, `for...of` para a fila e `for...in` para exibir o resumo por pessoa).
5. Imprima o fechamento: total arrecadado, quantidade de isentos atendidos e nomes remanescentes na fila.

<details>
<summary>Dica</summary>

Antes de somar, verifique se a multa desta pessoa estoura o limite — ou some e compare depois, escolhendo onde colocar o `break`.
</details>

## Critérios de aceite
- [ ] O código roda sem erros (`node exercicio-XX.js`)
- [ ] Usa `const`/`let` adequadamente (nunca `var`)
- [ ] Nomes de variáveis descritivos em português
- [ ] Cada formato de laço foi usado onde faz sentido (nada de `for...in` sobre array)
- [ ] `continue` e `break` aparecem nos exercícios 2 e 5 exatamente nos pontos pedidos
