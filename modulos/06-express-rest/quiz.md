# Quiz — Módulo 06: Express e REST

Responda sem consultar o material. Depois confira o gabarito comentado no fim.

## Parte 1 — Múltipla escolha

**Q1.** Express é melhor descrito como:

- a) Um banco de dados para Node.js
- b) Um framework minimalista para servidores web e APIs sobre o Node.js
- c) Um substituto do JavaScript no navegador
- d) Um template engine

**Q2.** Para responder com um objeto JavaScript serializado em JSON, usa-se:

- a) `res.write(obj)`
- b) `res.json(obj)`
- c) `res.sendJSON(obj)`
- d) `res.end(obj.text)`

**Q3.** A assinatura clássica de um middleware Express é:

- a) `(err, req, res)`
- b) `(req, res, next)`
- c) `(req, next)`
- d) `(request, response, done)`

**Q4.** Em uma API RESTful, qual método HTTP cria um novo recurso?

- a) GET
- b) PUT
- c) POST
- d) DELETE

## Parte 2 — Verdadeiro ou falso (justifique)

**Q5.** `app.use(middleware)` registra aquele middleware para todas as requisições que chegarem a partir daquele ponto do código.

**Q6.** Em Express, a ordem de declaração das rotas importa: a primeira rota compatível com a requisição é a executada.

**Q7.** Template engines permitem gerar HTML no servidor misturando templates com dados enviados na renderização.

## Parte 3 — Analise o código

**Q8.**

```js
app.use((req, res, next) => { console.log('1'); next(); });
app.get('/rota', (req, res) => { console.log('3'); res.send('ok'); });
app.use((req, res, next) => { console.log('2'); next(); });
// requisição: GET /rota
```

O que imprime no console? Por que o `'2'` não aparece?

**Q9.**

```js
app.get('/users/:id', (req, res) => {
  res.send(req.params.id);
});
// requisição: GET /users/42
```

O que a rota devolve como corpo da resposta?

**Q10.**

```js
app.use(express.json());
app.post('/dados', (req, res) => {
  console.log(req.body.nome);
  res.sendStatus(201);
});
// requisição POST /dados com corpo {"nome":"Ana"}
```

O que imprime e qual status HTTP a resposta carrega?

---

<details>
<summary><strong>Gabarito comentado</strong> (clique após responder)</summary>

**Q1 — b)** Express é um framework web minimalista e flexível que simplifica rotas, middlewares e respostas em cima do módulo `http` do Node. Não é banco nem linguagem; template engines são usados COM ele.

**Q2 — b)** `res.json(obj)` serializa automaticamente e envia com header `Content-Type: application/json`. `send` também detecta objetos, mas `json` deixa a intenção explícita.

**Q3 — b)** Todo middleware recebe `(req, res, next)`; chamar `next()` passa o controle ao próximo handler da pilha. Assinaturas com `err` primeiro definem error-handling middleware (4 parâmetros).

**Q4 — c)** POST cria recursos. GET lê, PUT atualiza/substitui (com idempotência), DELETE remove. PATCH atualiza parcialmente.

**Q5 — Verdadeiro.** Sem caminho especificado, `app.use` casa qualquer método e qualquer URL que ainda não tenha sido tratada antes dele — por isso a posição no arquivo define o alcance.

**Q6 — Verdadeiro.** O roteador testa handlers na ordem registrada e executa o primeiro que casar método + caminho. Rotas mais específicas devem vir antes de genéricas (ex.: `/users/new` antes de `/users/:id`).

**Q7 — Verdadeiro.** Engines como EJS/Pug recebem dados via `res.render('view', dados)` e produzem HTML final no servidor, que envia a resposta já pronta.

**Q8 — Imprime `1` e depois `3`.** O fluxo segue a ordem de REGISTRO: o primeiro middleware roda (`1`) e chama `next()`; o próximo handler compatível é a rota GET (`3`), que responde e encerra o ciclo sem chamar `next()`. O middleware `'2'`, registrado depois da rota, nunca é alcançado nessa requisição.

**Q9 — Devolve `"42"`.** O segmento `:id` captura o valor da URL em `req.params.id` como STRING. Se precisar de número, converta: `Number(req.params.id)`.

**Q10 — Imprime `"Ana"` e responde com status 201.** `express.json()` popula `req.body` a partir do corpo JSON; `sendStatus(201)` envia o status "Created", adequado para criação de recurso em APIs REST.

</details>
