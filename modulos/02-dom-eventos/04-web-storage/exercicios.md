# Exercícios — Web Storage

> **Como resolver:** estas aulas trabalham no navegador. Copie os arquivos `index.html` e `storage.js`
> desta pasta para uma nova subpasta `pratica/` (ficando `pratica/index.html` e `pratica/storage.js`)
> e faça todos os exercícios nessa cópia, no seu fork ou na sua branch pessoal.
> Ao final do módulo compare com `../../solucoes/`.

## Antes de começar
- Releia o [README da aula](./README.md).
- Abra o `index.html` original e teste o mini-app: adicionar itens à lista persistida em `'itens-estudo'`, limpar tudo e recarregar a página para conferir a persistência.
- Lembre que o storage guarda apenas strings: objetos passam por `JSON.stringify` / `JSON.parse`.

## Lista de exercícios

### 1) Lista de compras com semente `[fácil]`
Mude a chave para `'compras-casa'`. Na primeira execução (quando a chave não existe), popule a lista com três itens iniciais (`"Arroz"`, `"Café"`, `"Detergente"`). Recarregue a página e confirme que os dados sobreviveram; apague manualmente a chave pelo DevTools (aba Application) e confirme que a semente volta.

<details>
<summary>Dica</summary>

O teste "chave existe?" é comparar o resultado do `getItem` com `null`.
</details>

### 2) Remover item individual `[médio]`
Cada item da lista ganha um botão "x". Clicar nele remove só aquele item: leia o array salvo, filtre fora o escolhido e grave de volta. A lista na tela deve refletir o storage imediatamente.

<details>
<summary>Dica</summary>

Guarde o índice no elemento via atributo `data-*` ou identifique pelo texto; depois um filtro reconstrói o array.
</details>

### 3) Itens como objetos `[médio]`
Evolua o formato guardado: cada item vira `{ nome, comprado }` (booleano). Clicar no nome alterna o estado e aplica uma classe CSS riscada nos comprados. O contador no topo deve mostrar `"3 de 5 comprados"` — sempre calculado a partir do storage, nunca de variáveis soltas.

<details>
<summary>Dica</summary>

Comece com uma chave nova ou limpe a antiga, pois o formato mudou de string para objeto.
</details>

### 4) Rascunho que não se perde `[médio]`
O que está sendo digitado no campo de novo item deve ir para o `sessionStorage` a cada tecla. Ao reabrir a página (mesma aba), o rascunho volta preenchido. Ao salvar o item, o rascunho é apagado. Feche a aba, abra outra e confirme que ele sumiu.

<details>
<summary>Dica</summary>

Escute o evento `input` do campo; restaure logo no carregamento da página, antes de renderizar.
</details>

### 5) Desafio integrador: mercadinho persistido `[desafiador]`
Feche o módulo com um CRUD completo sobre o `localStorage`:
1. Adicionar item (nome + preço), marcar/desmarcar como comprado e remover individualmente — tudo sobrevivendo ao recarregar.
2. Botão "Limpar comprados" remove só os marcados; botão "Limpar tudo" pede confirmação antes de agir.
3. Rodapé calculado a cada renderização: total de itens, valor gasto (soma dos preços dos comprados) e valor restante.
4. Proteção contra dados corrompidos: se o JSON salvo não puder ser lido, comece com lista vazia em vez de quebrar a página (try/catch).
5. Nenhum dado vivo só na memória: toda operação passa por gravar e reler do storage.

Descreva em comentário o roteiro completo de testes, incluindo recarregar a página no meio das operações.

<details>
<summary>Dica</summary>

Centralize em duas funções — ler lista e gravar lista — e faça a tela inteira ser redesenhada por um único `renderizar()` chamado após qualquer mudança.
</details>

## Critérios de aceite
- [ ] A página abre no navegador sem erros no Console (F12)
- [ ] Usa `const`/`let` adequadamente (nunca `var`)
- [ ] Nomes de variáveis descritivos em português
- [ ] Todo objeto/array passa por serialização JSON ao gravar e desserialização ao ler
- [ ] Cada operação foi validada recarregando a página (persistência real comprovada)
