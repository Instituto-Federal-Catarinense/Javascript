# Módulo 03 — Assíncrono e API

Quase todo dado útil vem de fora: uma API, um arquivo, um banco. Este módulo ensina como o JavaScript lida com espera sem travar a página — callbacks, promises, async/await — além de tratamento de erros e do formato JSON que domina a comunicação entre sistemas. Ao final, você consome APIs reais com a Fetch API.

## Pré-requisitos

- Módulo 01 completo (funções e objetos são intensamente usados).
- Recomendável: Módulo 02 (para exibir resultados de API na página).
- Conhecer JSON superficialmente ajuda, mas ele é ensinado aqui.

## Mapa das aulas

| # | Aula | Você vai aprender |
|---|------|-------------------|
| 01 | [Tratamento de Erros](./01-tratamento-de-erros/) | `try`/`catch`/`finally`, lançar erros com `throw` e depurar falhas |
| 02 | [JSON](./02-json/) | Estrutura do formato, `JSON.parse` e `JSON.stringify` |
| 03 | [JavaScript Assíncrono](./03-javascript-assincrono/) | Event loop, callbacks, promises e `async`/`await` |
| 04 | [Fetch API](./04-fetch-api/) | Requisições HTTP no navegador, métodos, headers e consumo de respostas |

## Como estudar este módulo

1. Leia o README da aula.
2. Execute o exemplo da aula (ex.: `node erros.js`) e o playground correspondente em `../../playground/03-assincrono-api/`; na aula de Fetch, abra o `index.html` no navegador.
3. Resolva o `exercicios.md` da aula.
4. Ao terminar TODAS as aulas, faça o [quiz do módulo](./quiz.md).

## Ao final deste módulo você será capaz de:

- Proteger trechos de código com `try`/`catch` e criar erros significativos com `throw`.
- Converter objetos em strings JSON e vice-versa com segurança.
- Explicar a diferença entre código síncrono e assíncrono e o papel do event loop.
- Encadear promises e reescrevê-las com `async`/`await` mais `try`/`catch`.
- Fazer requisições GET/POST com `fetch`, checar `response.ok` e tratar falhas de rede.

## Projeto relacionado

- Aplique o que aprendeu no [Projeto 01 — Lista de Tarefas Vanilla](../../projetos-equipe/projeto-01-lista-de-tarefas-vanilla/): sincronizar as tarefas com uma API externa usa fetch, async/await e JSON deste módulo.

## Referências

- [MDN — Controle de fluxo e tratamento de erros](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [MDN — Trabalhando com JSON](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/JSON)
- [MDN — Usando promessas](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Using_promises)
- [MDN — Fetch API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API)
