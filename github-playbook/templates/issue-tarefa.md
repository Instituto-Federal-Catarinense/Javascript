# Template didático - Issue de tarefa

Modelo para issues de funcionalidades novas ou trabalhos planejados. Este arquivo é MATERIAL DE ESTUDO: os comentários explicam o propósito de cada campo e não aparecem na issue publicada.

Título sugerido da issue: `[tarefa] verbo + objeto`, curto e específico (ex.: `[tarefa] adicionar marcacao de tarefas concluidas`).

A versão enxuta usada automaticamente pelo GitHub está em `.github/ISSUE_TEMPLATE/tarefa.md`.

## Modelo para copiar

```markdown
## O que precisa ser feito?

<!-- Explique o objetivo em 1 a 3 frases. Diga O QUE fazer, nao COMO. -->
<!-- Exemplo: permitir que o usuario marque tarefas da lista como concluidas. -->

## Por que é necessário?

<!-- Qual problema isso resolve ou qual valor entrega? Ligue com a visao do produto. -->
<!-- Exemplo: hoje o usuario nao consegue acompanhar seu progresso na lista. -->

## Tarefas

<!-- Quebre o trabalho em passos pequenos e verificaveis. -->
<!-- Checklists permitem acompanhar o andamento dentro da propria issue. -->
- [ ] Implementar checkbox na lista de tarefas
- [ ] Persistir o estado ao recarregar a pagina
- [ ] Adicionar teste para marcacao e desmarcacao

## Critérios de aceitação

<!-- Condicoes objetivas e testaveis: dado X, quando Y, entao Z. -->
<!-- O QA e o PO vao conferir item a item na Review; escreva como se fosse teste. -->
- [ ] Dada uma tarefa pendente, quando clico no checkbox, então ela aparece como concluída
- [ ] Ao recarregar a página, o estado marcado permanece salvo

## Informações adicionais

<!-- Prints, links, referencias e dependencias de outras issues. -->
<!-- NAO esqueca de aplicar: labels (prioridade-*, tipo-feature), milestone da sprint e assignee. -->
```

## Exemplo preenchido (resumido)

| Campo | Conteúdo |
| --- | --- |
| Título | `[tarefa] adicionar marcacao de tarefas concluidas` |
| Labels | `tipo-feature`, `prioridade-alta` |
| Milestone | `Sprint 1` |
| O que | Permitir marcar tarefas como concluídas clicando no checkbox |
| Por quê | Usuário precisa visualizar seu progresso na lista do dia |
| Critério 1 | Dada uma tarefa pendente, quando clico no checkbox, ela aparece riscada |
| Critério 2 | Recarregar a página mantém o estado marcado |

Lembrete: uma issue só entra na sprint se atender à Definition of Ready do capítulo 04.
