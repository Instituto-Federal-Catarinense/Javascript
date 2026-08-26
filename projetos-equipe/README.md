# Projetos em Equipe — Simulação de Desenvolvimento Profissional

Nesta pasta você encontra dois projetos completos para serem desenvolvidos em equipes de **3 a 5 estudantes**, simulando o dia a dia de um time de desenvolvimento real: issues, branches, pull requests, revisão de código, sprints e retrospectiva.

Antes de começar, leia obrigatoriamente o guia [`github-playbook/`](../github-playbook/), que define o fluxo de trabalho (GitHub Flow, PRs e sprints) que será seguido nos dois projetos.

## Os projetos

| # | Projeto | Foco | Nível | Tecnologias | Duração |
|---|---------|------|-------|-------------|---------|
| 01 | [Lista de Tarefas Vanilla](./projeto-01-lista-de-tarefas-vanilla/) | Front-end sem frameworks: DOM, eventos, estado e persistência no navegador | Intermediário | HTML, CSS e JavaScript puro + localStorage | 2 semanas |
| 02 | [API de Tarefas Express](./projeto-02-api-tarefas-express/) | Back-end REST: rotas, validações, status HTTP, testes de integração e persistência | Intermediário / Avançado | Node.js, Express, Jest e Supertest | 2 semanas |

## Pré-requisitos

Para qualquer projeto:

- Ter concluído a leitura do [`github-playbook/`](../github-playbook/) (fluxo GitHub Flow, abertura e revisão de PRs, organização em sprints);
- Ter uma conta no GitHub com Git configurado localmente (`git config user.name` e `user.email`);
- Conhecer o fluxo básico: branch por issue, commits semânticos, PR com revisão.

Requisitos específicos:

- **Projeto 01**: ter concluído os módulos [`modulos/01-fundamentos`](../modulos/01-fundamentos) e [`modulos/02-dom-eventos`](../modulos/02-dom-eventos).
- **Projeto 02**: ter concluído os módulos [`modulos/05-node-npm`](../modulos/05-node-npm) e [`modulos/06-express-rest`](../modulos/06-express-rest).

## Como escolher

- **Projeto 01** é ideal se a equipe está mais confortável com visual e interação no navegador, quer ver o resultado na tela a cada commit e ainda está consolidando manipulação do DOM.
- **Projeto 02** é ideal se a equipe já domina JavaScript básico e quer aprender/back-end: requisições HTTP, APIs, testes automatizados e CI. Não há interface visual; tudo é testado via `curl`, Supertest e Insomnia/Postman.
- Equipes maiores ou mais experientes podem fazer **os dois em sequência**: a API do Projeto 02 pode inclusive servir de back-end para o front do Projeto 01 em um ciclo extra.

## Cronograma padrão (2 semanas)

| Período | Atividade |
|---------|-----------|
| Semana 1, dias 1–2 | Kickoff: leitura do briefing, criação do repositório, cadastro das issues no quadro (GitHub Projects), definição de papéis e pareamento inicial. |
| Semana 1, dias 3–5 | Sprint 1 em execução: branches por issue, PRs pequenos e revisados, daily curto (5 min) em pelo menos 3 dias. |
| Início da Semana 2 | Sprint Review + Retrospectiva da Sprint 1; planejamento da Sprint 2. |
| Semana 2, dias 2–4 | Sprint 2 em execução: features restantes, polish, documentação. |
| Último dia | Congelamento de código, ajustes finais, preparação da demo e apresentação. |

Cada projeto tem seu roadmap detalhado de sprints no respectivo README.

## Regras comuns aos dois projetos

1. **`main` protegida**: nenhum commit direto na `main`. Toda mudança entra por Pull Request.
2. **PRs revisados**: todo PR precisa de **pelo menos 1 aprovação** de outro membro da equipe antes do merge. Quem escreveu não pode aprovar o próprio PR.
3. **Commits semânticos**: use o padrão `tipo: descrição curta no imperativo`.
   - `feat:` nova funcionalidade
   - `fix:` correção de bug
   - `docs:` documentação
   - `chore:` tarefas de manutenção/build
   - `test:` testes
   - `refactor:` mudança interna sem alterar comportamento
4. **Uma branch por issue**, sempre vinculada: nomeie como `feat/issue-7-filtros` etc. e mencione o número da issue na descrição do PR (`Closes #7`).
5. **Issues são a fonte da verdade**: só trabalhe no que está cadastrado como issue; novas ideias viram novas issues priorizadas pelo time.
6. **Branches removidas após o merge** e ambiente sempre atualizado (`git pull origin main` antes de criar nova branch).
7. **Respeite o DoD** (Definition of Done) de cada projeto antes de considerar uma issue concluída.

Bom trabalho e boa sprint!
