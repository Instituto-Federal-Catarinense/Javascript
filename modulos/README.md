# Módulos

Esta pasta organiza o conteúdo de JavaScript da disciplina em 7 módulos sequenciais, dos fundamentos da linguagem até tópicos avançados de back-end com Node.js. Cada módulo contém aulas com README, exemplos executáveis e exercícios, além de um quiz para autoavaliação.

## Índice geral

| Módulo | Tema | Aulas | Projeto aplicado |
|--------|------|-------|------------------|
| [01 — Fundamentos](./01-fundamentos/) | Variáveis, tipos, operadores, condicionais, laços, funções, arrays e objetos | 10 | [Projeto 01 — Lista de Tarefas Vanilla](../projetos-equipe/projeto-01-lista-de-tarefas-vanilla/) |
| [02 — DOM e Eventos](./02-dom-eventos/) | Manipulação do DOM, eventos, formulários e Web Storage | 4 | [Projeto 01 — Lista de Tarefas Vanilla](../projetos-equipe/projeto-01-lista-de-tarefas-vanilla/) |
| [03 — Assíncrono e API](./03-assincrono-api/) | Tratamento de erros, JSON, promises, async/await e Fetch API | 4 | [Projeto 01 — Lista de Tarefas Vanilla](../projetos-equipe/projeto-01-lista-de-tarefas-vanilla/) |
| [04 — POO e JS Moderno](./04-poo-js-moderno/) | Classes, expressões regulares, closures e protótipos | 4 | [Projeto 01 — Lista de Tarefas Vanilla](../projetos-equipe/projeto-01-lista-de-tarefas-vanilla/) |
| [05 — Node.js e npm](./05-node-npm/) | Introdução ao Node, módulos nativos e servidor HTTP | 3 | [Projeto 02 — API de Tarefas Express](../projetos-equipe/projeto-02-api-tarefas-express/) |
| [06 — Express e REST](./06-express-rest/) | npm/package.json, middleware, template engines e APIs REST | 4 | [Projeto 02 — API de Tarefas Express](../projetos-equipe/projeto-02-api-tarefas-express/) |
| [07 — Node Avançado](./07-node-avancado/) | Banco de dados, autenticação, uploads, WebSockets, testes e debugging | 7 | [Projeto 02 — API de Tarefas Express](../projetos-equipe/projeto-02-api-tarefas-express/) |

## Trilhas sugeridas

- **Completa**: Módulos 01 → 02 → 03 → 04 → 05 → 06 → 07. Percorra todos os módulos na ordem indicada; é o caminho recomendado para quem está começando do zero.
- **Frontend**: Módulos 01 → 02 → 03 → 04. Foco em JavaScript no navegador: fundamentos, DOM, consumo de APIs e padrões modernos da linguagem.
- **Backend**: Módulos 01 → 03 → 04 → 05 → 06 → 07. Fundamentos da linguagem, assincronismo e POO aplicados a servidores com Node.js, Express, banco de dados e autenticação.

## Como estudar (resumo)

1. Leia o README da aula e entenda os conceitos antes de codar.
2. Execute o exemplo da aula (`node <arquivo>.js` ou abrindo o `index.html` no navegador) e experimente o playground correspondente em `../../playground/<modulo>/`.
3. Resolva o `exercicios.md` da aula sem consultar as respostas.
4. Ao terminar todas as aulas do módulo, faça o `quiz.md` e confira o gabarito comentado.
5. Aplique o que aprendeu no projeto relacionado ao módulo.
