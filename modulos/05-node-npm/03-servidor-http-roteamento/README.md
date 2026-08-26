# Servidor HTTP e Roteamento

## Objetivo

Construir, com o módulo nativo `http`, um servidor que responde de forma
diferente conforme a **URL** (rota) e o **método** acessados — a base conceitual
de tudo o que o Express faz por você nos módulos seguintes.

## Conceitos-chave

- `http.createServer((request, response) => { ... })`: cada requisição chega como callback.
- `request.url` e `request.method`: a dupla rota + verbo define o comportamento.
- Cabeçalhos de resposta: `Content-Type` correto para HTML (`text/html; charset=utf-8`) e JSON (`application/json`).
- Roteamento manual: cadeia de `if/else if` comparando `url` + `method`.
- Resposta 404: nenhum caminho casou — sempre reserve um "senão" final.

## Exemplo executável

```bash
node app.js
# depois abra no navegador:
#   http://localhost:3000/          -> página inicial
#   http://localhost:3000/sobre     -> página sobre
#   http://localhost:3000/contato   -> formulário (GET)
#   qualquer outra rota             -> 404 personalizado
```

Encerre o servidor com `Ctrl+C`.

## Próximos passos

Resolva os [exercícios](./exercicios.md) e compare com a solução-modelo em
[`../../solucoes/`](../solucoes/). No módulo 06 você reescreverá este servidor
com Express e sentirá na pele o problema que os frameworks resolvem.

## Referências

- [MDN — Introdução ao lado servidor](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Extensions/Server-side/First_steps)
- [Node.js — módulo http](https://nodejs.org/docs/latest/api/http.html)
