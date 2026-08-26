# Exercícios — Fetch API

> **Como resolver:** crie os arquivos `exercicio-01.js`, `exercicio-02.js`... nesta mesma pasta,
> no seu fork ou na sua branch pessoal. Ao final do módulo compare com `../../solucoes/`.
> Os exercícios usam a API pública `https://jsonplaceholder.typicode.com` e rodam com
> `node exercicio-XX.js` (Node 18 ou superior) — ou no navegador, se preferir.

## Antes de começar
- Releia o [README da aula](./README.md) e abra o `index.html` desta pasta para rever o exemplo de GET e POST.
- Confirme o ritual do fetch: checar `resposta.ok`, ler o corpo com `.json()`, enviar corpo serializado com o cabeçalho `Content-Type: application/json`.

## Lista de exercícios

### 1) Diretório da equipe `[fácil]`
Faça um `GET https://jsonplaceholder.typicode.com/users` e imprima uma linha por pessoa: `"Leanne Graham <Sincere@april.biz>"` (nome + e-mail). Se `resposta.ok` for falso, lance um erro com o status que será capturado pelo seu tratamento.

```
1. Leanne Graham - Sincere@april.biz
2. Ervin Howell ...
```

<details>
<summary>Dica</summary>

O `fetch` só rejeita em falha de rede; status 404 ou 500 precisam da sua verificação manual.
</details>

### 2) Ficha individual `[fácil]`
Busque a usuária de id `7` (`GET /users/7`) e mostre nome, cidade e o slogan da empresa (`company.catchPhrase`). Em seguida, repita a consulta para o id `999`, trate o 404 via `resposta.ok` e imprima `"Usuária não encontrada"` em vez de quebrar.

<details>
<summary>Dica</summary>

O JSONPlaceholder responde com corpo vazio no 404 — não tente ler `.json()` sem verificar antes.
</details>

### 3) Publicar o aviso da turma `[médio]`
Envie um `POST /posts` criando o aviso "Trabalho de campo adiado" com texto livre e `userId: 3`. Monte o corpo com `JSON.stringify`, inclua o cabeçalho correto, imprima o objeto devolvido e comente por que a API responde com id `101`.

```
Aviso publicado com o id 101
```

<details>
<summary>Dica</summary>

O JSONPlaceholder ecoa o que você enviou e simula a criação — nada é gravado de verdade.
</details>

### 4) Corrigir e aposentar `[médio]`
Em duas etapas sobre o post de id `1`:
1. `PUT /posts/1` trocando apenas o título por `"Comunicado revisado: feira de ciências"` (envie também os demais campos do post original, buscados antes).
2. `DELETE /posts/1` verificando que a resposta vem com status 200 mesmo sem corpo.

Imprima o estado antes, depois da edição e após a exclusão.

<details>
<summary>Dica</summary>

Busque o post primeiro com GET; o PUT substitui o recurso inteiro, então vale reaproveitar as propriedades existentes com spread.
</details>

### 5) Desafio integrador: mural escolar remoto `[desafiador]`
Construa um relatório completo em uma função assíncrona:
1. Busque usuários e posts **em paralelo** (`Promise.all` com dois fetches) e case cada post ao nome da autora/usuário pela chave `userId`.
2. Liste apenas os posts cujo título contém a palavra `"aut"` (busque insensível a maiúsculas), mostrando `"Título — por Nome"`.
3. Simule a rotina editorial: crie um novo post (POST), corrija o título dele (PUT usando o id devolvido) e o retire do ar (DELETE), imprimindo cada passo.
4. Proteja tudo: qualquer resposta não-ok lança erro com o status; o `catch` central resume quantas operações falharam; um `finally` encerra com `"Consulta encerrada"`.
5. Nenhum acesso a `.json()` sem passar pela checagem de `resposta.ok`.

Saída esperada (trecho):

```
Mural filtrado:
sunt aut facere ... — por Leanne Graham
...
Fluxo editorial: criado #101, corrigido #101, retirado do ar
Consulta encerrada
```

<details>
<summary>Dica</summary>

Transforme os usuários num dicionário `{ id: nome }` antes de montar as linhas — evita buscas repetidas dentro do laço dos posts.
</details>

## Critérios de aceite
- [ ] O código roda sem erros (`node exercicio-XX.js` no Node 18+)
- [ ] Usa `const`/`let` adequadamente (nunca `var`)
- [ ] Nomes de variáveis descritivos em português
- [ ] Toda resposta passa pela verificação de `resposta.ok` antes de ler o corpo
- [ ] POST e PUT enviam corpo serializado com `Content-Type: application/json`
