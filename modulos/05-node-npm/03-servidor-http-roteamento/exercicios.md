# Exercícios — Servidor HTTP e Roteamento

> **Como resolver:** crie os arquivos `exercicio-01.js`, `exercicio-02.js`... nesta mesma pasta,
> no seu fork ou na sua branch pessoal. Ao final do módulo compare com `../../solucoes/`.
> (Para aulas com app Express/Node: trabalhe numa CÓPIA da pasta chamada `pratica/`.)

## Antes de começar
- Releia o [README da aula](./README.md) e execute o `app.js` original com `node app.js`.
- Revise `http.createServer`, `request.url`, `request.method`, `statusCode` e `setHeader`.

## Lista de exercícios

### 1) Rota /produtos `[fácil]`
Na sua cópia em `pratica/`, adicione a rota `/produtos` respondendo 200 com um `<h1>` e uma lista `<ul>` de três produtos escritos à mão. Confirme que as rotas antigas (`/`, `/sobre`, `/contato`) continuam funcionando.

<details>
<summary>Dica</summary>

Encadeie mais um `else if (url === '/produtos')` antes do bloco final do 404.
</details>

### 2) Bloqueando método errado `[fácil]`
Faça `/contato` aceitar apenas `GET`: qualquer outro método deve responder `405` com a mensagem `"Método não permitido"`.

<details>
<summary>Dica</summary>

Combine as duas condições no mesmo `if`: `url === '/contato' && method === 'GET'`; o ramo seguinte cuida do 405.
</details>

### 3) Busca por query string `[médio]`
Na rota `/produtos`, leia `?busca=...` e filtre a lista antes de montar o HTML:

```bash
curl "http://localhost:3000/produtos?busca=arroz"
```

Sem parâmetro, mostre tudo. Com busca sem resultados, devolva 200 com `"Nenhum produto encontrado"`.

<details>
<summary>Dica</summary>

Use `new URL(request.url, 'http://localhost')` e depois `searchParams.get('busca')`.
</details>

### 4) Execute e explique: cabeçalhos e status `[médio]`
Rode o servidor e execute no terminal:

```bash
curl -i http://localhost:3000/sobre
curl -i http://localhost:3000/rota-inexistente
```

COPIE as duas respostas e EXPLIQUE cada linha do início: versão HTTP, código de status e cabeçalhos `Content-Type` e `Date`. Por que o segundo retorna 404?

<details>
<summary>Dica</summary>

O `-i` inclui os headers na saída; compare o `statusCode` configurado em cada bloco do `app.js`.
</details>

### 5) API JSON de horário `[médio]`
Adicione a rota `/api/horario` que responde JSON puro (não HTML):

```json
{ "iso": "2026-08-25T13:45:00.000Z", "timestamp": 1779733500000 }
```

Lembre de trocar o `Content-Type` para `application/json; charset=utf-8`.

<details>
<summary>Dica</summary>

`JSON.stringify(objeto)` converte o objeto para texto antes do `response.end`.
</details>

### 6) Desafio integrador: mini site de delivery `[desafiador]`
Estruture o servidor com roteamento próprio para: `/` (home), `/menu` (lista JSON de itens), `/pedido` (só POST, recebe JSON `{ item, quantidade }` e responde 201 com o pedido confirmado), `/status/:codigo` (consulta um pedido em memória pelo código via query `?codigo=`) e um 404 caprichado listando as rotas válidas. Teste tudo com curl.

<details>
<summary>Dica</summary>

Guarde pedidos num objeto `{ codigo: pedido }` fora do handler; gere códigos incrementais.
</details>

## Critérios de aceite
- [ ] O código roda sem erros
- [ ] Toda resposta define `Content-Type` adequado (HTML ou JSON)
- [ ] O desafio é testado com curl e os comandos usados estão anotados em comentário
