# Capítulo 05 - Simulação de projeto em equipe (2 semanas)

Roteiro completo para conduzir, em 10 dias úteis, um ciclo real de desenvolvimento: da criação do repositório à entrega avaliada e à retrospectiva final.

## 1. Formato

| Item | Recomendação |
| --- | --- |
| Tamanho da equipe | 4 a 6 pessoas |
| Duração | 2 semanas (10 dias úteis): Sprint 1 = dias 1 a 5; Sprint 2 = dias 6 a 10 |
| Produto sugerido | Aplicação JavaScript pequena e testável: lista de tarefas, calculadora, quiz, conversor de moedas |
| Ferramentas | GitHub (issues, projects, actions) + canal de chat da equipe |
| Cerimônias mínimas | 1 Planning, dailies diárias, 2 Reviews, 2 Retrospectivas |

## 2. Setup inicial (dia 1)

### 2.1 Criar o repositório da equipe

```bash
# cria o repositorio e ja clona (requer gh autenticado: gh auth login)
gh repo create projeto-equipe-1 --private --clone
cd projeto-equipe-1

# bootstrap minimo de um projeto Node.js
npm init -y
git add package.json
git commit -m "chore: inicializa o projeto node"
git push origin main
```

Alternativa sem CLI: crie pela web em https://github.com/new e siga com `git clone git@github.com:ORG/projeto-equipe-1.git`.

### 2.2 Convidar os membros

Web: **Settings > Collaborators > Add people** e insira os usuários do GitHub. Cada membro aceita o convite pelo e-mail recebido. Função sugerida: **Write** (todos podem enviar branches e PRs; ninguém além do professor precisa ser admin).

### 2.3 Proteger a main exigindo PR

Web: **Settings > Branches > Add branch protection rule**

- Branch name pattern: `main`
- Marque **Require a pull request before merging**
- Required approvals: `1`
- Marque **Require status checks to pass** e selecione o check `CI` (aparece após o primeiro push com o workflow)
- (Opcional) Marque **Require conversation resolution before merging**

### 2.4 Criar as labels

```bash
gh label create prioridade-alta  --color D93F0B --description "Feito primeiro"
gh label create prioridade-media --color FBCA04 --description "Importante, mas flexivel"
gh label create prioridade-baixa --color 0E8A16 --description "Se sobrar capacidade"
gh label create tipo-bug         --color B60205 --description "Algo nao funciona como deveria"
gh label create tipo-feature     --color 1D76DB --description "Nova funcionalidade ou melhoria"
```

### 2.5 Criar as milestones das sprints

Web: **Issues > Milestones > New milestone**: crie `Sprint 1` (due date no dia 5) e `Sprint 2` (due date no dia 10).

Ou pelo CLI (ajuste as datas ao calendário da turma):

```bash
gh api repos/:owner/:repo/milestones -f title="Sprint 1" -f due_on="2026-09-04T23:59:59Z"
gh api repos/:owner/:repo/milestones -f title="Sprint 2" -f due_on="2026-09-11T23:59:59Z"
```

### 2.6 Importar o backlog do projeto

1. Crie as issues do produto usando os modelos de `.github/ISSUE_TEMPLATE/` (tarefa, bug report, melhoria); os templates didáticos comentados em `github-playbook/templates/` servem de guia de preenchimento;
2. Aplique labels (`prioridade-*` e `tipo-*`) e a milestone correta em cada issue;
3. Monte o quadro Kanban em **Projects > New project**, com as colunas Backlog, To Do, In progress, Review e Done (regras no capítulo 04);
4. O PO ordena o Backlog por valor para quem usa o produto.

## 3. Regras do jogo

| Regra | Detalhe | Como fiscalizar |
| --- | --- | --- |
| PR pequeno | Máximo de 300 linhas alteradas; acima disso, quebre a tarefa | Aba **Files changed** do PR |
| Revisão obrigatória | Pelo menos 1 aprovação antes do merge | Proteção da `main` bloqueia sozinha |
| CI verde | Lint e testes passando no último commit | Check do workflow `ci.yml` no PR |
| Commits semânticos | `tipo(escopo): descricao` em todos os commits | Checklist do revisor |
| Issue vinculada | Todo PR fecha pelo menos 1 issue com `Closes #N` | Descrição do PR |
| Zero push direto na main | Nem para "conserto rapidinho" | Proteção da `main` |
| Review em até 24h | Revisor responde, mesmo que parcialmente | Combinado da equipe; SM cobra na daily |
| Rotatividade de papéis | PO e QA trocam de pessoa ao entrar na Sprint 2 | Tabela de papéis fixada no repositório |

## 4. Roteiro dia a dia

| Dia | Atividade | Entregável do dia | Papel responsável |
| --- | --- | --- | --- |
| 1 | Kickoff: definir produto; setup do repositório (colaboradores, main protegida, labels, milestones); importar e priorizar backlog; montar o Kanban | Repositório configurado + backlog priorizado | SM conduz; PO prioriza; todos participam |
| 2 | Planning da Sprint 1; conferir DoR; estimar; distribuir issues; criar as primeiras branches | Sprint backlog no To Do + primeiras branches | PO e SM organizam; Devs assumem itens |
| 3 | Desenvolvimento; daily; abertura dos primeiros PRs; primeiras revisões | PRs abertos e revisados | Devs; QA inicia o roteiro de testes |
| 4 | Continuidade: revisões, merges e resolução de conflitos; daily | Features mescladas com CI verde | Devs e revisores; SM destrava impedimentos |
| 5 | Review da Sprint 1 (demo) + Retrospectiva 1 | Demo aceita + ata com até 3 ações de melhoria | Todos; PO aceita entregas; SM registra a ata |
| 6 | Planning da Sprint 2 incorporando as melhorias da retro; rotação de PO e QA | Sprint backlog 2 no To Do + papéis atualizados | Novo PO conduz; SM apoia |
| 7 | Desenvolvimento; daily; QA intensivo explorando o sistema | Issues `tipo-bug` abertas com passos claros | Devs; QA lidera a caça a bugs |
| 8 | Correção de bugs via PRs (`fix`); revisões cruzadas; daily | Bugs priorizados corrigidos e mesclados | Devs; QA revalida cada correção |
| 9 | Estabilização: congelar features novas; atualizar README e documentação; fechar pendências de prioridade-baixa | Release candidata + documentação em dia | Todos; PO valida o escopo final |
| 10 | Review final (demo completa para a turma); conferência do checklist de entrega; Retrospectiva final | Projeto entregue + retrospectiva final registrada | Todos; professor acompanha e avalia |

## 5. Avaliação

### Individual

A nota individual considera evidências que o próprio GitHub registra. IMPORTANTE: volume de linhas NÃO é métrica de qualidade; considere o papel exercido na sprint.

| Critério | Evidência no GitHub | Peso sugerido |
| --- | --- | --- |
| Contribuição em código | PRs mesclados com commits semânticos e coerentes | 30% |
| Colaboração em revisão | Reviews com comentários úteis e aprovações responsáveis | 20% |
| Gestão do trabalho | Issues bem escritas, quadro atualizado, atas quando SM | 15% |
| Qualidade técnica | CI verde, testes escritos, pouco retrabalho após review | 25% |
| Participação nos rituais | Presença e engajamento registrados nas atas | 10% |

Ferramentas de apoio: **Insights > Contributors** (participação) e **Insights > Pulse** (atividade de PRs e issues). Quem fez QA pode ter menos commits e ainda assim contribuir muito: avalie a qualidade do relatório de testes e dos bugs registrados.

### Em equipe

- Checklist final de entrega (seção 6) cumprido;
- Demo final clara, mostrando o produto funcionando de ponta a ponta;
- Histórico do repositório conta a história do processo: branches, PRs, revisões e CI.

## 6. Checklist final de entrega

- [ ] README com descrição do produto, pré-requisitos, instalação e como rodar os testes;
- [ ] `main` protegida e histórico SEM pushes diretos;
- [ ] 2 milestones criadas e concluídas (Sprint 1 e Sprint 2);
- [ ] Pelo menos 10 issues criadas com labels corretas e fechadas;
- [ ] Pelo menos 8 PRs mesclados com aprovação e CI verde;
- [ ] Commits seguindo a convenção semântica em todo o histórico;
- [ ] `.gitignore` presente; nenhum segredo ou arquivo binário versionado;
- [ ] Workflow de CI configurado e verde no último commit da `main`;
- [ ] Kanban final coerente (todas as cartas concluídas em Done);
- [ ] Atas das duas retrospectivas salvas (modelo em `templates/retrospectiva.md`).

## 7. Retrospectiva final guiada

Roteiro sugerido (30 a 40 minutos):

1. Levantamento individual no formato **start / stop / continue**: todos falam;
2. Discussão orientada:
   - Qual papel foi o mais difícil? Por quê?
   - Qual ritual trouxe mais valor? Qual podemos enxugar?
   - Houve conflito? Como foi resolvido? O que aprendemos com ele?
   - O que faremos de diferente no próximo projeto?
3. Eleger no máximo 3 compromissos e transformá-los em issues `melhoria` no repositório;
4. Registrar tudo no modelo [`templates/retrospectiva.md`](templates/retrospectiva.md) e guardar a ata no repositório.

Fim da simulação: o repositório fica de portfólio da equipe, com processo e produto documentados.
