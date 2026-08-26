# Template didático - Pull Request

Modelo para abrir PRs completos e fáceis de revisar. Este arquivo é MATERIAL DE ESTUDO: os comentários explicam cada campo. A versão enxuta usada automaticamente pelo GitHub está em `.github/PULL_REQUEST_TEMPLATE.md`.

Título do PR: use o padrão semântico do commit principal (ex.: `feat(filtro): filtra tarefas por texto`).

## Modelo para copiar

```markdown
## O que foi feito?

<!-- Resumo objetivo das mudancas em 1 a 3 frases. O revisor precisa entender -->
<!-- o escopo SEM abrir arquivo por arquivo. -->
<!-- Exemplo: adiciona filtro por texto no campo de busca da lista de tarefas. -->

## Por quê?

<!-- Motivo e contexto: qual problema ou issue este PR resolve? -->
<!-- Referencie a issue para fechamento automatico no merge: Closes #12 -->
<!-- Se houver decisao tecnica relevante, registre aqui (por que X e nao Y?). -->

## Como testar?

<!-- Passos numerados para o revisor reproduzir e conferir o resultado. -->
<!-- Inclua cenarios alternativos quando existirem (lista vazia, valores invalidos). -->
1. npm install
2. npm run dev
3. Cadastre tres tarefas
4. Digite "estudo" no filtro e verifique que so tarefas correspondentes aparecem
5. Apague o filtro e confirme que todas voltam

## Evidências

<!-- Prints ou GIFs ANTES/DEPOIS quando a mudanca tem interface visual. -->
<!-- Para mudancas apenas internas, pode remover esta secao. -->

## Notas para o revisor

<!-- Aponte pontos sensiveis, duvidas abertas ou partes que merecem atencao extra. -->
<!-- Exemplo: a funcao ordenarLista() foi extraida; revise se o comportamento ficou igual. -->

## Checklist

- [ ] Testes/lint ok (CI verde)
- [ ] Documentação atualizada, quando aplicável
- [ ] Commits semânticos
- [ ] Issue vinculada com Closes #N
```

## Regras da equipe para PRs

| Regra | Por quê |
| --- | --- |
| Máximo de 300 linhas alteradas | PR grande não é revisado com atenção; quebre em pedaços |
| Pelo menos 1 aprovação antes do merge | Proteção da `main` exige; ninguém aprova o próprio PR |
| CI verde obrigatório | Lint e testes passando antes de qualquer merge |
| Um PR = uma ideia | Facilita revert, changelog e entendimento do histórico |
| Revisor responde em até 24h | PR parado trava o quadro Kanban na coluna Review |
