# Exercícios — Módulos no Node.js

> **Como resolver:** crie os arquivos `exercicio-01.js`, `exercicio-02.js`... nesta mesma pasta,
> no seu fork ou na sua branch pessoal. Ao final do módulo compare com `../../solucoes/`.

## Antes de começar
- Releia o [README da aula](./README.md) e refaça o par `meu-modulo.js` + `app.js` do exemplo.
- Revise `require`, `module.exports` e os módulos nativos `fs`, `http` e `path`.

## Lista de exercícios

### 1) Refaça o exemplo com seu nome `[fácil]`
Recrie o par do README: `meu-modulo.js` exporta `saudacao(nome)` devolvendo `"Olá, <nome>! Bem-vindo ao Node.js!"`, e `app.js` importa e imprime com seu próprio nome. Execute com `node app.js`.

<details>
<summary>Dica</summary>

No fim de `meu-modulo.js`: `module.exports = { saudacao };`
</details>

### 2) Módulo matemática `[fácil]`
Crie `matematica.js` exportando `soma`, `subtracao`, `multiplicacao` e `divisao` (esta última recusando divisor `0` com um `Error`). Em `app-matematica.js`, importe tudo de uma vez e imprima os quatro resultados para `10` e `2`.

<details>
<summary>Dica</summary>

Exporte como objeto único; depois desestruture no require: `const { soma } = require('./matematica');`
</details>

### 3) Caminhos com path `[médio]`
Usando o módulo nativo `path`, crie `caminhos.js` que monte e imprima:
- o caminho absoluto de `pasta/produtos.csv` a partir de `__dirname`;
- só a extensão de `"nota-fiscal.pdf"` (`extname`);
- o nome sem extensão de `"relatorio-final.docx"` (`basename` com segundo argumento).

<details>
<summary>Dica</summary>

Prefira sempre `path.join(__dirname, 'pasta', 'produtos.csv')` em vez de juntar strings com `/`.
</details>

### 4) Registro em arquivo com fs `[médio]`
Crie `log-eventos.js` que use o módulo nativo `fs` para gravar (anexando) a data/hora atual em `eventos.log`, e depois ler o arquivo inteiro imprimindo o conteúdo. Execute duas vezes seguidas: o log deve acumular duas linhas.

<details>
<summary>Dica</summary>

`fs.appendFileSync` anexa; `fs.readFileSync('eventos.log', 'utf8')` devolve texto pronto.
</details>

### 5) Execute e explique: o que sai do require `[médio]`
Crie `sondagem.js` que exporta uma função, uma constante e um objeto. Em `app-sondagem.js`, faça `console.log(require('./sondagem'))` e EXPLIQUE a saída: que tipo de valor o `require` devolve? O que aconteceria se `module.exports` fosse substituído por `exports.novaCoisa = ...` depois de já ter sido reatribuído?

<details>
<summary>Dica</summary>

O `require` devolve exatamente o objeto apontado por `module.exports`; misturar `exports.x = ...` com reatribuição costuma perder dados — teste se quiser provar.
</details>

### 6) Desafio integrador: estoque encapsulado `[desafiador]`
Crie o módulo `estoque.js` (loja) que mantém uma lista PRIVADA de produtos e expõe `adicionar(nome, quantidade)`, `retirar(nome, quantidade)` (recusa se faltar estoque), `listar()` e `valorTotal(precos)`. Escreva `app-estoque.js` que simula: entrada de 3 produtos, uma retirada válida, uma retirada inválida tratada com `try/catch` e a listagem final.

<details>
<summary>Dica</summary>

Declare o array ANTES do `module.exports`, dentro do escopo do módulo — cada `require` do mesmo arquivo compartilha esse estado.
</details>

## Critérios de aceite
- [ ] O código roda sem erros
- [ ] Nenhum exercício duplica funções copiadas entre arquivos — tudo passa por `require`
- [ ] A lista privada do desafio não pode ser alterada direto de `app-estoque.js`
