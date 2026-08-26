# Playbook de trabalho colaborativo com Git e GitHub

Guia completo, em português, para simular em aula o dia a dia de uma equipe real de desenvolvimento de software: configuração do ambiente, fluxo de trabalho com Pull Requests, code review, papéis ágeis e uma simulação completa de duas semanas.

## Para quem é

| Público | Como usar |
| --- | --- |
| Estudantes de curso técnico | Leia os capítulos na ordem sugerida e participe da simulação do capítulo 05 |
| Professor ou mediador | Use o capítulo 05 como roteiro de condução e os templates como material de apoio |
| Equipes iniciantes em projetos reais | Adote o fluxo e as convenções como acordo de trabalho do time |

## Pré-requisitos

- Computador com macOS, Linux ou Windows 10/11;
- Conta gratuita no GitHub (https://github.com/signup);
- Terminal acessível (no Windows, use o Git Bash instalado junto com o Git);
- Editor de código (recomendado: VS Code);
- Noções básicas de linha de comando (navegar entre pastas, executar comandos);
- Noções básicas de JavaScript: os exemplos usam projetos Node.js.

## Ordem de leitura sugerida

| Ordem | Capítulo | Você vai aprender |
| --- | --- | --- |
| 1 | [01-configuracao-inicial.md](01-configuracao-inicial.md) | Instalar e configurar o Git, criar chave SSH, decidir entre clone e fork |
| 2 | [02-fluxo-de-trabalho.md](02-fluxo-de-trabalho.md) | GitHub Flow, commits semânticos, comandos para desfazer erros e boas práticas de `.gitignore` |
| 3 | [03-pull-requests-e-code-review.md](03-pull-requests-e-code-review.md) | Abrir e revisar PRs pela web e pelo `gh`, resolver conflitos, escolher estratégia de merge |
| 4 | [04-papeis-e-rituais-ageis.md](04-papeis-e-rituais-ageis.md) | Papéis rotativos, Planning, Daily, Review, Retrospectiva, DoR, DoD e quadro Kanban |
| 5 | [05-simulacao-de-projeto-em-equipe.md](05-simulacao-de-projeto-em-equipe.md) | Roteiro completo da simulação de duas semanas, com regras e avaliação |
| 6 | [templates/](templates/) | Modelos didáticos comentados de issue, pull request e retrospectiva |

## O fluxo em uma imagem

```text
+----------------------------------------------------------------------------+
|                              RESUMO DO FLUXO                               |
+----------------------------------------------------------------------------+

   CONFIGURACAO            BRANCH E COMMITS              PULL REQUEST
+----------------+      +-----------------------+     +------------------------+
| git config     |      | git switch -c         |     | abrir PR (web ou CLI)  |
| chave SSH      | ---> | feat/minha-tarefa     | --> | descricao + Closes #N  |
| clone ou fork  |      | commits semanticos    |     | revisores convocados   |
+----------------+      +-----------------------+     +------------------------+
                                                            |
                                                            v
+----------------+      +-----------------------+     +------------------------+
| apagar branch; |      | merge na main apos    |     | CODE REVIEW            |
| git switch     | <--- | 1 aprovacao e CI      | <-- | checklist do revisor;  |
| main + pull    |      | verde                 |     | comentarios educados   |
+----------------+      +-----------------------+     +------------------------+
        |
        v
   repete o ciclo para a proxima tarefa
```

## Acordos rápidos da equipe

- A branch `main` está sempre pronta para entrega e ninguém envia código direto para ela;
- Todo trabalho nasce em uma issue e vira uma branch descritiva;
- Todo Pull Request precisa de pelo menos uma aprovação e CI verde antes do merge;
- Commits seguem a convenção semântica (`feat`, `fix`, `docs`, ...);
- Conflitos e divergências vão aparecer: resolvê-los com respeito faz parte do aprendizado.

Bom estudo e bom trabalho em equipe.
