# Exercícios — Middleware com Express

> **Como resolver:** crie os arquivos `exercicio-01.js`, `exercicio-02.js`... nesta mesma pasta,
> no seu fork ou na sua branch pessoal. Ao final do módulo compare com `../../solucoes/`.
> (Para aulas com app Express/Node: trabalhe numa CÓPIA da pasta chamada `pratica/`.)

## Antes de começar
- Releia o [README da aula](./README.md) e rode o exemplo com `npm install` e `npm start`.
- Revise a assinatura `(req, res, next)` e o middleware de erro com quatro argumentos.

## Lista de exercícios

### 1) Logger de requisições `[fácil]`
Crie o middleware `logger` que imprime método, URL e horário de cada requisição e chama `next()`. Monte-o ANTES das rotas e confirme no terminal:

```
[GET] /produtos - 2026-08-25T14:02:11.402Z
```

<details>
<summary>Dica</summary>

Sem `next()` a requisição fica presa no middleware e a rota nunca responde.
</details>

### 2) Timer de resposta `[fácil]`
Crie o middleware `timer` que marca `const inicio = Date.now()`, guarda o valor em `res.locals.inicio` e registra um listener para imprimir quanto tempo a resposta levou quando ela terminar.

<details>
<summary>Dica</summary>

Use `res.on('finish', ...)` dentro do middleware; o tempo é `Date.now() - res.locals.inicio`.
</details>

### 3) Execute e explique: a ordem importa `[médio]`
Monte este experimento em `pratica/app.js`, rode e EXPLIQUE a saída observada:

```javascript
app.use((req, res, next) => { console.log('primeiro'); next(); });
app.get('/teste', (req, res) => { console.log('rota'); res.send('ok'); });
app.use((req, res, next) => { console.log('segundo'); next(); });
```

Depois inverta a posição dos dois `app.use` e rode de novo. Por que o log muda? E por que `segundo` aparece mesmo sem afetar a resposta?

<details>
<summary>Dica</summary>

O Express executa middlewares na ordem de registro; após `res.send`, os próximos ainda rodam, mas não podem mais responder.
</details>

### 4) Middleware 404 `[médio]`
Adicione, DEPOIS de todas as rotas, um middleware final que responde 404 com JSON `{ erro: 'Rota não encontrada', caminho: req.originalUrl }`. Prove com curl que `/qualquer-coisa` cai nele e `/produtos` não.

<details>
<summary>Dica</summary>

Um `app.use((req, res) => ...)` no fim do arquivo só é alcançado quando nenhuma rota anterior respondeu.
</details>

### 5) Token de acesso e tratamento de erros `[médio]`
Implemente dois middlewares: (a) `autenticar`, que exige o cabeçalho `x-api-token: segredo123` nas rotas `/admin/*` e responde 401 caso contrário; (b) um middleware de ERRO com quatro argumentos `(err, req, res, next)` que responde 500 com `{ erro: err.message }`. Crie uma rota `/admin/painel` protegida e uma rota `/bug` que lança `new Error('Falha simulada')` para testar o segundo.

<details>
<summary>Dica</summary>

Middlewares de erro devem ser os ÚLTIMOS registrados; rotas síncronas podem lançar erro com `throw` que o Express encaminha para ele.
</details>

### 6) Desafio integrador: pipeline completo da loja `[desafiador]`
Organize em ordem correta o pipeline: `express.json()`, logger, timer, autenticar (só em /admin), rotas (`/produtos`, `/admin/painel`, `/pedidos`), 404 e handler de erro. Adicione também `helmet` e configure CORS liberando apenas `http://localhost:5173`. Documente no fim do arquivo, em comentário, o fluxo completo de uma requisição a `/admin/painel` com token válido.

<details>
<summary>Dica</summary>

Teste com: `curl -i -H "x-api-token: segredo123" http://localhost:3000/admin/painel`
</details>

## Critérios de aceite
- [ ] O código roda sem erros
- [ ] Logger e timer aparecem para TODAS as rotas (estão antes delas)
- [ ] Erros lançados nas rotas chegam ao handler de 4 argumentos e respondem 500 em JSON
