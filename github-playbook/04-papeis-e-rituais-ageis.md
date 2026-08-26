# Capítulo 04 - Papéis e rituais ágeis

A equipe simula um time de produto com papéis ROTATIVOS a cada sprint: todos experimentam todas as funções durante o curso. A rotação fica registrada em uma tabela fixada (pin) no repositório.

## 1. Papéis por sprint

| Papel | Quantidade | Responsabilidades | Entregável principal | Tempo semanal estimado |
| --- | --- | --- | --- | --- |
| Product Owner (PO) | 1 | Priorizar o backlog; escrever issues com critérios de aceitação; decidir o escopo da sprint; aceitar ou devolver entregas na Review | Backlog priorizado e issues atendendo a Definition of Ready | 1 a 2 horas |
| Scrum Master (SM) | 1 | Facilitar os rituais e marcar horários; remover impedimentos; manter o quadro Kanban e as atas em dia | Quadro atualizado + ata dos rituais com as ações acordadas | 1 a 2 horas |
| Dev 1..n | Restante da equipe | Implementar issues (branch, commits, PR); revisar PRs de colegas em até 24h; manter o CI verde | PRs aprovados e mesclados na `main` | 4 a 8 horas |
| QA | 1 | Testar o que foi mesclado; registrar bugs reproduzíveis com passos claros; validar critérios de aceitação antes da demo | Relatório de testes + issues `tipo-bug` bem documentadas | 1 a 2 horas |

Notas:

- Em equipes de 3 ou 4 pessoas, PO e SM podem ser acumulados por uma pessoa;
- QA também programa: o papel é de foco, não de exclusividade;
- Quem é Dev continua revisando PRs: escrever código não dispensa a revisão do colega.

## 2. Rituais

Visão geral:

| Ritual | Quando | Duração sugerida | Saída esperada |
| --- | --- | --- | --- |
| Planning | Primeiro dia da sprint | 45 a 60 minutos | Sprint backlog acordado, com responsáveis e milestone |
| Daily | Todos os dias úteis | 10 a 15 minutos | Impedimentos visíveis e plano do dia |
| Review (demo) | Último dia da sprint | 30 minutos | Funcionalidades demonstradas e aceitas pelo PO |
| Retrospectiva | Logo após a Review | 30 minutos | De 1 a 3 ações de melhoria para a próxima sprint |

### Planning (o que cabe na sprint?)

Entrada: backlog priorizado, com issues no nível da Definition of Ready. Roteiro:

1. O PO apresenta os itens prioritários e seus critérios de aceitação;
2. A equipe discute dúvidas, riscos técnicos e dependências;
3. Cada item é estimado (camisetas P/M/G ou pontos);
4. A sprint é preenchida até caber na capacidade REAL da semana (conte aulas, provas e trabalhos);
5. Cada item sai do Planning com responsável, milestone e posição no To Do.

Pergunta-guia: "isso CABE na semana de todo mundo?" Prefira menos itens concluídos a muitos itens pela metade.

### Daily (formato das 3 perguntas)

Síncrona (de pé, presencial ou em chamada curta):

1. O que eu fiz desde a última daily?
2. O que vou fazer até a próxima?
3. Existe algo me bloqueando?

Assíncrona (turma que não se encontra no mesmo horário): mensagem fixada no canal da equipe até as 10h, no mesmo formato:

```text
[DAILY 2026-08-25] Maria - Dev 1
1. Fiz: revisei o PR #14 e movi a issue #8 para Done.
2. Farei: comecar a issue #9 (filtro por data).
3. Bloqueio: nenhuma.
```

Impedimento levantado é dívida do SM: registrar, tratar e responder no mesmo dia. Daily não é reunião de cobrança com o professor.

### Review (demo)

- Cada responsável demonstra a funcionalidade FUNCIONANDO, no próprio ambiente (nada de slides);
- O PO confere os critérios de aceitação item a item e aceita ou devolve;
- O QA apresenta os bugs encontrados e o estado dos testes;
- Item incompleto volta ao backlog SEM culpa: sprint curta serve justamente para perceber cedo.

### Retrospectiva (start / stop / continue)

Formato de três colunas, preenchidas individualmente antes da conversa:

| Start (começar) | Stop (parar) | Continue (manter) |
| --- | --- | --- |
| O que deveríamos começar a fazer? | O que deveríamos parar de fazer? | O que está funcionando e deve continuar? |
| Ex.: puxar a `main` toda manhã | Ex.: abrir PRs de 500 linhas | Ex.: dailies curtas e pontuais |

Regras: fale de fatos e processos, não de pessoas; segurança psicológica primeiro; eleja no MÁXIMO 3 ações; registre cada ação como issue `melhoria` para a próxima sprint. Modelo: [`templates/retrospectiva.md`](templates/retrospectiva.md).

## 3. Definition of Ready

Uma issue está pronta para entrar na sprint quando:

- [ ] O título segue o padrão `[tipo] acao-objeto` (ex.: `[tarefa] adicionar filtro por data`);
- [ ] A descrição explica o problema e o objetivo;
- [ ] Existem critérios de aceitação verificáveis;
- [ ] Foi estimada pela equipe;
- [ ] As dependências estão mapeadas (ou não existem);
- [ ] Tem labels aplicadas (`prioridade-*`, `tipo-*`) e milestone definida.

## 4. Definition of Done

Uma issue só está pronta quando:

- [ ] O código foi escrito em branch própria com commits semânticos;
- [ ] Existe um PR aberto, com descrição e `Closes #N`;
- [ ] O PR recebeu pelo menos 1 aprovação de revisão;
- [ ] O CI está verde (lint e testes);
- [ ] O merge foi feito na `main`;
- [ ] Os critérios de aceitação foram validados (QA/PO);
- [ ] A documentação foi atualizada, quando aplicável;
- [ ] A branch remota foi apagada e a issue foi fechada automaticamente.

## 5. Quadro Kanban sugerido

Colunas: **Backlog > To Do > In progress > Review > Done**

| Coluna | Limite de itens (WIP) | Entra quando | Sai quando |
| --- | --- | --- | --- |
| Backlog | Sem limite | Issue criada e priorizada pelo PO | PO a move para To Do no Planning |
| To Do | Capacidade da sprint (ex.: 8 itens) | Atende integralmente à Definition of Ready | Alguém assume e cria a branch |
| In progress | 2 por pessoa | Branch criada e vinculada à issue | PR aberto |
| Review | 3 itens no total | PR aberto e CI disparado | 1 aprovação + CI verde + merge |
| Done | Sem limite | Merge concluído na `main` | Issue fechada sozinha via `Closes #N` |

Regras de transição complementares:

1. Nenhuma coluna é pulada: nada vai direto do To Do para o Done;
2. WIP cheio significa PARAR de começar e AJUDAR a terminar: quem terminou sua tarefa e não pode pegar outra deve revisar os PRs da coluna Review;
3. Item parado há mais de 1 dia ganha a label `bloqueado` e vira assunto obrigatório da daily seguinte;
4. Ao mover para In progress, a issue ganha responsável (assignee) e o link da branch/PR.

Próximo capítulo: [05-simulacao-de-projeto-em-equipe.md](05-simulacao-de-projeto-em-equipe.md).
