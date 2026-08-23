# Middleware com Express

## Objetivo
Encadear middlewares e configurar CORS, Helmet e tratamento de erros.

## Conceitos Teóricos
Um middleware recebe `req`, `res` e `next`. Ele pode enriquecer a requisição, responder ou delegar; o middleware de erro recebe quatro argumentos.

## Exemplos de Código
Execute `npm install` e `npm start` para testar as rotas.

## Exercícios Práticos
1. Crie um logger de requisições.
2. Restrinja uma rota por cabeçalho.
3. Adicione um middleware de erro próprio.

## Referências
- [Express: middleware](https://expressjs.com/pt-br/guide/using-middleware.html)
- [Helmet](https://helmetjs.github.io/)