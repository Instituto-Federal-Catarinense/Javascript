# Projeto 02 — API REST de Tarefas (Node.js + Express)

API REST para gerenciamento de tarefas. Começa com dados **em memória** (array no servidor) e evolui ao longo das sprints: validações centralizadas, testes de integração, persistência em arquivo JSON e extras.

O scaffold já sobe um servidor Express funcional, mas **todas as rotas respondem `501 Not Implemented`** — é a equipe que as implementa issue a issue.

---

## Briefing do produto

Um time de produto quer uma API de tarefas para alimentar futuros clientes (web, mobile). Requisitos:

- CRUD completo de tarefas em `/tarefas`, seguindo convenções REST;
- Respostas JSON com **status HTTP corretos** (200/201/204/400/404);
- Validações consistentes (título obrigatório, id inexistente retorna 404);
- Testes automatizados de integração rodando no CI do GitHub;
- Evolução planejada: paginação, busca, persistência em arquivo e autenticação simples.

Cada tarefa tem o formato: `{ "id": 1, "titulo": "Estudar Git", "concluida": false }`.

### Estrutura do scaffold

```
projeto-02-api-tarefas-express/
├── package.json
├── .gitignore
├── src/
│   ├── app.js                  # cria o app Express (exportado p/ testes)
│   ├── server.js               # sobe o servidor na porta 3000
│   └── routes/
│       └── tarefas.router.js   # rotas + "banco" em memória (TODOs aqui)
└── tests/
    └── tarefas.test.js         # esqueleto de testes com supertest
```

Para rodar localmente (após `npm install`, que cada dev faz na própria máquina):

```bash
npm start   # inicia em http://localhost:3000
npm test    # roda o Jest
```

---

## Endpoints alvo

Todos recebem e retornam JSON (`Content-Type: application/json`), exceto o DELETE bem-sucedido, que não tem corpo.

| Método | Rota | Sucesso | Erros esperados | Validações e regras |
|--------|------|---------|-----------------|---------------------|
| GET | `/tarefas` | `200` + array de tarefas | — | Base para paginação na issue 10 |
| GET | `/tarefas/:id` | `200` + a tarefa | `404` se id inexistente | `id` numérico válido |
| POST | `/tarefas` | `201` + tarefa criada (com `id`) | `400` sem corpo, sem `titulo` ou `titulo` vazio/só espaços | `titulo`: string obrigatória; `concluida` assume `false` por padrão |
| PUT | `/tarefas/:id` | `200` + tarefa atualizada | `400` campos inválidos; `404` id inexistente | Aceita atualizar `titulo` e/ou `concluida`; ignora tentativa de mudar `id` |
| DELETE | `/tarefas/:id` | `204`, sem corpo | `404` id inexistente | Remove definitivamente |

Regra de ouro: **status correto é requisito, não detalhe**. PR que retorna `200` num POST será reprovado na review.

---

## Backlog inicial (~14 issues)

Copie para o GitHub no primeiro dia. Ordem sugerida dentro de cada sprint respeita prioridade e dependências.

| # | Issue (título) | Descrição curta | Label | Prioridade | Estimativa |
|---|----------------|-----------------|-------|------------|------------|
| 1 | Implementar GET /tarefas | Retornar `200` com o array completo em JSON (hoje está 501). | feature | Alta | P |
| 2 | Implementar POST /tarefas | Criar tarefa com id incremental, `concluida: false`; retornar `201` e a tarefa criada. | feature | Alta | P |
| 3 | Validar corpo do POST (400) | Sem corpo, sem `titulo`, `titulo` não-string ou só espaços deve retornar `400` com mensagem clara. | feature | Alta | M |
| 4 | Implementar GET /tarefas/:id | Retornar `200` com a tarefa ou `404` quando o id não existir. | feature | Alta | P |
| 5 | Implementar PUT /tarefas/:id | Atualizar `titulo` e/ou `concluida`; `200` com a versão nova, `400` inválido, `404` inexistente. | feature | Alta | M |
| 6 | Implementar DELETE /tarefas/:id | Remover e responder `204` sem corpo; `404` se não existir. | feature | Alta | P |
| 7 | Cobrir o CRUD com supertest | Implementar os `it.todo` de tests/tarefas.test.js cobrindo casos felizes e de erro (200/201/204/400/404). | test | Alta | M |
| 8 | Configurar CI com GitHub Actions | Workflow que roda `npm test` em todo push e PR; PR só entra com CI verde. | chore | Média | M |
| 9 | Extrair middleware validarTarefa | Centralizar as validações de título/corpo num middleware reutilizável pelo POST e PUT. | chore | Média | M |
| 10 | Middleware global de erros + 404 | Handler único de erros e resposta padronizada para rotas inexistentes. | chore | Média | M |
| 11 | Paginação em GET /tarefas | Query strings `?pagina=1&limite=10`; responder `{ dados, total, pagina, limite, totalPaginas }`. | feature | Média | M |
| 12 | Busca por título ?busca=texto | Filtrar títulos case-insensitive combinando com a paginação. | feature | Baixa | P |
| 13 | Persistir em db.json com fs/promises | Carregar tarefas ao iniciar e gravar após cada mutação; substituir o array volátil por camada de acesso a dados. | feature | Alta | G |
| 14 | Autenticação simples via header x-api-token | Rotas de escrita (POST/PUT/DELETE) exigem token fixo configurável por `.env`; sem token, `401`. | feature | Extra | G |

Legenda de estimativa: **P** = até meio dia; **M** = cerca de um dia; **G** = dois dias ou mais.

---

## Coleção curl pronta

Com o servidor rodando (`npm start`), teste todos os endpoints:

```bash
BASE=http://localhost:3000

# Listar todas as tarefas (esperado: 200)
curl -i "$BASE/tarefas"

# Criar uma tarefa (esperado: 201 + tarefa criada)
curl -i -X POST "$BASE/tarefas" \
  -H 'Content-Type: application/json' \
  -d '{"titulo":"Estudar Git"}'

# Criar com titulo em branco (esperado: 400)
curl -i -X POST "$BASE/tarefas" \
  -H 'Content-Type: application/json' \
  -d '{"titulo":"   "}'

# Criar sem corpo valido (esperado: 400)
curl -i -X POST "$BASE/tarefas" \
  -H 'Content-Type: application/json' \
  -d '{}'

# Buscar a tarefa 1 (esperado: 200)
curl -i "$BASE/tarefas/1"

# Buscar id inexistente (esperado: 404)
curl -i "$BASE/tarefas/999"

# Atualizar titulo e status da tarefa 1 (esperado: 200)
curl -i -X PUT "$BASE/tarefas/1" \
  -H 'Content-Type: application/json' \
  -d '{"titulo":"Estudar GitHub Flow","concluida":true}'

# Remover a tarefa 1 (esperado: 204, sem corpo)
curl -i -X DELETE "$BASE/tarefas/1"

# Remover de novo (esperado: 404)
curl -i -X DELETE "$BASE/tarefas/1"
```

---

## Regras de colaboração

Seguimos o [`github-playbook/`](../../github-playbook/) com reforço destas regras específicas de API:

1. **Feature branch por issue**: nomes como `feat/issue-2-post-tarefas`, `test/issue-7-cobertura-crud`, `chore/issue-8-ci`;
2. **PR obrigatório para qualquer mudança**, com descrição contendo `Closes #N` e exemplos de requisição/resposta testados via curl;
3. **No mínimo 1 review aprovada** antes do merge; quem escreveu não aprova o próprio PR;
4. **CI verde**: o PR só recebe merge com `npm test` passando no GitHub Actions (a partir da issue 8); até lá, a pessoa revisora roda `npm test` localmente antes de aprovar;
5. **Status HTTP fazem parte do contrato**: revisores devem conferir a tabela de endpoints acima em cada PR;
6. Nenhum commit direto na `main`; branches deletadas após o merge.

---

## Roadmap das sprints

### Sprint 1 — CRUD completo e confiável

**Meta:** os 5 endpoints implementados conforme a tabela, com status corretos e primeira bateria de testes automatizados.

- Issues: **1 a 7** (rotas, validações básicas, testes supertest).
- Critério de sucesso: a coleção curl acima produz exatamente os status esperados; `npm test` cobre casos felizes e erros.

### Sprint 2 — Qualidade, persistência e extras

**Meta:** API robusta com validação centralizada, CI, paginação, busca e persistência em arquivo.

- Issues: **8 a 14** (CI, middlewares, paginação, busca, fs/JSON, auth simples) + documentação final dos endpoints no README.
- Fim da sprint: demo via curl/Postman mostrando cada endpoint, retrospectiva do projeto.

Se a equipe tiver 5 pessoas, antecipe extras propostos pela própria equipe como novas issues (ex.: rate limit simples, Docker, coleção Postman exportada).

---

## Definition of Done (vale para toda issue)

- [ ] Código revisado em PR com **pelo menos 1 aprovação**;
- [ ] **Testes passando** (`npm test`) localmente e no CI;
- [ ] Novos endpoints/comportamentos cobertos por teste;
- [ ] Status HTTP conforme a tabela de endpoints;
- [ ] Sem `console.log` de depuração esquecido (o log do server.js é permitido);
- [ ] Estilo consistente: 2 espaços, aspas simples, ponto e vírgula;
- [ ] README atualizado quando a mudança altera o uso da API;
- [ ] Issue fechada pelo PR (`Closes #N`) e branch removida.
