# Módulo 01 — Fundamentos

Este módulo estabelece a base de toda a trilha: você aprende a declarar e manipular dados, tomar decisões, repetir tarefas e organizar código com funções, arrays e objetos. Sem esses pilares, nenhum dos módulos seguintes (DOM, assincronismo, POO ou back-end) funciona bem, pois todos dependem desses conceitos diariamente.

## Pré-requisitos

- Nenhum conhecimento prévio de programação é exigido.
- Ter o Node.js instalado (para executar os exemplos no terminal) e familiaridade básica com linha de comando.
- Noções de HTML ajudam, mas não são obrigatórias neste módulo.

## Mapa das aulas

| # | Aula | Você vai aprender |
|---|------|-------------------|
| 00 | [Variáveis e Escopo](./00-variaveis-e-escopo/) | Declarar com `var`, `let` e `const`; escopo global, de função e de bloco; hoisting |
| 01 | [Tipos de Dados](./01-tipos-de-dados/) | Primitivos (`string`, `number`, `boolean`, `null`, `undefined`, `symbol`), objetos e o operador `typeof` |
| 02 | [Operadores](./02-operadores/) | Aritméticos, atribuição, comparação (`==` vs `===`), lógicos e precedência |
| 03 | [Strings](./03-strings/) | Template literals, propriedades e métodos (`length`, `slice`, `replace`, `split`) |
| 04 | [Números e Math](./04-numeros-e-math/) | Ponto flutuante, `toFixed`, `parseInt`/`parseFloat` e o objeto `Math` |
| 05 | [Condicionais](./05-condicionais/) | `if`/`else`, `switch`, operador ternário e valores truthy/falsy |
| 06 | [Laços de Repetição](./06-lacos-de-repeticao/) | `for`, `while`, `do...while`, `break`, `continue` e iteração sobre coleções |
| 07 | [Funções](./07-funcoes/) | Declaração, parâmetros e retorno, arrow functions, escopo e callbacks |
| 08 | [Arrays](./08-arrays/) | Criar e manipular listas; `push`, `pop`, `map`, `filter`, `reduce` e `find` |
| 09 | [Objetos](./09-objetos/) | Propriedades, métodos, `this`, desestruturação e iteração |

## Como estudar este módulo

1. Leia o README da aula.
2. Execute o exemplo da aula (ex.: `node variaveis.js`) e o playground correspondente em `../../playground/01-fundamentos/`.
3. Resolva o `exercicios.md` da aula.
4. Ao terminar TODAS as aulas, faça o [quiz do módulo](./quiz.md).

## Ao final deste módulo você será capaz de:

- Escolher corretamente entre `var`, `let` e `const` justificando pelo escopo e mutabilidade.
- Prever o resultado de expressões com operadores aritméticos, lógicos e de comparação.
- Escrever funções (declarativas e arrow) com parâmetros padrão e retorno adequado.
- Transformar listas com `map`, `filter` e `reduce` sem laços manuais.
- Modelar dados do mundo real usando objetos e arrays de objetos.
- Ler um trecho de código simples e prever sua saída no console.

## Projeto relacionado

- Aplique o que aprendeu no [Projeto 01 — Lista de Tarefas Vanilla](../../projetos-equipe/projeto-01-lista-de-tarefas-vanilla/): a lógica de adicionar, listar e filtrar tarefas usa arrays, objetos, funções e condicionais deste módulo.

## Referências

- [MDN — Gramática e tipos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types)
- [MDN — Controle de fluxo e tratamento de erros](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [MDN — Laços e iteração](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [MDN — Funções (guia)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions)
- [MDN — Coleções indexadas](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Indexed_collections)
- [MDN — Trabalhando com objetos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_objects)
