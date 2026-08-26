# Exercícios — WebSockets (Socket.io)

> **Como resolver:** crie os arquivos `exercicio-01.js`, `exercicio-02.js`... nesta mesma pasta,
> no seu fork ou na sua branch pessoal. Ao final do módulo compare com `../../solucoes/`.
> (Para aulas com app Express/Node: trabalhe numa CÓPIA da pasta chamada `pratica/`.)

## Antes de começar
- Releia o [README da aula](./README.md) e rode o exemplo com `npm install` e `npm start`, abrindo a página em DUAS abas.
- Revise os eventos customizados (`io.emit` vs `socket.emit` vs `socket.broadcast.emit`) e salas.

## Lista de exercícios

### 1) Contador de conexões `[fácil]`
No servidor, mantenha um contador incrementado em `io.on('connection')` e decrementado em `on('disconnect')`. Emita `usuarios-online` para TODOS sempre que mudar; no cliente, mostre `"3 online"` no cabeçalho do chat. Abra e feche abas para validar.

<details>
<summary>Dica</summary>

Cada aba aberta é um socket novo; o evento `disconnect` dispara ao fechar ou recarregar.
</details>

### 2) Execute e explique: três formas de emitir `[fácil]`
Adicione temporariamente no servidor, dentro de `io.on('connection')`, três linhas — `io.emit('x', 1)`, `socket.broadcast.emit('x', 2)` e `socket.emit('x', 3)` — escutando `'x'` no cliente com log. Abra duas abas, COPIE os logs e EXPLIQUE qual aba recebeu quais números e por quê. Remova as linhas depois.

<details>
<summary>Dica</summary>

`io.emit` alcança todo mundo inclusive quem disparou; `broadcast` pula o socket atual.
</details>

### 3) Evento novo: "está digitando" `[médio]`
Implemente o evento `digitando`: o cliente emite enquanto o usuário digita (com debounce), o servidor repassa via broadcast como `digitando { usuario }`, e o cliente mostra `"Bruna está digitando..."` que some após 2 segundos sem novos eventos.

```javascript
// cliente
socket.emit('digitando');
// servidor
socket.broadcast.emit('digitando', { usuario });
```

<details>
<summary>Dica</summary>

No cliente use `setTimeout` reiniciado a cada tecla para limpar o aviso; no servidor nada precisa ser guardado.
</details>

### 4) Salas de conversa `[médio]`
Adicione a tela inicial pedindo um tópico (`suporte`, `vendas`, `geral`) e entre o usuário via `socket.join(topico)`. As mensagens passam a circular SÓ dentro da sala usando `io.to(sala).emit(...)`. Mostre no log do servidor quem entrou em qual sala.

<details>
<summary>Dica</summary>

Guarde `sala` e `usuario` no próprio objeto socket (`socket.data`) para usar nos handlers seguintes.
</details>

### 5) Histórico em memória `[médio]`
Guarde as últimas 50 mensagens de cada sala num objeto `{ sala: [] }`. Quando alguém entrar (após o join), envie só para ele o evento `historico` com as mensagens existentes. Teste com duas abas: mande mensagem numa, recarregue e confirme que o histórico reaparece.

<details>
<summary>Dica</summary>

Depois do `join`, `socket.emit('historico', historico[sala])`; limite com `slice(-50)` ao gravar.
</details>

### 6) Desafio integrador: chat de delivery completo `[desafiador]`
Junte tudo num chat cliente–loja: escolha de sala por pedido, contador de online por SALA (não global), indicador de digitação, histórico persistido em memória e o evento novo `pedido-status` que a "loja" dispara simulando mudança de status (`recebido → preparando → saiu para entrega`) refletindo num selo visual do cliente. Documente no fim do `app.js` a lista completa de eventos criados com direção (cliente→servidor / servidor→cliente).

<details>
<summary>Dica</summary>

Comece listando a tabela de eventos ANTES de codificar — evita misturar nomes como `mensagem` e `nova-mensagem`.
</details>

## Critérios de aceite
- [ ] O código roda sem erros
- [ ] Mensagens e eventos respeitam o escopo da sala (uma aba não vê a sala alheia)
- [ ] A tabela de eventos do desafio cobre todos os canais usados pelo cliente
