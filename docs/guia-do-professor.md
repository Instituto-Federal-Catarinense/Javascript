# Guia do Professor

Documento operacional para docentes que conduzirão a trilha **JavaScript Educacional** em turma. Complementa o [`CURRICULUM.md`](./CURRICULUM.md) (proposta pedagógica e avaliação) e o [`CONTRIBUTING.md`](./CONTRIBUTING.md) (padrões de contribuição).

## Plano de curso: 16 semanas

Distribuição geral: 6 semanas de fundamentos e frontend (módulos 01 a 04), 5 semanas de backend (módulos 05 a 07) com laboratórios intercalados, 2 semanas por projeto de equipe e 1 semana de avaliações finais.

| Semana | Conteúdo | Entregável |
| :---: | --- | --- |
| 1 | Módulo 01, aulas 00 a 04 (variáveis, tipos, operadores, strings, números); ambientação com Git e GitHub da turma | Exercícios das aulas 00 a 04 |
| 2 | Módulo 01, aulas 05 a 09 (condicionais, laços, funções, arrays, objetos) | Exercícios das aulas 05 a 09; quiz do módulo 01 (min. 70%) |
| 3 | Módulo 02, aulas 01 e 02 (DOM, eventos); laboratório de manipulação de página | Exercícios de DOM e eventos |
| 4 | Módulo 02, aulas 03 e 04 (formulários, Web Storage); laboratório front-end integrador | Quiz do módulo 02; mini-página interativa persistente |
| 5 | Módulo 03, aulas 01 a 03 (erros, JSON, assíncrono) | Exercícios correspondentes |
| 6 | Módulo 03, aula 04 (Fetch API) e módulo 04, aulas 01 a 02 (classes, regex) | Quiz do módulo 03; exercícios de classes e regex |
| 7 | Módulo 04, aulas 03 e 04 (closures, protótipos); laboratório de modelagem POO | Quiz do módulo 04; exercícios de closures e protótipos |
| 8 | Módulo 05 completo (introdução ao Node, módulos nativos, servidor HTTP) | Servidor HTTP manual funcionando; quiz do módulo 05 |
| 9 | Módulo 06, aulas 01 e 02 (npm/package.json, middleware) | API Express com middleware próprio |
| 10 | Módulo 06, aulas 03 e 04 (template engines, REST); laboratório de API | Quiz do módulo 06; rotas REST documentadas |
| 11 | Módulo 07, aulas 01 a 07 (banco, autenticação, upload, websockets, testes, env, debugging), em trilha guiada; quizzes dos módulos 05 e 07 | Aplicação Express com persistência e testes; quiz do módulo 07 |
| 12 | Projeto de equipe 01 — lista de tarefas em JavaScript vanilla (`projetos-equipe/projeto-01-lista-de-tarefas-vanilla`): sprint 1 | Repositório do projeto com backlog, branches e primeiras pull requests revisadas |
| 13 | Projeto de equipe 01: sprint 2 | Versão funcional entregue; sprint review com o professor como cliente |
| 14 | Projeto de equipe 02 — API de tarefas com Express (`projetos-equipe/projeto-02-api-tarefas-express`): sprint 1 | Repositório ativo, planejamento da API e endpoints iniciais |
| 15 | Projeto de equipe 02: sprint 2 | API completa consumida pelo frontend; sprint review final |
| 16 | Avaliações finais: apresentação dos projetos, recuperação de quizzes pendentes, autoavaliação individual | Ficha de avaliação consolidada por equipe e por estudante |

Observações: os roteiros detalhados dos projetos estão sendo estruturados na pasta `projetos-equipe/`; os papéis e rituais de equipe seguem o guia colaborativo `github-playbook/` (ambos componentes institucionais deste repositório). Se a turma tiver menos encontros, comprima as semanas 11 a 15 preservando as duas semanas por projeto.

## Metodologia: sala de aula invertida

- **Antes do encontro (assíncrono)**: o estudante lê o `README.md` da aula, assiste/estuda os comentários do exemplo e manipula o arquivo espelhado no `playground/<modulo>/`. O professor publica um roteiro curto de preparação indicando as aulas da semana.
- **No encontro (presencial)**: o tempo é dedicado a dúvidas, correção coletiva de exercícios, programação em pares e desafios de aprofundamento. Nenhuma aula expositiva longa: explicações sob demanda.
- **Depois do encontro**: entrega dos exercícios via repositório pessoal (fork ou branch), seguindo os critérios de aceite.

Sugere-se fechar cada semana com um "quadro de bloqueios" coletivo: cada estudante registra em uma issue (ou quadro kanban da turma) o que travou seu aprendizado, alimentando o planejamento do laboratório seguinte.

## Formação de equipes e papéis

- **Tamanho**: equipes de 3 a 5 pessoas, formadas de forma **heterogênea** (misturar níveis: quem domina laços com quem ainda treina; perfis mais frontend com perfis mais backend).
- **Papéis** (definidos no `github-playbook/`, com descrição detalhada de atribuições):
  - **Facilitação**: organiza reuniões curtas, controla o backlog da sprint e garante que todos falem.
  - **Revisão de pull requests**: primeira leitura dos PRs das colegas, sugerindo melhorias antes do merge.
  - **Integração (Git)**: cuida da estratégia de branches, resolve conflitos e mantém a branch principal estável.
  - **Documentação**: mantém READMEs do projeto, decisões registradas e issues bem descritas.
  - **Qualidade**: executa testes, revisa critérios de aceite e reporta bugs em issues.
- **Rotação**: papéis trocam a cada sprint (semanas 12/13 e 14/15, e opcionalmente nos laboratórios das semanas anteriores). Em equipes de 3 pessoas, acumular documentação com qualidade.
- Registre a matriz inicial de papéis e cada rotação; isso alimenta o critério de colaboração da rubrica.

## O professor como stakeholder nas sprints reviews

Nas semanas de projeto, o docente atua como **cliente/stakeholder**: solicita funcionalidades em linguagem de usuário ("quero filtrar tarefas concluídas"), muda prioridades entre sprints e aceita ou devolve entregas. Não resolve problemas técnicos; questiona e negocia escopo.

O que observar e registrar durante as reviews:

- A equipe consegue **explicar** o próprio código (não apenas demonstrá-lo)?
- Os commits e pull requests refletem divisão real de trabalho?
- Issues foram usadas para rastrear bugs e mudanças de escopo solicitadas pelo "cliente"?
- A equipe respondeu bem a requisitos alterados entre sprints (adaptabilidade)?
- Há evidência de revisão mútua (comentários construtivos em PRs)?

Registre observações por equipe ao final de cada review em uma ficha simples (data, entregas aceitas/devolvidas, riscos, ação de acompanhamento). Esses registros sustentam os conceitos da rubrica.

## Rubrica de avaliação

Notas individuais de 0 a 10 por critério, multiplicadas pelos pesos abaixo.

| Critério | Peso | Insuficiente (0 a 4,9) | Bom (5 a 7,9) | Excelente (8 a 10) |
| --- | ---: | --- | --- | --- |
| Quizzes dos módulos | 20% | Maioria dos quizzes abaixo de 70%, mesmo após refacção | Todos os módulos com 70% a 89% | Média geral alta (90% ou mais), com domínio evidente nas retomadas orais |
| Exercícios e participação | 20% | Entregas ausentes ou sem critérios de aceite; participação passiva | Maioria entregue dentro dos critérios; participa quando provocado | Entregas completas e pontuais; propõe soluções alternativas e ajuda colegas |
| Projeto — commits e histórico | 10% | Commits concentrados na véspera, mensagens genéricas, trabalho alheio apagado | Commits regulares e semânticos na maior parte da sprint | Histórico granular, semântico e contínuo, mostrando evolução incremental |
| Projeto — pull requests e revisão | 10% | PRs gigantes sem descrição, merges diretos sem revisão | PRs descritas e revisadas de modo superficial | PRs pequenas e bem descritas, com revisões técnicas relevantes entre pares |
| Projeto — colaboração e papéis | 10% | Papéis não exercidos; conflitos não tratados; freeriders evidentes | Papéis exercidos com rotação parcial; conflitos resolvidos com mediação | Papéis exercidos e rotacionados; comunicação madura registrada em issues e reviews |
| Projeto — qualidade técnica | 10% | Requisitos mínimos não atendidos; código não executa | Funciona com falhas pontuais; código organizado no essencial | Atende aos requisitos com código limpo, testado e bem estruturado |
| Apresentação final | 20% | Não articula decisões nem demonstra funcionamento | Demonstra funcionamento; explica a maioria das decisões | Demonstração fluida, justificativas técnicas corretas e reflexão honesta sobre limitações |

Composição da nota final do estudante: soma dos critérios ponderados. O projeto de equipe recebe nota por equipe ajustada individualmente conforme os critérios de processo (commits, PRs e colaboração), evitando que desempenhos individuais sejam diluídos.

## Adaptação para EAD

- **Dailies assíncronas**: registro diário curto (feito/bloqueios/plano) postado pela equipe em canal próprio ou issue; substitui a reunião presencial.
- **Gravações**: aulas e laboratórios gravados e disponibilizados junto aos roteiros semanais; exemplos do playground servem de material de estudo autônomo.
- **Mentorias síncronas semânticas**: ao menos um encontro on-line por semana por faixa de módulos (frontend e backend), focado em dúvidas e correção de exercícios.
- **Reviews remotas**: sprint reviews por videoconferência com compartilhamento de tela; exigir câmeras abertas na apresentação final.
- **Avaliação por artefatos**: todo o rastro (commits, PRs, issues) permanece no GitHub, o que torna a avaliação de processo tão verificável quanto no presencial.

## FAQ docente

**Aluno atrasado (ingressou depois do início ou acumulou lacunas):**
Oferte o percurso mínimo: módulo 01 integral e, a partir dele, o percurso Frontend ou Backend conforme o perfil. Estabeleça contrato de recuperação com prazos (por exemplo, duas semanas para alcançar a semana corrente usando o playground), indique tutoria entre pares dentro da equipe e permita refazer quizzes. Evite reprovar por ritmo: o desenho da trilha permite recuperação rápida nos primeiros módulos.

**Equipe desequilibrada (uma pessoa concentra o trabalho):**
Primeiro, dialogue individualmente com quem trabalha demais e com quem trabalha de menos, separadamente. Em seguida, intervenha estruturalmente: reduza o escopo acordado com o "cliente", redistribua issues explicitamente por pessoa e exija pull requests pequenas e individuais (o histórico do Git expõe quem produz o quê). Se persistir, reconfigure a equipe na metade do projeto, registrando a decisão e comunicando impacto justo na rubrica de colaboração.

**Plágio entre equipes:**
Use o histórico do Git como evidência: commits idênticos, autoria única ou arquivos copiados sem adaptação são detectáveis. Ao confirmar, convoque as equipes envolvidas, exija retrabalho orientado (reimplementar a parte copiada explicando as decisões) e aplique penalidade proporcional apenas no critério afetado, registrando o ocorrido conforme o regimento institucional. Previna desde a semana 1: explique que comparar abordagens é legítimo, mas transferir código sem compreensão anula o objetivo formativo e é identificável na apresentação final.
