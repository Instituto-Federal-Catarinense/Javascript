# Projeto 01 — Lista de Tarefas (Vanilla JS)

App de lista de tarefas construído **sem frameworks**, usando HTML, CSS e JavaScript puro com persistência no `localStorage`. O scaffold já abre direto no navegador (basta abrir `index.html`) e já entrega o básico funcionando; o trabalho da equipe é evoluir o produto seguindo o fluxo profissional descrito no [`github-playbook/`](../../github-playbook/).

---

## Briefing do produto

O cliente "Coordenação do Curso" pediu um aplicativo web simples de gestão de tarefas pessoais, que rode 100% no navegador (sem servidor, sem instalação). Requisitos de negócio:

- O usuário deve poder cadastrar, visualizar, concluir e remover tarefas;
- As tarefas devem continuar salvas quando a página for recarregada ou o navegador for fechado;
- O usuário deve poder filtrar a lista (todas / ativas / concluídas) e ver rapidamente quantas tarefas ainda estão pendentes;
- Desejável: modo escuro e edição rápida do texto da tarefa.

A primeira versão (o scaffold deste repositório) já cobre parte do CRUD e a persistência. A equipe é responsável por corrigir defeitos, adicionar as demais features e entregar um produto polido, **seguindo GitHub Flow com PRs revisados**.

### Estrutura do scaffold

```
projeto-01-lista-de-tarefas-vanilla/
├── index.html      # estrutura semântica da página
├── css/
│   └── styles.css  # estilos (já tem variáveis para tema claro/escuro)
└── js/
    └── app.js      # estado + lógica (procure os comentários TODO(issue-N))
```

Os comentários `// TODO(issue-N):` no `app.js` apontam exatamente onde cada issue do backlog deve ser implementada.

---

## User stories

1. Como **usuária**, quero **adicionar uma tarefa digitando o texto e pressionando Enter ou clicando no botão**, para **registrar rapidamente o que preciso fazer**.
2. Como **usuária**, quero **marcar uma tarefa como concluída clicando em um checkbox**, para **distinguir o que fiz do que ainda falta**.
3. Como **usuária**, quero **remover tarefas que não são mais relevantes**, para **manter minha lista limpa**.
4. Como **usuária**, quero **que minhas tarefas continuem salvas ao recarregar a página**, para **não perder meu progresso**.
5. Como **usuária**, quero **filtrar entre todas, ativas e concluídas**, para **focar no que importa agora**.
6. Como **usuária**, quero **ver um contador de tarefas pendentes**, para **medir meu avanço do dia**.
7. Como **usuária**, quero **alternar entre tema claro e escuro**, para **usar o app confortavelmente à noite**.
8. Como **usuária**, quero **editar o texto de uma tarefa com duplo clique**, para **corrigir erros de digitação sem apagar e recriar o item**.
9. Como **membro da equipe**, quero **um README documentando decisões e divisão de trabalho**, para **qualquer pessoa entender o projeto**.

---

## Backlog inicial

Copie estas issues para o GitHub (título + descrição + labels) no primeiro dia. O bug da issue 6 foi **plantado de propósito** no scaffold para treinar o fluxo de correção (`fix/...`).

| # | Issue (título) | Descrição curta | Label | Prioridade | Estimativa |
|---|----------------|-----------------|-------|------------|------------|
| 1 | Publicar scaffold e montar o quadro do projeto | Criar repo, proteger a main, cadastrar todas as issues no GitHub Projects e definir papéis. | chore | Alta | P |
| 2 | Destacar visualmente a tarefa recém-adicionada | Aplicar uma animação CSS breve no item criado para chamar atenção do usuário. | feature | Média | P |
| 3 | Impedir tarefas duplicadas | Antes de adicionar, verificar se já existe tarefa com o mesmo texto (ignorando maiúsculas/minúsculas e espaços extras); avisar o usuário. | feature | Média | P |
| 4 | Limitar tarefas a 60 caracteres com contador | Adicionar contador de caracteres junto ao input e bloquear textos acima de 60 caracteres. | feature | Baixa | P |
| 5 | Botão "marcar todas como concluídas" | Novo botão que alterna o estado de todas as tarefas de uma vez, com persistência. | feature | Baixa | P |
| 6 | Bug: formulário aceita tarefa em branco (só espaços) | Enviar o formulário apenas com espaços cria uma "tarefa vazia" visível na lista. Corrigir validação usando `trim()` e impedir o envio. | bug | Alta | P |
| 7 | Filtros Todas / Ativas / Concluídas | Implementar a função `filtrarTarefas()` e ligar os botões `[data-filtro]`: destacar o ativo e exibir o subconjunto correto. Ver `TODO(issue-7)` no app.js. | feature | Alta | M |
| 8 | Contador de tarefas pendentes no rodapé | Implementar `atualizarContador()`: exibir em `#contador` quantas tarefas não concluídas existem, em todas as operações. Ver `TODO(issue-8)` no app.js. | feature | Alta | P |
| 9 | Tema claro/escuro com preferência salva | Implementar `TODO(issue-9)`: alternar `data-tema="escuro"` no `<html>`, salvar no localStorage e respeitar na próxima visita. Os estilos já existem no CSS. | feature | Média | M |
| 10 | Editar título com duplo clique | Implementar `TODO(issue-10)`: transformar o título em input editável no evento `dblclick`; salvar com Enter e cancelar com Esc. | feature | Média | M |
| 11 | Botão "limpar concluídas" | Implementar `TODO(issue-11)`: remover todas as tarefas concluídas de uma vez, atualizando storage, lista e contador. | feature | Média | P |
| 12 | README da equipe com prints e decisões | Documentar divisão de trabalho, decisões técnicas, prints da tela clara/escura e instruções de uso. | docs | Média | P |

Legenda de estimativa: **P** = até meio dia; **M** = cerca de um dia; **G** = dois dias ou mais.

---

## Divisão sugerida

As funções abaixo rotacionam a cada sprint. Todo mundo programa; ninguém fica só em documento.

### Equipe de 3

| Pessoa | Papel principal | Issues |
|--------|-----------------|--------|
| A | Dev front-end I | 2, 3, 4 |
| B | Dev front-end II | 5, 7, 8 |
| C | Dev front-end III / QA e docs | 6, 9, 10, 11, 12 |

Todos revisam os PRs dos outros (mínimo 1 review por PR).

### Equipe de 4

| Pessoa | Papel principal | Issues |
|--------|-----------------|--------|
| A | Dev I (comportamento do formulário) | 3, 4, 5 |
| B | Dev II (filtros e contadores) | 7, 8, 11 |
| C | Dev III (tema e edição) | 9, 10, 2 |
| D | QA / docs (encontra e descreve bugs, testa critérios de aceite) | 6, 12 |

Equipes de 5: divida as issues de maior estimativa (7, 9, 10) em pares usando pair programming, ou antecipe issues extras propostas pela própria equipe (via novas issues).

---

## Fluxo de trabalho passo a passo (GitHub Flow)

Exemplo prático para a issue 3 (impedir duplicatas):

```bash
# 0. Atualize a main antes de começar qualquer coisa
git checkout main
git pull origin main

# 1. Crie a branch vinculada à issue (prefixo conforme o label)
git checkout -b feat/issue-3-impedir-duplicatas

# 2. Trabalhe em commits pequenos e semânticos
git add js/app.js
git commit -m "feat: impede adicao de tarefas duplicadas"

# 3. Suba a branch e abra o PR no GitHub
git push -u origin feat/issue-3-impedir-duplicatas
# No PR: título claro, descrição com "Closes #3", screenshots se mudou UI

# 4. Peça revisão a outro membro. Corrija apontamentos com novos commits.

# 5. Com 1 aprovação, faça o merge pela interface do GitHub
#    e delete a branch:
git checkout main
git pull origin main
git branch -d feat/issue-3-impedir-duplicatas
git push origin --delete feat/issue-3-impedir-duplicatas
```

Prefixos por tipo de issue: `feat/issue-N-slug` (feature), `fix/issue-N-slug` (bug), `docs/issue-N-slug` (docs), `chore/issue-N-slug` (chore). Ex.: `fix/issue-6-tarefa-em-branco`.

---

## Sprints

### Sprint 1 — Base sólida (CRUD confiável + persistência)

**Meta:** o app adiciona, lista, conclui e remove tarefas com persistência garantida, e nenhum dado inválido entra na lista.

- Issues: **1 a 6** (configuração, comportamento do formulário, qualidade dos dados e correção do bug plantado).
- Critério de sucesso da sprint: percorrer todos os critérios de aceite de "Adicionar", "Concluir", "Remover" e "Persistência" (abaixo) sem falhas, incluindo o caso da issue 6.
- Eventos: daily diária de 5 minutos; review + retrospectiva no fim da semana.

### Sprint 2 — Produto completo e polido

**Meta:** filtros, contador, tema claro/escuro e edição funcionando; produto apresentável.

- Issues: **7 a 12** (filtros, contador, tema, editar, limpar concluídas, documentação) + polish visual decidido pela equipe.
- Fim da sprint: congelamento de código, demo final e retrospectiva do projeto inteiro.

---

## Definition of Done (vale para toda issue)

- [ ] Funciona na `main` após o merge, sem erros no console do navegador;
- [ ] Passou por PR com **pelo menos 1 revisão aprovada**;
- [ ] Commits semânticos e branch removida após o merge;
- [ ] Critérios de aceite do recurso testados manualmente pela pessoa revisora;
- [ ] Issue fechada automaticamente pelo PR (`Closes #N`);
- [ ] Nenhuma regressão nas funcionalidades já prontas.

### Critérios de aceite por recurso principal

**Adicionar**
- Digitar texto e enviar (Enter ou botão) insere a tarefa no fim da lista;
- O campo é limpo após adicionar;
- Texto vazio não é adicionado (e, após a issue 6, texto só com espaços também não);
- A tarefa nova aparece imediatamente, sem recarregar a página.

**Concluir**
- Clicar no checkbox risca o texto (classe `.concluida`);
- Alternar o checkbox ida e volta funciona;
- O estado concluído sobrevive ao refresh da página.

**Remover**
- O botão Remover exclui o item da lista e do localStorage;
- Itens restantes permanecem intactos.

**Persistência**
- Recarregar a página (F5) mantém todas as tarefas e seus estados;
- Fechar o navegador e reabrir mantém os dados.

**Filtros** (Sprint 2)
- "Ativas" mostra somente não concluídas; "Concluídas" mostra somente concluídas; "Todas" mostra tudo;
- O botão do filtro ativo fica visualmente destacado;
- Mudar de filtro nunca altera os dados salvos.

**Contador** (Sprint 2)
- Exibe corretamente o total de pendentes após adicionar, concluir, remover e limpar.

**Tema** (Sprint 2)
- Alterna claro/escuro instantaneamente, salva a preferência e aplica na próxima visita.

---

## Entregável final e apresentação

**Entregáveis:**

1. Repositório no GitHub com histórico visível (branches, PRs, reviews e issues fechadas — o processo faz parte da nota);
2. App funcionando, publicado via **GitHub Pages** (ou, se não for possível, vídeo curto demonstrando);
3. README da equipe (issue 12) preenchido.

**Apresentação (10 minutos por equipe):**

- 4 min: demo ao vivo percorrendo os critérios de aceite;
- 3 min: mostrar o fluxo Git usado (um PR real, o diff e a revisão recebida);
- 2 min: decisões técnicas que a equipe tomou sozinha;
- 1 min: retrospectiva — o que funcionou, o que melhorariam na próxima sprint.
