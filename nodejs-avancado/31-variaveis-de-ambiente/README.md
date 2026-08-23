# Variáveis de Ambiente

## Objetivo
Configurar aplicações sem fixar segredos no código.

## Conceitos Teóricos
`process.env` lê valores do ambiente. `dotenv` carrega um arquivo local; `.env` real deve ser ignorado pelo Git e `.env.example` documenta chaves necessárias.

## Exemplos de Código
Copie `.env.example` para `.env`, execute `npm install` e rode `npm start`.

## Exercícios Práticos
1. Torne a porta configurável.
2. Valide variáveis obrigatórias.
3. Separe configuração de desenvolvimento e produção.

## Referências
- [dotenv](https://github.com/motdotla/dotenv)