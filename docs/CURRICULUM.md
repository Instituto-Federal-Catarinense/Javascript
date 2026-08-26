# Trilha Curricular

Documento de referência da proposta pedagógica do repositório **JavaScript Educacional** (Instituto Federal Catarinense). Descreve a metodologia, o público-alvo, a estrutura completa das 36 aulas, os objetivos terminais por módulo, a carga horária sugerida, os percursos formativos alternativos e o sistema de avaliação.

## Visão geral da proposta pedagógica

A trilha adota **aprendizagem ativa**: o estudante constrói conhecimento executando código desde o primeiro contato. Cada aula segue um ciclo padronizado de seis etapas:

1. **Teoria curta**: leitura do `README.md` da aula, com objetivo de aprendizagem, explicação essencial e referências oficiais.
2. **Exemplo comentado**: arquivo `.js` (ou `.html`) executável dentro da pasta da aula, com comentários didáticos em português.
3. **Playground manipulável**: versão espelhada do exemplo em `playground/<modulo>/`, destinada à experimentação livre (alterar valores, quebrar propositalmente, observar resultados).
4. **Exercícios graduados**: `exercicios.md` com itens `[facil]`, `[medio]` e `[desafiador]`, dicas expansíveis e critérios de aceite explícitos.
5. **Quiz do módulo**: autoavaliação ao final de cada módulo, com nota mínima de 70 por cento.
6. **Aplicação em equipe**: consolidação em projetos colaborativos versionados com Git e GitHub, seguindo o fluxo de branches, commits semânticos e revisão por pull requests documentado no [guia colaborativo](../github-playbook/README.md).

## Público-alvo e pré-requisitos

**Público-alvo**: estudantes de cursos técnicos e superiores na área de computação, professores em formação continuada e autodidatas que desejam dominar JavaScript tanto no navegador quanto no servidor.

**Pré-requisitos gerais**:

- Lógica de programação básica (variáveis, condições e repetições em qualquer linguagem).
- Informática fundamental: navegação em arquivos e pastas, uso de editor de texto.
- Noções de linha de comando (o repositório fornece os comandos necessários a cada etapa).
- Desejável, mas não obrigatório: HTML e CSS elementares para os módulos de DOM e Express.

## Estrutura completa da trilha (36 aulas)

A coluna "Exemplo executável" aponta o caminho real do arquivo demonstrativo de cada aula, relativo à pasta `docs/`.

### Módulo 01 — Fundamentos (10 aulas)

| Aula | Tema | Exemplo executável |
| --- | --- | --- |
| 00 | Variáveis e escopo | [`variaveis.js`](../modulos/01-fundamentos/00-variaveis-e-escopo/variaveis.js) |
| 01 | Tipos de dados | [`tipos.js`](../modulos/01-fundamentos/01-tipos-de-dados/tipos.js) |
| 02 | Operadores | [`operadores.js`](../modulos/01-fundamentos/02-operadores/operadores.js) |
| 03 | Strings | [`strings.js`](../modulos/01-fundamentos/03-strings/strings.js) |
| 04 | Números e Math | [`numeros.js`](../modulos/01-fundamentos/04-numeros-e-math/numeros.js) |
| 05 | Condicionais | [`condicionais.js`](../modulos/01-fundamentos/05-condicionais/condicionais.js) |
| 06 | Laços de repetição | [`lacos.js`](../modulos/01-fundamentos/06-lacos-de-repeticao/lacos.js) |
| 07 | Funções | [`funcoes.js`](../modulos/01-fundamentos/07-funcoes/funcoes.js) |
| 08 | Arrays | [`arrays.js`](../modulos/01-fundamentos/08-arrays/arrays.js) |
| 09 | Objetos | [`objetos.js`](../modulos/01-fundamentos/09-objetos/objetos.js) |

### Módulo 02 — DOM e eventos (4 aulas)

| Aula | Tema | Exemplo executável |
| --- | --- | --- |
| 01 | Manipulação do DOM | [`dom.js`](../modulos/02-dom-eventos/01-dom/dom.js) |
| 02 | Eventos | [`eventos.js`](../modulos/02-dom-eventos/02-eventos/eventos.js) |
| 03 | Formulários e validação | [`validacao.js`](../modulos/02-dom-eventos/03-formularios-e-validacao/validacao.js) |
| 04 | Web Storage | [`storage.js`](../modulos/02-dom-eventos/04-web-storage/storage.js) |

### Módulo 03 — Assíncrono e API (4 aulas)

| Aula | Tema | Exemplo executável |
| --- | --- | --- |
| 01 | Tratamento de erros | [`erros.js`](../modulos/03-assincrono-api/01-tratamento-de-erros/erros.js) |
| 02 | JSON | [`json.js`](../modulos/03-assincrono-api/02-json/json.js) |
| 03 | JavaScript assíncrono | [`async.js`](../modulos/03-assincrono-api/03-javascript-assincrono/async.js) |
| 04 | Fetch API | [`fetch.js`](../modulos/03-assincrono-api/04-fetch-api/fetch.js) |

### Módulo 04 — POO e JS moderno (4 aulas)

| Aula | Tema | Exemplo executável |
| --- | --- | --- |
| 01 | Classes e POO | [`poo.js`](../modulos/04-poo-js-moderno/01-classes-e-poo/poo.js) |
| 02 | Expressões regulares | [`regex.js`](../modulos/04-poo-js-moderno/02-expressoes-regulares/regex.js) |
| 03 | Closures e escopo | [`closures.js`](../modulos/04-poo-js-moderno/03-closures-e-escopo/closures.js) |
| 04 | Protótipos e herança | [`prototipos.js`](../modulos/04-poo-js-moderno/04-prototipos-e-heranca/prototipos.js) |

### Módulo 05 — Node.js e npm (3 aulas)

| Aula | Tema | Exemplo executável |
| --- | --- | --- |
| 01 | Introdução ao Node | [`hello-world.js`](../modulos/05-node-npm/01-introducao-node/hello-world.js) |
| 02 | Módulos nativos | [`meu-modulo.js`](../modulos/05-node-npm/02-modulos-nativos/meu-modulo.js) |
| 03 | Servidor HTTP e roteamento | [`app.js`](../modulos/05-node-npm/03-servidor-http-roteamento/app.js) |

Observação: a aula 02 inclui subpastas demonstrativas (`fs/`, `os/`, `http/`, `calculadora/`, `leitura-arquivo/`) com exemplos adicionais de cada módulo nativo.

### Módulo 06 — Express e REST (4 aulas)

| Aula | Tema | Exemplo executável |
| --- | --- | --- |
| 01 | npm e package.json | [`package.json`](../modulos/06-express-rest/01-npm-e-package-json/package.json) |
| 02 | Middleware no Express | [`app.js`](../modulos/06-express-rest/02-middleware-express/app.js) |
| 03 | Template engines | [`app.js`](../modulos/06-express-rest/03-template-engines/app.js) |
| 04 | API REST | [`app.js`](../modulos/06-express-rest/04-rest-api/app.js) |

### Módulo 07 — Node avançado (7 aulas)

| Aula | Tema | Exemplo executável |
| --- | --- | --- |
| 01 | Banco de dados | [`app.js`](../modulos/07-node-avancado/01-banco-de-dados/app.js) |
| 02 | Autenticação | [`app.js`](../modulos/07-node-avancado/02-autenticacao/app.js) |
| 03 | Upload de arquivos | [`app.js`](../modulos/07-node-avancado/03-upload-de-arquivos/app.js) |
| 04 | WebSockets | [`app.js`](../modulos/07-node-avancado/04-websockets/app.js) |
| 05 | Testes automatizados | [`soma.test.js`](../modulos/07-node-avancado/05-testes/soma.test.js) |
| 06 | Variáveis de ambiente | [`app.js`](../modulos/07-node-avancado/06-variaveis-de-ambiente/app.js) |
| 07 | Debugging | [`debugging.js`](../modulos/07-node-avancado/07-debugging/debugging.js) |

Cada aula possui ainda `README.md` (teoria) e `exercicios.md` (prática). O playground espelhado cobre os tópicos de linguagem dos módulos 01 a 05 em [`playground/`](../playground/); nos módulos 06 e 07 as próprias aulas contêm aplicativos executáveis completos, que cumprem o papel de exemplo estendido.

## Objetivos terminais por módulo

Ao concluir cada módulo, o estudante deve ser capaz de:

**Módulo 01 — Fundamentos**

- Declarar variáveis com `const` e `let`, distinguindo escopos de bloco, função e global.
- Manipular os tipos primitivos, strings, números, arrays e objetos com seus métodos essenciais.
- Construir fluxos de decisão e repetição adequados a cada problema.
- Decompor problemas em funções com parâmetros, retornos e responsabilidade única.

**Módulo 02 — DOM e eventos**

- Selecionar, criar e alterar elementos do documento dinamicamente.
- Registrar ouvintes de eventos e implementar interações reais na página.
- Validar dados de formulários com feedback imediato ao usuário.
- Persistir informações locais com `localStorage` e `sessionStorage`.

**Módulo 03 — Assíncrono e API**

- Diagnosticar e tratar erros com `try/catch`, tipos de erro e mensagens adequadas.
- Serializar e interpretar dados JSON com segurança.
- Escrever código assíncrono com promises e `async/await`.
- Consumir APIs HTTP com `fetch`, tratando respostas e falhas de rede.

**Módulo 04 — POO e JS moderno**

- Modelar entidades com classes, propriedades e métodos.
- Aplicar expressões regulares na validação e extração de padrões textuais.
- Explicar e utilizar closures em funções de alta ordem.
- Descrever o modelo de protótipos e implementar herança entre objetos.

**Módulo 05 — Node.js e npm**

- Executar scripts com Node e compreender seu modelo de execução.
- Organizar código em módulos e utilizar os módulos nativos principais.
- Construir um servidor HTTP simples com roteamento manual.

**Módulo 06 — Express e REST**

- Gerenciar dependências e metadados com npm e `package.json`.
- Estruturar middlewares de requisição e resposta no Express.
- Renderizar páginas com template engines.
- Projetar uma API REST com rotas organizadas e verbos HTTP corretos.

**Módulo 07 — Node avançado**

- Persistir dados em banco de dados a partir de uma aplicação Node.
- Implementar autenticação com senhas protegidas e tokens.
- Receber uploads de arquivos com validação.
- Oferecer comunicação em tempo real com WebSockets, cobrir a aplicação com testes automatizados, configurar ambientes com variáveis de ambiente e depurar programas com ferramentas apropriadas.

## Carga horária sugerida

Carga total aproximada: **90 horas**, distribuída conforme a profundidade e a quantidade de aulas de cada módulo.

| Módulo | Aulas | Carga horária |
| --- | ---: | ---: |
| 01 — Fundamentos | 10 | 24 h |
| 02 — DOM e eventos | 4 | 12 h |
| 03 — Assíncrono e API | 4 | 12 h |
| 04 — POO e JS moderno | 4 | 12 h |
| 05 — Node.js e npm | 3 | 8 h |
| 06 — Express e REST | 4 | 10 h |
| 07 — Node avançado | 7 | 12 h |
| **Total** | **36** | **90 h** |

## Percursos formativos alternativos

| Percurso | Módulos | Carga estimada | Perfil indicado |
| --- | --- | ---: | --- |
| Frontend | 01, 02, 03, 04 | 60 h | Quem atuará com interfaces e aplicações no navegador |
| Backend | 01, 03, 04, 05, 06, 07 | 78 h | Quem atuará com servidores, APIs e bancos de dados |
| Completo | 01 a 07 | 90 h | Formação integral full stack (trilha oficial da disciplina) |

Em todos os percursos, o módulo 01 é obrigatório, pois estabelece o vocabulário comum da trilha.

## Sistema de avaliação

A aprovação em cada módulo combina três instrumentos complementares:

1. **Quiz do módulo**: autoavaliação objetiva ao fim do módulo, com nota mínima de **70 por cento**. É permitido estudar novamente e refazer o quiz quantas vezes forem necessárias; o objetivo é dominio, não punição.
2. **Exercícios e participação**: entrega dos exercícios de cada aula conforme os critérios de aceite declarados nos próprios arquivos `exercicios.md`. Avalia-se progresso honesto, não perfeição inicial.
3. **Projeto de equipe**: aplicação consolidada em equipe, avaliando o produto (funcionamento e qualidade do código) e o processo (histórico de commits, pull requests revisadas e colaboração registrada no repositório). Roteiros disponíveis: [Projeto 01 — Lista de Tarefas Vanilla](../projetos-equipe/projeto-01-lista-de-tarefas-vanilla/) e [Projeto 02 — API de Tarefas Express](../projetos-equipe/projeto-02-api-tarefas-express/).

## Depois da trilha: próximos passos

Concluída a trilha, recomenda-se aprofundar por:

- **TypeScript**: tipagem estática sobre JavaScript, padrão de mercado em projetos grandes.
- **React ou Vue**: frameworks declarativos para interfaces baseadas em componentes.
- **Testes avançados**: mocks, cobertura e testes de integração além da introdução de Jest do módulo 07.
- **Docker**: conteinerização da aplicação para ambientes reproduzíveis.
- **Cloud e deploy**: publicação da API e do frontend em plataformas de nuvem, com CI/CD.
