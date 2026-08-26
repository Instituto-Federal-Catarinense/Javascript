# JavaScript Educacional

Trilha completa de ensino-aprendizagem de **JavaScript** (frontend e backend) com
metodologia ativa: teoria curta, exemplos comentados, playground manipulável,
exercícios por aula e projetos colaborativos que simulam desenvolvimento de
software em equipe com Git/GitHub.

Mantido pelo Instituto Federal Catarinense (IFC).

---

## Como usar este repositório

1. **Estude na ordem** pelos `modulos/` (cada módulo tem um mapa de aulas no seu README).
2. Para cada aula: leia o `README.md` → rode o exemplo → experimente o
   [playground](playground/) → resolva o `exercicios.md`.
3. Ao fim de cada módulo, faça o `quiz.md` (gabarito comentado incluído).
4. Aplique tudo num projeto de equipe em [projetos-equipe/](projetos-equipe/)
   seguindo o [github-playbook/](github-playbook/) (branches, PRs, code review, sprints).

## Estrutura do repositório

```
├─ modulos/                     # Trilha de estudo (36 aulas em 7 módulos)
│  ├─ 01-fundamentos/           # variáveis, tipos, operadores, funções, arrays, objetos
│  ├─ 02-dom-eventos/           # DOM, eventos, formulários, Web Storage
│  ├─ 03-assincrono-api/        # erros, JSON, promises/async-await, fetch
│  ├─ 04-poo-js-moderno/        # classes, regex, closures, protótipos
│  ├─ 05-node-npm/              # Node, módulos nativos, servidor HTTP
│  ├─ 06-express-rest/          # npm, middleware, templates, API REST
│  └─ 07-node-avancado/         # banco, auth, upload, websockets, testes, env, debug
│     └─ cada módulo: README.md + quiz.md + solucoes/
│     └─ cada aula:    README.md + exemplo executável + exercicios.md
├─ playground/                  # Exemplos completos comentados linha a linha (espelham as aulas)
├─ projetos-equipe/             # Simulação de desenvolvimento em equipe (3–5 pessoas)
│  ├─ projeto-01-lista-de-tarefas-vanilla/   # frontend vanilla + GitHub Flow
│  └─ projeto-02-api-tarefas-express/        # API REST Express + PRs revisados + CI
├─ github-playbook/             # Guia colaborativo: git, commits semânticos, PRs, papéis ágeis
│  └─ templates/                # Modelos de issue, PR e retrospectiva
├─ docs/                        # CURRICULUM.md, CONTRIBUTING.md, guia-do-professor.md
├─ .github/                     # Templates de issue/PR e workflow de CI (lint + testes)
└─ legado/                      # Material histórico (sem manutenção) da disciplina anterior
```

## Trilhas sugeridas

| Percurso | Módulos | Projeto |
|---|---|---|
| Completa | 01 → 07 | 01 e 02 |
| Frontend | 01 → 02 → 03 → 04 | 01 |
| Backend | 01 → 03 → 04 → 05 → 06 → 07 | 02 |

Detalhes em [docs/CURRICULUM.md](docs/CURRICULUM.md).

## Requisitos

- Node.js 18 ou superior (o playground usa `fetch` nativo a partir do módulo 03)
- Git configurado ([como configurar](github-playbook/01-configuracao-inicial.md))

```bash
npm install        # instala eslint/jest usados na verificação
npm run lint       # estilo de código
npm test           # testes automatizados
node playground/01-fundamentos/08-arrays.js   # qualquer playground roda assim
```

## Contribuindo

Leia [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md). Em resumo:
issue → branch `feat/descricao` → commits semânticos → pull request com revisão.
Professores: comece por [docs/guia-do-professor.md](docs/guia-do-professor.md).

## Licença

MIT.
