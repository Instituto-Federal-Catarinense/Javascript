# Exercícios — Introdução ao Node.js

> **Como resolver:** crie os arquivos `exercicio-01.js`, `exercicio-02.js`... nesta mesma pasta,
> no seu fork ou na sua branch pessoal. Ao final do módulo compare com `../../solucoes/`.

## Antes de começar
- Releia o [README da aula](./README.md), confirme `node -v` no terminal e execute o `hello-world.js` do exemplo.

## Lista de exercícios

### 1) Diagnóstico da instalação `[fácil]`
No terminal, execute `node -v` e `npm -v`. Salve em `exercicio-01.txt` (ou num comentário do JS) as duas versões obtidas e responda: qual linha você usaria para provar que o Node está instalado numa máquina nova?

<details>
<summary>Dica</summary>

Se algum comando falhar, o instalador não terminou corretamente — reinstale pelo site nodejs.org antes de seguir.
</details>

### 2) Olá, loja! `[fácil]`
Crie `ola-loja.js` que imprime três linhas: uma saudação, o nome do módulo atual (`module.exports` não é preciso; use apenas `console.log`) e o total de produtos de um array fixo, calculado com `.length`.

<details>
<summary>Dica</summary>

Rode com `node ola-loja.js`; todo código top-level executa na ordem em que aparece.
</details>

### 3) Saudação personalizada com process.argv `[médio]`
Crie `saudacao.js` que leia o nome passado no terminal:

```bash
node saudacao.js Maria
# Saída: Olá, Maria! Bem-vinda à nossa loja!
```

Sem argumento, use o padrão `"cliente"`. Teste os dois casos.

<details>
<summary>Dica</summary>

`process.argv` é um array; o nome chega na posição 2.
</details>

### 4) Execute e explique: o que há dentro de process.argv `[médio]`
Crie `argv.js` com uma única linha `console.log(process.argv)` e execute `node argv.js loja 42`. COPIE a saída e EXPLIQUE em comentários o que são as posições `0`, `1`, `2` e `3` do array.

<details>
<summary>Dica</summary>

As duas primeiras posições vêm sempre preenchidas pelo próprio Node, mesmo sem argumentos seus.
</details>

### 5) Ficha técnica do ambiente `[médio]`
Crie `ambiente.js` que imprima um relatório com `process.version`, `process.platform`, `process.cwd()` e o diretório do arquivo executado (`__dirname`). Rode o mesmo script de duas pastas diferentes e anote o que muda.

<details>
<summary>Dica</summary>

`process.cwd()` depende de ONDE você rodou o comando; `__dirname`, de onde o arquivo ESTÁ.
</details>

### 6) Desafio integrador: calculadora CLI `[desafiador]`
Crie `calculadora.js` que receba três argumentos — dois números e uma operação (`somar`, `subtrair`, `multiplicar`, `dividir`) — e imprima o resultado formatado:

```bash
node calculadora.js 8 2 dividir
# Saída: 8 / 2 = 4
```

Valide: argumentos faltantes, divisão por zero e operação desconhecida devem gerar mensagens claras (sem stack trace).

<details>
<summary>Dica</summary>

Guarde as operações em um objeto `{ somar: (a, b) => a + b, ... }` e consulte antes de calcular.
</details>

## Critérios de aceite
- [ ] O código roda sem erros
- [ ] Todos os scripts são executados via `node <arquivo>` (nenhum usa navegador)
- [ ] Os casos inválidos do desafio exibem mensagem amigável e encerram sem erro não tratado
