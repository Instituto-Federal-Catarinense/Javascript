# Template didático - Issue de bug

Modelo para reportar comportamentos inesperados ou erros. Um bom relatório de bug permite reproduzir o problema SEM perguntar nada ao autor. Este arquivo é MATERIAL DE ESTUDO; a versão enxuta automática está em `.github/ISSUE_TEMPLATE/bug_report.md`.

Título sugerido: `[bug] o que acontece errado + onde` (ex.: `[bug] lista some ao filtrar por texto vazio`).

## Modelo para copiar

```markdown
## Comportamento esperado

<!-- Descreva o que DEVERIA acontecer, em uma frase objetiva. -->
<!-- Exemplo: filtrar a lista por texto vazio deveria mostrar todas as tarefas. -->

## Comportamento observado

<!-- Descreva o que ACONTECE de errado hoje. -->
<!-- Exemplo: ao filtrar por texto vazio, a lista fica vazia como se nao houvesse tarefas. -->

## Passos para reproduzir

<!-- Numere TODOS os passos, do zero. Quem ler deve conseguir repetir o erro. -->
1. Abra a aplicacao
2. Cadastre duas tarefas quaisquer
3. Digite "abc" no filtro
4. Apague o texto do filtro
5. Observe a lista vazia

## Ambiente

<!-- Contexto tecnico minimo para investigar. -->
- SO:
- Navegador/versão do Node:
- Commit ou branch testada:

## Evidências

<!-- Cole prints, GIFs ou o trecho relevante do log de erro. -->
<!-- Logs valem ouro: copie a mensagem completa do console, nao um resumo. -->

## Severidade e prioridade sugeridas

<!-- Severidade: quao grave e o impacto (bloqueia tudo? engloba estetica?). -->
<!-- Prioridade: quando precisa ser corrigido (use as labels prioridade-*). -->
<!-- Exemplo: severidade alta (perda de dados), label prioridade-alta. -->

## Possível causa (opcional)

<!-- Se suspeitar da origem do problema, registre; ajuda quem vai corrigir. -->
<!-- NAO obrigatorio: melhor um chute honesto do que nada. -->
```

## Regras de ouro do QA

1. Um bug por issue: dois bugs juntos viram duas issues;
2. Se você não conseguiu reproduzir, não abra achismo: descreva exatamente o que tentou;
3. Aplique sempre a label `tipo-bug` e uma label `prioridade-*`;
4. Vincule a milestone da sprint atual quando o conserto for urgente.
