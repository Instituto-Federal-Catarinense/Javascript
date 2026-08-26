# Exercícios — Template Engines (EJS)

> **Como resolver:** crie os arquivos `exercicio-01.js`, `exercicio-02.js`... nesta mesma pasta,
> no seu fork ou na sua branch pessoal. Ao final do módulo compare com `../../solucoes/`.
> (Para aulas com app Express/Node: trabalhe numa CÓPIA da pasta chamada `pratica/`.)

## Antes de começar
- Releia o [README da aula](./README.md) e rode o exemplo com `npm install` e `npm start`; visite `/` e `/sobre`.
- Revise `<%= valor %>` (escapado), tags de código (`<% %>`), loops e `res.render`.

## Lista de exercícios

### 1) Rodapé com ano dinâmico `[fácil]`
Nas views existentes de `pratica/`, adicione um rodapé que exibe o ano atual vindo do servidor: passe `new Date().getFullYear()` no `res.render` e imprima com `<%= %>`. Nada de escrever o ano fixo no HTML.

<details>
<summary>Dica</summary>

O segundo argumento de `res.render('index', { ano })` vira variável disponível na view.
</details>

### 2) Partial de cabeçalho `[fácil]`
Crie `views/partials/header.ejs` com a barra de navegação e inclua-o nas páginas existentes (`/` e `/sobre`) usando `include`. Ao mudar o menu, as duas páginas devem refletir a alteração.

```html
<%- include('partials/header') %>
```

<details>
<summary>Dica</summary>

O caminho do `include` é relativo à pasta `views`.
</details>

### 3) Lista de produtos renderizada `[médio]`
Adicione a rota `GET /produtos` que passa um array de objetos `{ nome, preco }` para a view `produtos.ejs`, que percorre com loop EJS montando uma tabela. Para lista vazia, mostre `"Estoque vazio"` via condicional na própria view.

<details>
<summary>Dica</summary>

Dentro do EJS combine tag de código e interpolação:

```
<% produtos.forEach((p) => { %>
  <tr><td><%= p.nome %></td><td>R$ <%= p.preco.toFixed(2) %></td></tr>
<% }) %>
```
</details>

### 4) Navbar condicional de login `[médio]`
Passe `usuario` (objeto ou `null`) em todas as rotas. No partial do cabeçalho, use condicional EJS: logado mostra `"Olá, <nome> | Sair"`, anônimo mostra o link `"Entrar"`.

<details>
<summary>Dica</summary>

`<% if (usuario) { %> ... <% } else { %> ... <% } %>` funciona como JavaScript normal.
</details>

### 5) Execute e explique: formulário e escape `[médio]`
Crie a rota `GET /cadastro-news` (formulário com campo `nome`) e `POST /cadastro-news` que re-renderiza a página cumprimentando o visitante com `<%= nome %>`. Rode e submeta o valor `<script>alert('oi')</script>`; depois COPIE o HTML gerado e EXPLIQUE por que nada foi executado. O que mudaria se a view usasse `<%- nome %>`?

<details>
<summary>Dica</summary>

`<%= %>` escapa HTML; `<%- %>` injeta cru — só use quando você confia no conteúdo.
</details>

### 6) Desafio integrador: página do produto `[desafiador]`
Monte `GET /produtos/:id` buscando num array local a view `produto.ejs`: título, preço formatado, descrição e botão "Adicionar ao carrinho" apenas se `usuario && usuario.logado`. Produto inexistente deve renderizar uma página `nao-encontrado.ejs` com status 404. Tudo reaproveitando os partials dos exercícios anteriores.

<details>
<summary>Dica</summary>

`req.params.id` chega como string; converta antes de comparar. Status fora do padrão: `res.status(404).render(...)`.
</details>

## Critérios de aceite
- [ ] O código roda sem erros
- [ ] Todo dado dinâmico é impresso com `<%= %>` (nenhum `<%- %>` com dados de usuário)
- [ ] Cabeçalho e rodapé estão centralizados em partials incluídos pelas demais views
