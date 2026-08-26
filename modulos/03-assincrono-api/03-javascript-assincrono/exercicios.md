# Exercícios — JavaScript Assíncrono

> **Como resolver:** crie os arquivos `exercicio-01.js`, `exercicio-02.js`... nesta mesma pasta,
> no seu fork ou na sua branch pessoal. Ao final do módulo compare com `../../solucoes/`.

## Antes de começar
- Releia o [README da aula](./README.md) e execute o exemplo com `node async.js`.
- Observe a ordem dos registros no Console: o código assíncrono não espera o anterior terminar.

## Lista de exercícios

### 1) Pedido prometido `[fácil]`
Crie `prepararPedido(item, segundos)` que devolve uma Promise resolvida após o tempo informado com a mensagem `"<item> pronto!"`. Usando `async/await`, sirva em sequência um `"suco"` (1 segundo) e um `"sanduiche"` (2 segundos), registrando o início e o fim de cada etapa:

```
Iniciando suco
Suco pronto!
...
Todos os pedidos entregues
```

<details>
<summary>Dica</summary>

Envolva tudo numa função `async` — só dentro dela o `await` é permitido.
</details>

### 2) Do callback para a Promise `[médio]`
O timer antigo da cozinha usa callback:

```javascript
function tocarAlarme(segundos, aoTerminar) {
  setTimeout(() => aoTerminar(`Alarme de ${segundos}s`), segundos * 1000);
}
```

Escreva `tocarAlarmeAsync(segundos)` com o mesmo comportamento, mas devolvendo uma Promise, sem alterar a função original. Demonstre as duas formas: primeiro com callback puro, depois com `await`.

<details>
<summary>Dica</summary>

O padrão é sempre o mesmo: `new Promise((resolve) => { ... resolve(valor) ... })` embrulhando o legado.
</details>

### 3) Cozinhando em paralelo `[médio]`
Três acompanhamentos levam tempos diferentes: arroz 2s, feijão 3s, farofa 1s. Meça com `console.time`/`console.timeEnd`:
1. O total preparando **em sequência** (um `await` por vez).
2. O total preparando **em paralelo** com `Promise.all`.

Depois troque um item para rejeitar (`"queimou"`) e observe no `catch` que o `Promise.all` falha inteiro. Comente qual estratégia usaria no serviço real e por quê.

<details>
<summary>Dica</summary>

Para rodar em paralelo, inicie as três Promises antes do `await`; aguardar dentro da chamada serializa tudo.
</details>

### 4) Forno contra o relógio `[médio]`
O delivery promete responder em até 3 segundos. Crie `comTimeout(promise, limiteMs)` que usa `Promise.race` entre a consulta real e uma Promise que rejeita estourando o prazo. Teste com uma resposta rápida (aceita) e outra lenta (4s), imprimindo `"Pedido confirmado"` ou `"Tempo esgotado, ligar para o cliente"`.

<details>
<summary>Dica</summary>

A Promise perdedora continua existindo; o race apenas decide quem entrega o resultado primeiro.
</details>

### 5) Desafio integrador: fechamento do serviço `[desafiador]`
Orquestre o fim de noite do restaurante:
1. Cinco pratos são preparados com tempos aleatórios entre 0,5s e 3s (`prepararPrato(nome)`).
2. Espere todos com `Promise.allSettled` e classifique: entregues vs. queimados.
3. Cada prato queimado recebe **uma** tentativa de refazer (mesma função); se queimar de novo, vai para a lista de cancelados com desconto no caixa.
4. Todo o serviço corre contra um timeout único de 6 segundos usando `Promise.race`: se estourar, registre encerramento forçado mas ainda assim imprima o relatório parcial disponível.
5. Relatório final em blocos `try/catch/finally` (o `finally` imprime `"Cozinha encerrada"`), tudo escrito com funções `async` e sem nenhum callback aninhado.

<details>
<summary>Dica</summary>

Guarde os resultados do `allSettled` filtrando por `status === 'fulfilled'`; a refazagem cabe num laço simples com `await` dentro da função orquestradora.
</details>

## Critérios de aceite
- [ ] O código roda sem erros (`node exercicio-XX.js`)
- [ ] Usa `const`/`let` adequadamente (nunca `var`)
- [ ] Nomes de variáveis descritivos em português
- [ ] Nenhum callback aninhado mais de um nível: fluxo principal escrito com `async/await`
- [ ] Toda Promise que pode rejeitar está coberta por tratamento de erro adequado
