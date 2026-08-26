# Upload de Arquivos

## Objetivo
Receber uploads simples e múltiplos com Multer.

## Conceitos Teóricos
Multipart/form-data transporta arquivos. Valide tamanho e tipo, use nomes controlados e nunca confie no nome enviado pelo cliente.

## Exemplos de Código
Execute `npm install` e `npm start`; envie um campo `arquivo` para `/upload`.

## Exercícios Práticos
1. Limite o tamanho do upload.
2. Aceite apenas imagens.
3. Implemente upload múltiplo.

## Referências
- [Multer](https://github.com/expressjs/multer)