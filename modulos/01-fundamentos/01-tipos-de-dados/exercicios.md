# Exercícios — Tipos de Dados

> **Como resolver:** crie os arquivos `exercicio-01.js`, `exercicio-02.js`... nesta mesma pasta,
> no seu fork ou na sua branch pessoal. Ao final do módulo compare com `../../solucoes/`.

## Antes de começar
- Releia o [README da aula](./README.md) e execute o exemplo com `node tipos.js`.
- Rode também o playground correspondente a partir da raiz do repositório: `node playground/01-fundamentos/01-tipos-de-dados.js`.

## Lista de exercícios

### 1) Ficha catalográfica `[fácil]`
Crie constantes para um livro: `titulo` (string), `anoPublicacao` (number), `disponivel` (boolean), `isbn` (string) e `localEstoque` com valor `null`. Imprima uma linha por propriedade no formato:

```
titulo -> string
anoPublicacao -> number
...
```

<details>
<summary>Dica</summary>

Use `typeof` em cada constante. Repare que a linha do `null` vai surpreender você.
</details>

### 2) Classificador de valores `[fácil]`
Crie uma função `classificar(valor)` que devolve uma frase descrevendo o tipo recebido (use `typeof`). Teste-a com: `"O Cortiço"`, `1899`, `true`, `undefined`, `null` e `NaN`. Em comentário, explique os dois resultados estranhos (`null` e `NaN`).

<details>
<summary>Dica</summary>

`typeof null` retorna `'object'` por um erro histórico da linguagem, e `NaN` é tecnicamente um `number`.
</details>

### 3) Exemplares informados como texto `[médio]`
A biblioteca recebe a quantidade de exemplares digitada num formulário, sempre como texto: `"3"` e `"12"`. Converta as duas para número, some e imprima `"Total de exemplares: 15"`. Depois simule um campo vazio `""`: converta, verifique com `Number.isNaN` e imprima `"Quantidade inválida"` em vez de somar.

<details>
<summary>Dica</summary>

`Number("")` não lança erro — devolve `0`. Por isso a checagem precisa ir além de "converteu ou não".
</details>

### 4) Etiqueta de lombada `[médio]`
Monte, com template literals, a etiqueta colada no verso do livro usando variáveis separadas:

```
=== LOMBADA ===
Obra: Memórias Póstumas de Brás Cubas (1881)
Prateleira: B7 | Disponível: sim
```

O valor de disponível deve partir de um booleano convertido para texto ("sim"/"não"), sem usar `if`.

<details>
<summary>Dica</summary>

Um ternário resolve: `disponivel ? 'sim' : 'não'`.
</details>

### 5) Desafio integrador: conversão do acervo antigo `[desafiador]`
O sistema antigo guardava cada livro como campos soltos de texto:

```javascript
const tituloTexto = 'Dom Casmurro';
const anoTexto = '1899';
const disponivelTexto = 'true';
```

Para cada um dos três livros abaixo, converta os campos para o tipo correto (string, number, boolean) e valide com `typeof` antes de montar a ficha:
1. `Dom Casmurro`, ano `'1899'`, disponibilidade `'true'`
2. `Iracema`, ano `'1869'`, disponibilidade `'false'`
3. `Vidas Secas`, ano `'1938'`, disponibilidade `'talvez'` (inválido!)

Imprima as três fichas formatadas; para o terceiro livro, a disponibilidade deve sair como `"indefinida"` porque o texto não representa um booleano conhecido. Termine exibindo um resumo com quantos livros foram convertidos com sucesso.

<details>
<summary>Dica</summary>

`Number(anoTexto)` cuida do ano; para o booleano, compare o texto com `'true'` e trate qualquer outra resposta como indefinida.
</details>

## Critérios de aceite
- [ ] O código roda sem erros (`node exercicio-XX.js`)
- [ ] Usa `const`/`let` adequadamente (nunca `var`)
- [ ] Nomes de variáveis descritivos em português
- [ ] Toda conversão de tipo é explícita (`Number()`, `String()` ou comparação), sem depender de coerção implícita
- [ ] As peculiaridades de `typeof null` e `NaN` estão comentadas no exercício 2
