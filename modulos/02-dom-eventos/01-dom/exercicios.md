# Exercícios — DOM

> **Como resolver:** estas aulas trabalham no navegador. Copie os arquivos `index.html` e `dom.js`
> desta pasta para uma nova subpasta `pratica/` (ficando `pratica/index.html` e `pratica/dom.js`)
> e faça todos os exercícios nessa cópia, no seu fork ou na sua branch pessoal.
> Ao final do módulo compare com `../../solucoes/`.

## Antes de começar
- Releia o [README da aula](./README.md).
- Abra o `index.html` original desta pasta no navegador e observe o mini-app: um título, a lista de recados criada por `dom.js` e o botão que alterna a classe de destaque.
- Deixe o Console do navegador aberto (F12) durante todos os exercícios.

## Lista de exercícios

### 1) Botão limpar tudo `[fácil]`
Adicione ao HTML da sua cópia um botão "Limpar mural". Ao clicar nele, todos os itens `<li>` da lista de recados devem desaparecer de uma vez, sem recarregar a página.

<details>
<summary>Dica</summary>

Enquanto existir um `primeiroFilho`, remova-o — ou substitua o conteúdo interno da lista por vazio.
</details>

### 2) Contador de recados `[fácil]`
Inclua acima da lista um parágrafo com o texto `"X recados publicados"`. Sempre que um recado for adicionado ou removido, o número deve atualizar sozinho. Organize o código em uma função `atualizarContador()` chamada por todas as operações.

<details>
<summary>Dica</summary>

A quantidade vem de `lista.children.length`; o texto é montado com template literal.
</details>

### 3) Recado com autor e remoção individual `[médio]`
Cada novo item do mural deve exibir `"Texto do recado — Autor"` e um pequeno botão "x" na direita. Clicar no "x" remove apenas aquele item e dispara o contador novamente. Teste removendo o recado do meio da lista.

<details>
<summary>Dica</summary>

O botão nasce junto com o `<li>`; dentro do listener dele, `evento.target.closest('li')` aponta para o item certo.
</details>

### 4) Marcar como lido `[médio]`
Ao clicar diretamente no texto de um recado, ele deve alternar a classe `lido` (defina no CSS algo visual, como cor acinzentada). Antes de alternar, registre no Console se o item estava lido ou não usando `classList.contains`.

<details>
<summary>Dica</summary>

É o mesmo `toggle` usado pelo botão do exemplo, só que agora aplicado ao item e não ao título.
</details>

### 5) Desafio integrador: mural completo da turma `[desafiador]`
Una tudo em um mini-app redondo:
1. Um campo de texto e um botão "Publicar" adicionam recados; texto vazio ou só com espaços não publica (dê feedback visível, como uma borda vermelha no campo).
2. Cada recado guarda autor e horário da publicação, exibidos no formato `"por Ana às 14:32"`.
3. O contador mostra separadamente totais de recados publicados e marcados como lidos.
4. O botão "Limpar mural" pede confirmação antes de agir.
5. Nenhum clique pode disparar efeitos duplicados: revise se algum listener está sendo registrado duas vezes.

Teste cada interação clicando de verdade e anote num comentário no fim do `dom.js` o passo a passo do seu teste.

<details>
<summary>Dica</summary>

Centralize a criação de itens numa única função; assim o contador e o botão "x" nunca ficam esquecidos nos novos caminhos.
</details>

## Critérios de aceite
- [ ] A página abre no navegador sem erros no Console (F12)
- [ ] Usa `const`/`let` adequadamente (nunca `var`)
- [ ] Nomes de variáveis descritivos em português
- [ ] As seleções de elemento ficam em constantes no topo do script (sem `querySelector` repetido dentro dos handlers)
- [ ] Cada interação foi testada manualmente no navegador e o teste está descrito em comentário
