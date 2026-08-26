# Módulo 06 — Express e REST

Escrever servidores com o módulo `http` puro funciona, mas escala mal. Este módulo apresenta o Express, o framework minimalista padrão do ecossistema: gerenciamento de rotas, middleware, renderização no servidor com template engines e construção de APIs REST completas. É o coração técnico do Projeto 02.

## Pré-requisitos

- Módulo 05 completo (Node, npm e servidor HTTP manual).
- Conhecer verbos HTTP (GET, POST, PUT, DELETE) ajuda; eles são revisados nas aulas.
- Módulos 01-04 para lógica, objetos e assincronismo.

## Mapa das aulas

| # | Aula | Você vai aprender |
|---|------|-------------------|
| 01 | [npm e package.json](./01-npm-e-package-json/) | Anatomia do `package.json`, scripts, versionamento semântico e dependências |
| 02 | [Middleware Express](./02-middleware-express/) | Pipeline de middlewares, `(req, res, next)`, ordem de execução e tratamento de erros |
| 03 | [Template Engines](./03-template-engines/) | Renderizar HTML no servidor com dados dinâmicos |
| 04 | [REST API](./04-rest-api/) | Rotas RESTful, `express.Router`, status codes e organização em módulos |

## Como estudar este módulo

1. Leia o README da aula.
2. Execute o exemplo da aula: dentro da pasta da aula rode `npm install` e depois `node app.js`.
3. Resolva o `exercicios.md` da aula.
4. Ao terminar TODAS as aulas, faça o [quiz do módulo](./quiz.md).

## Ao final deste módulo você será capaz de:

- Criar e interpretar um `package.json` completo, incluindo scripts npm.
- Explicar e montar pipelines de middleware controlando ordem e fluxo.
- Ler corpo JSON de requisições com `express.json()` e responder com `res.json()`.
- Renderizar páginas dinâmicas com template engine no servidor.
- Estruturar uma API REST com rotas nomeadas, parâmetros e status codes adequados.

## Projeto relacionado

- Aplique o que aprendeu no [Projeto 02 — API de Tarefas Express](../../projetos-equipe/projeto-02-api-tarefas-express/): a estrutura de rotas, middlewares e CRUD REST do projeto é construída exatamente com as técnicas deste módulo.

## Referências

- [Express — Guia oficial em português](https://expressjs.com/pt-BR/)
- [Express — Roteamento básico](https://expressjs.com/pt-BR/starter/basic-routing.html)
- [Express — Escrevendo middleware](https://expressjs.com/pt-BR/guide/writing-middleware.html)
- [Express — Usando template engines](https://expressjs.com/pt-BR/guide/using-template-engines.html)
