# Template didático - Retrospectiva

Modelo para conduzir e registrar as retrospectivas de sprint no formato start / stop / continue. Este arquivo é MATERIAL DE ESTUDO; a ata final preenchida deve ser salva no repositório (pasta `docs/` ou issue fixada).

## Metadados da sessão

| Campo | Valor |
| --- | --- |
| Sprint | Ex.: Sprint 1 |
| Data | Ex.: 2026-09-04 |
| Participantes | Liste quem estava presente |
| Facilitador | Papel do SM na sprint |

## Acordos da conversa

- Fale de fatos e processos, nunca de pessoas ("os PRs demoravam", e não "fulano demora");
- Todos falam; ninguém interrompe;
- Crítica é sobre o time de ontem, melhoria é compromisso do time de amanhã;
- No fim, eleger NO MÁXIMO 3 ações: retro sem ação é só desabafo.

## Levantamento (todos preenchem antes da discussão)

```markdown
## Start - o que devemos COMEÇAR a fazer?

<!-- Praticas novas que o time ainda nao adotou. -->
- 
- 

## Stop - o que devemos PARAR de fazer?

<!-- Habitos que atrapalham: PRs gigantes, daily longa, review fora do prazo... -->
- 
- 

## Continue - o que esta funcionando e devemos MANTER?

<!-- Reforce o positivo: reconhecer o que funciona tambem e aprendizado. -->
- 
- 
```

## Ações acordadas

Transforme a conversa em compromissos verificáveis. Cada ação vira uma issue `melhoria` da próxima sprint.

| # | Ação | Responsável | Onde será acompanhada |
| --- | --- | --- | --- |
| 1 | Ex.: puxar a `main` toda manhã antes de começar | Todos | Daily |
| 2 | | | |
| 3 | | | |

## Termômetro da sprint (opcional)

Cada participante dá uma nota de 0 a 10 para "como foi trabalhar nesta sprint" e justifica em uma frase. A média vai para a ata e permite comparar sprints.

## Encerramento

- Facilitador lê as ações acordadas em voz alta;
- As issues `melhoria` são criadas ainda na reunião, já na milestone da próxima sprint;
- A ata preenchida é commitada no repositório (`docs/retrospectivas/sprint-N.md`) com commit `docs: registra retrospectiva da sprint N`.
