# Módulo 04 — POO e JS Moderno

Este módulo aprofunda o modelo mental da linguagem: organização de código com classes e herança, busca de padrões em texto com expressões regulares, e dois mecanismos internos poderosos — closures e protótipos — que explicam como o JavaScript realmente funciona por baixo dos açúcares sintáticos. É a ponte entre "usar a linguagem" e "entender a linguagem".

## Pré-requisitos

- Módulos 01 a 03 concluídos (funções, objetos, escopo e assincronismo).
- Conforto com arrow functions e desestruturação.
- Vontade de ler código mais abstrato que nos módulos anteriores.

## Mapa das aulas

| # | Aula | Você vai aprender |
|---|------|-------------------|
| 01 | [Classes e POO](./01-classes-e-poo/) | Sintaxe de classes, construtores, métodos, getters/setters e encapsulamento |
| 02 | [Expressões Regulares](./02-expressoes-regulares/) | Padrões, âncoras, quantificadores, grupos e os métodos `test`, `match` e `replace` |
| 03 | [Closures e Escopo](./03-closures-e-escopo/) | Funções que lembram seu ambiente léxico; fábricas, memoização e armadilhas de loop |
| 04 | [Protótipos e Herança](./04-prototipos-e-heranca/) | Cadeia de protótipos, `__proto__`, herança clássica vs prototipal |

## Como estudar este módulo

1. Leia o README da aula.
2. Execute o exemplo da aula (ex.: `node poo.js`) e o playground correspondente em `../../playground/04-poo-js-moderno/`.
3. Resolva o `exercicios.md` da aula.
4. Ao terminar TODAS as aulas, faça o [quiz do módulo](./quiz.md).

## Ao final deste módulo você será capaz de:

- Modelar entidades com classes, usando construtor, propriedades e métodos.
- Estender classes com `extends` e reutilizar comportamento com `super`.
- Escrever regex para validar formatos simples (e-mail, telefone, CEP).
- Explicar e aplicar closures para criar estado privado e funções-fábrica.
- Descrever como a cadeia de protótipos resolve acesso a métodos.

## Projeto relacionado

- Aplique o que aprendeu no [Projeto 01 — Lista de Tarefas Vanilla](../../projetos-equipe/projeto-01-lista-de-tarefas-vanilla/): organize o código do app em classes (ex.: `Tarefa`, `GerenciadorDeTarefas`) e use closures para utilitários.

## Referências

- [MDN — Classes](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes)
- [MDN — Expressões regulares (guia)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_expressions)
- [MDN — Closures](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures)
- [MDN — Herança e cadeia de protótipos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
