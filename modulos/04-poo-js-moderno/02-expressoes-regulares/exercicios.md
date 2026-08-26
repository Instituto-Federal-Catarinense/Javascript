# Exercícios — Expressões Regulares

> **Como resolver:** crie os arquivos `exercicio-01.js`, `exercicio-02.js`... nesta mesma pasta,
> no seu fork ou na sua branch pessoal. Ao final do módulo compare com `../../solucoes/`.

## Antes de começar
- Releia o [README da aula](./README.md) e execute os exemplos de `regex.js`.
- Revise as flags `g`, `i`, `m` e os métodos `test`, `match` e `replace`.

## Lista de exercícios

### 1) Telefone da clínica `[fácil]`
Valide telefones brasileiros no formato `(48) 99999-9999` com `test()`. A função `validarTelefone(texto)` deve retornar `true` para `"(47) 98888-1234"` e `false` para `"47 88881234"` ou `"(47) 28888-1234"`.

<details>
<summary>Dica</summary>

Escape os parênteses com `\(` e `\)`; use `\d{4,5}` para lidar com 4 ou 5 dígitos finais.
</details>

### 2) Hashtags do post da loja `[fácil]`
Extraia todas as hashtags de uma legenda de divulgação com `match()`:

```javascript
const legenda = 'Promoção! #promocao #fretegratis e mais #blackfriday2026 confira';
// saída esperada: ['#promocao', '#fretegratis', '#blackfriday2026']
```

<details>
<summary>Dica</summary>

Sem a flag `g`, `match` devolve só a primeira ocorrência.
</details>

### 3) CPF mascarado `[médio]`
Receba um CPF formatado como `"123.456.789-00"` e devolva `"***.***.789-00"` usando `replace()`. Aplique a mesma máscara a uma lista de pacientes e imprima todos.

<details>
<summary>Dica</summary>

Capture a parte final com grupos: `/^(\d{3})\.(\d{3})\.(\d{3})-(\d{2})$/` e monte a string só com os grupos desejados.
</details>

### 4) Filtro de palavras nas avaliações `[médio]`
A loja quer publicar avaliações censurando termos proibidos. Dada a lista `['ruim', 'horrível']`, substitua cada ocorrência por `'*'.repeat(n)`, ignorando maiúsculas/minúsculas:

```javascript
censurar('Produto RUIM, entrega horrível!'); // 'Produto ****, entrega ********!'
```

<details>
<summary>Dica</summary>

Passe uma função como segundo argumento de `replace` para calcular o tamanho da máscara; combine as palavras em um único padrão com `(ruim|horrível)` e flag `gi`.
</details>

### 5) Números da nota fiscal `[médio]`
De um texto de cupom fiscal, extraia com `match()` todos os valores monetários e calcule o total:

```javascript
const cupom = 'Analgésico R$ 12,50 | Curativo R$ 8,90 | Vitamina R$ 34,00';
// total esperado: 55.40
```

<details>
<summary>Dica</summary>

Padrão `R\$\s?\d+,\d{2}`; converta cada captura trocando a vírgula por ponto antes de usar `Number`.
</details>

### 6) Desafio integrador: validador de cadastro `[desafiador]`
Crie `validarCadastro(paciente)` que retorna um objeto `{ campo: mensagem }` com os erros encontrados: nome (2+ letras, permite acentos), email válido, telefone brasileiro e CEP (`00000-000`). Teste com três cadastros: um perfeito, um com tudo errado e um intermediário.

<details>
<summary>Dica</summary>

Monte um objeto de padrões `{ nome: /.../, email: /.../, ... }` e percorra com `for...in`, acumulando os campos reprovados por `test`.
</details>

## Critérios de aceite
- [ ] O código roda sem erros
- [ ] Todas as regex usam âncoras (`^`/`$`) quando o texto inteiro precisa casar
- [ ] Os casos de teste cobrem entrada válida E inválida para cada padrão
