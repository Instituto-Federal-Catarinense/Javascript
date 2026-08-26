# Exercícios — Tratamento de Erros

> **Como resolver:** crie os arquivos `exercicio-01.js`, `exercicio-02.js`... nesta mesma pasta,
> no seu fork ou na sua branch pessoal. Ao final do módulo compare com `../../solucoes/`.

## Antes de começar
- Releia o [README da aula](./README.md) e execute o exemplo com `node erros.js`.
- Observe o papel de cada bloco: `try` guarda o fluxo normal, `catch` reage à falha, `finally` garante a limpeza.

## Lista de exercícios

### 1) Débito sem saldo `[fácil]`
No sistema do cartão de transporte, a função `debitar(saldo, tarifa)` deve lançar um `Error` com mensagem `"Saldo insuficiente para a passagem"` quando o saldo não cobre a tarifa; caso contrário, devolve o novo saldo. Chame-a dentro de um `try/catch` com saldo baixo e imprima uma mensagem amigável no lugar do erro.

```
Operação recusada: Saldo insuficiente para a passagem
```

<details>
<summary>Dica</summary>

Lançar erro interrompe a função na hora; quem decide o que mostrar ao usuário é o `catch`.
</details>

### 2) Recarga inválida `[fácil]`
A função `recarregar(valor)` aceita apenas valores positivos múltiplos de 5. Para `0`, negativos ou não múltiplos, lance um `RangeError` descrevendo a regra violada. Faça três chamadas (uma válida e duas inválidas), cada uma em seu próprio `try/catch`, imprimindo o resultado ou o motivo da recusa.

<details>
<summary>Dica</summary>

O operador de resto verifica múltiplos; lembre de validar também se o valor recebido é número.
</details>

### 3) Erro customizado do bilhete `[médio]`
Crie a classe `SaldoInsuficienteError` herdando de `Error`. O construtor recebe cartão, saldo atual e tarifa e monta a mensagem completa (`"Cartão 5521: saldo 3.20 insuficiente para tarifa 4.50"`). No `catch`, use `instanceof` para dar um conselho diferente quando for esse erro específico (`"Procure um ponto de recarga"`) e outro genérico caso contrário.

<details>
<summary>Dica</summary>

Chame `super(mensagem)` no construtor antes de guardar os detalhes extras.
</details>

### 4) Catraca sempre fecha `[médio]`
Simule a passagem pelo catraca: registre `"Catraca liberada"`, execute o débito (que pode falhar) e, num bloco `finally`, registre `"Catraca travada novamente"`. Rode duas vezes — com passageiro válido e com saldo insuficiente — provando que a trava final acontece nos dois cenários.

<details>
<summary>Dica</summary>

O `finally` roda mesmo com `return` dentro do `try`; coloque neles apenas o que é inegociável.
</details>

### 5) Desafio integrador: lote de recargas `[desafiador]`
Um arquivo do sistema trouxe um lote de operações pendentes:

```javascript
const lote = [
  { cartao: '5521', tipo: 'recarga', valor: 20 },
  { cartao: '8804', tipo: 'debito', valor: 4.5 },
  { cartao: '1177', tipo: 'recarga', valor: -3 },
  { cartao: '5521', tipo: 'debito', valor: 9 },
];
```

Processando cada operação:
1. Mantenha os saldos por cartão numa estrutura simples, começando todos em `10.00`.
2. Recargas seguem as regras do exercício 2; débitos podem lançar `SaldoInsuficienteError`.
3. Cada item roda em seu próprio `try/catch/finally`, com o `finally` registrando o processamento do cartão.
4. Erros conhecidos (customizados e `RangeError`) alimentam relatórios separados de sucessos e falhas; qualquer outro tipo de erro deve ser relançado, abortando o lote inteiro.
5. Imprima ao final: saldos por cartão, total recarregado, lista de falhas com motivos e a frase de encerramento vinda de um último `finally`.

<details>
<summary>Dica</summary>

Relançar é só escrever `throw erro` dentro do `catch` — assim erros desconhecidos escapam para o chamador.
</details>

## Critérios de aceite
- [ ] O código roda sem erros (`node exercicio-XX.js`)
- [ ] Usa `const`/`let` adequadamente (nunca `var`)
- [ ] Nomes de variáveis descritivos em português
- [ ] Nenhum `catch` vazio: todo erro capturado gera mensagem útil
- [ ] A classe de erro customizada é identificada com `instanceof` e o fluxo muda conforme o tipo
