# Módulo 02 — DOM e Eventos

Aqui a linguagem sai do console e ganha interface: você aprende a selecionar, criar e modificar elementos HTML via DOM, reagir às ações do usuário com eventos e persistir dados no navegador com Web Storage. É o módulo que transforma scripts isolados em páginas interativas de verdade, base direta do Projeto 01.

## Pré-requisitos

- Módulo 01 completo (variáveis, funções, arrays e objetos).
- Noções básicas de HTML: tags, atributos, `id` e classes.
- Um navegador moderno com DevTools abertos (F12).

## Mapa das aulas

| # | Aula | Você vai aprender |
|---|------|-------------------|
| 01 | [DOM](./01-dom/) | Selecionar elementos com `querySelector`, alterar texto/estilo, criar e remover nós |
| 02 | [Eventos](./02-eventos/) | `addEventListener`, tipos de eventos, objeto `event`, propagação e delegação |
| 03 | [Formulários e Validação](./03-formularios-e-validacao/) | Capturar dados de formulários, validar antes de enviar e usar `preventDefault` |
| 04 | [Web Storage](./04-web-storage/) | Persistir dados com `localStorage` e `sessionStorage`; serializar JSON |

## Como estudar este módulo

1. Leia o README da aula.
2. Abra o `index.html` da aula no navegador e o playground correspondente em `../../playground/02-dom-eventos/` (DOM só funciona no navegador).
3. Resolva o `exercicios.md` da aula.
4. Ao terminar TODAS as aulas, faça o [quiz do módulo](./quiz.md).

## Ao final deste módulo você será capaz de:

- Selecionar qualquer elemento da página usando seletores CSS com `querySelector`.
- Criar, inserir, alterar e remover elementos dinamicamente.
- Registrar listeners de eventos e usar delegação para listas dinâmicas.
- Interceptar envios de formulário e validar campos antes do processamento.
- Salvar e recuperar estado da aplicação com `localStorage` e JSON.

## Projeto relacionado

- Aplique o que aprendeu no [Projeto 01 — Lista de Tarefas Vanilla](../../projetos-equipe/projeto-01-lista-de-tarefas-vanilla/): renderizar tarefas, escutar cliques e salvar o estado no navegador são exatamente as habilidades deste módulo.

## Referências

- [MDN — Introdução ao DOM](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_object_model)
- [MDN — EventTarget.addEventListener()](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener)
- [MDN — Validação de formulários](https://developer.mozilla.org/pt-BR/docs/Learn/Forms/Form_validation)
- [MDN — Window.localStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage)
