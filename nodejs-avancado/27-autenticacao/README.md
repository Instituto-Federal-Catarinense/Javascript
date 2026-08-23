# Autenticação

## Objetivo
Criar login com senha hasheada, JWT e middleware de autorização.

## Conceitos Teóricos
Senhas nunca são armazenadas em texto puro. O JWT assinado identifica o usuário; o middleware valida o token antes da rota protegida.

## Exemplos de Código
Execute `npm install`, defina `JWT_SEGREDO` e rode `npm start`.

## Exercícios Práticos
1. Persista usuários em banco.
2. Adicione expiração ao token.
3. Diferencie papéis de usuário.

## Referências
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js)