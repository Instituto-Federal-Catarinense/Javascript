# Exercícios — Strings

> **Como resolver:** crie os arquivos `exercicio-01.js`, `exercicio-02.js`... nesta mesma pasta,
> no seu fork ou na sua branch pessoal. Ao final do módulo compare com `../../solucoes/`.

## Antes de começar
- Releia o [README da aula](./README.md) e execute o exemplo com `node strings.js`.
- Lembre-se: strings são imutáveis — todo método devolve um texto novo.

## Lista de exercícios

### 1) Crachá do estudante `[fácil]`
A secretaria recebeu o nome digitado com espaços sobrando e tudo em minúsculas: `"   joana ribeiro   "`. Limpe os espaços, gere a versão em maiúsculas para o crachá e as iniciais para a ficha. Saída esperada:

```
Crachá: JOANA RIBEIRO
Iniciais: JR
```

<details>
<summary>Dica</summary>

`trim()` limpa as pontas; as iniciais saem do primeiro caractere de cada palavra depois de um `split(' ')`.
</details>

### 2) E-mail institucional `[fácil]`
Gere o e-mail institucional a partir do nome completo `"Pedro Luiz Almeida"`: primeira palavra + ponto + última palavra, tudo minúsculo, seguido de `@escola.edu.br`. No final, valide com `endsWith` se o e-mail gerado termina no domínio correto e imprima `"E-mail válido"` ou `"Domínio inválido"`.

<details>
<summary>Dica</summary>

Divida o nome em palavras e use os índices `0` e `palavras.length - 1`.
</details>

### 3) Lista de chamada invertida `[médio]`
A lista chegou no formato `"Sobrenome, Nomes"`. Para cada um dos registros abaixo, transforme em `"Nomes Sobrenome"`:

```
"Silva, Ana Beatriz"  ->  "Ana Beatriz Silva"
"Oliveira Costa, Rui" ->  "Rui Oliveira Costa"
```

Depois conte quantas palavras tem cada nome completo (sobrenome incluído) e imprima o total por aluno.

<details>
<summary>Dica</summary>

`split(', ')` separa as duas partes; um segundo `split(' ')` conta as palavras.
</details>

### 4) Mural sem gírias `[médio]`
O mural da escola filtra termos proibidos. Dado o recado `"Cara, essa prova foi braba, mas a monitora é demais"` e uma lista de termos censurados (`braba`, `cara`), substitua cada termo por três asteriscos, mantendo o resto intacto. Imprima o recado original, o filtrado e quantas substituições ocorreram.

<details>
<summary>Dica</summary>

Encadeie dois `replaceAll`; para contar, compare o comprimento antes e depois ou verifique com `includes` antes de substituir.
</details>

### 5) Desafio integrador: identificador de curso `[desafiador]`
Receba o nome de um curso, por exemplo `"Fundamentos de Banco de Dados Aplicados"`, e produza:
1. A **sigla**: inicial maiúscula de cada palavra significativa, ignorando conectivos curtos como `de`, `da`, `e` (`FBD`).
2. O **código da turma**: sigla em minúsculas + hífen + ano + letra inicial do turno (`fbd2026-n` para o turno noturno).
3. Um **resumo** do nome com no máximo 20 caracteres: se precisar cortar, finalize com `...` — e nunca corte no meio de uma palavra (volte até o último espaço).
4. Uma busca com `includes` que responde se o curso aborda "Dados", imprimindo sim ou não.

Teste com pelo menos três cursos diferentes, incluindo um nome curtinho que não precise de reticências.

<details>
<summary>Dica</summary>

Para não cortar palavra ao meio, use `slice(0, 20)` e depois `lastIndexOf(' ')` para recuar até um limite seguro.
</details>

## Critérios de aceite
- [ ] O código roda sem erros (`node exercicio-XX.js`)
- [ ] Usa `const`/`let` adequadamente (nunca `var`)
- [ ] Nomes de variáveis descritivos em português
- [ ] Nenhum texto é alterado "na força": todos os resultados vêm dos métodos retornando novas strings
- [ ] Os casos de teste dos enunciados aparecem literalmente na saída do programa
