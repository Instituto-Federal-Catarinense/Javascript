# Capítulo 03 - Pull Requests e code review

O Pull Request (PR) é o portão de qualidade do projeto: é onde o código é discutido, revisado e aprovado antes de entrar na `main`.

## 1. Abrindo um PR pela interface web

1. Publique sua branch: `git push -u origin feat/minha-tarefa`;
2. Abra a página do repositório no GitHub. Um banner amarelo sugere **Compare & pull request**; clique nele (ou vá em **Pull requests > New pull request** e escolha as branches);
3. Confira a direção do PR: **base: main** comparada com **compare: feat/minha-tarefa**;
4. Título no padrão do commit principal, por exemplo `feat(filtro): filtra tarefas por texto`;
5. Preencha a descrição conforme a seção 3, incluindo `Closes #12` para fechar a issue automaticamente no merge;
6. Se o PR ainda não estiver pronto para revisão, abra como **Draft** (rascunho);
7. Clique em **Create pull request** e convoque revisores na aba **Reviewers** ou mencionando colegas com `@usuario`.

## 2. Abrindo um PR pelo gh CLI

```bash
# autenticacao (uma vez por maquina)
gh auth login

# cria o PR aproveitando titulo e corpo do primeiro commit
gh pr create --fill

# ou personalize tudo na hora
gh pr create \
  --base main \
  --head feat/minha-tarefa \
  --title "feat(filtro): filtra tarefas por texto" \
  --body "Closes #12. Implementa o filtro descrito na issue."

# utilidades diarias
gh pr status              # seus PRs e os que aguardam sua revisao
gh pr view 12 --web       # abre o PR 12 no navegador
gh pr checkout 12         # baixa localmente o PR de um colega para testar
gh pr checks              # acompanha o resultado do CI

# apos a aprovacao, faca o merge squash e apague a branch
gh pr merge 12 --squash --delete-branch
```

## 3. Modelo de descrição

Versão enxuta (já automatizada em `.github/PULL_REQUEST_TEMPLATE.md`):

```markdown
## O que foi feito?
Resumo objetivo das mudancas.

## Por quê?
Motivo e contexto. Referencie a issue: Closes #12

## Como testar?
Passos numerados para o revisor reproduzir e conferir o resultado.
```

A versão didática comentada, campo a campo, está em [`templates/pull-request.md`](templates/pull-request.md).

## 4. Checklist do revisor

Antes de começar, leia a issue vinculada e rode o projeto localmente se necessário. Percorra as cinco categorias:

| Categoria | Perguntas que o revisor faz |
| --- | --- |
| Funcionalidade | O código faz o que a issue pede? Casos limites foram tratados (lista vazia, valores inválidos)? Algo que já funcionava pode ter quebrado? |
| Testes | Existem testes novos cobrindo o comportamento? Todos passam? O CI está verde? |
| Nomes | Branch, variáveis, funções e componentes têm nomes claros e coerentes com o vocabulário do projeto? |
| Estilo | Segue o padrão do projeto? Lint passa? Commits são semânticos e coesos? |
| Segurança | Há segredos, senhas ou tokens expostos? Entradas de usuário são validadas? Dependências novas são confiáveis e realmente necessárias? |

## 5. Etapa prática: conflito de propósito

Objetivo: sentir na pele o que é um conflito de merge e aprender a resolvê-lo sem drama. Trabalhe em dupla: Pessoa A e Pessoa B. O arquivo usado será `src/boas-vindas.js`, já existente na `main` com o conteúdo:

```javascript
const mensagem = "Bem-vindo ao curso!";
console.log(mensagem);
```

### Parte 1 - Pessoa A cria e mescla a primeira mudança

```bash
git switch main
git pull origin main
git switch -c fix/mensagem-turma

# edite src/boas-vindas.js e deixe a linha assim:
# const mensagem = "Bem-vindos, turma de 2026!";

git add src/boas-vindas.js
git commit -m "fix(boas-vindas): atualiza mensagem para a turma de 2026"
git push -u origin fix/mensagem-turma
gh pr create --fill
```

Mergeie imediatamente (pela web, botão **Merge**, ou com `gh pr merge --squash --delete-branch`). A `main` agora tem a mensagem nova.

### Parte 2 - Pessoa B edita a MESMA linha sem saber

Importante: a Pessoa B deve criar a branch ANTES de puxar a mudança da Pessoa A.

```bash
git switch main
# NAO rode git pull aqui: o objetivo e partir de uma main "antiga"
git switch -c fix/mensagem-inicial

# edite a MESMA linha de src/boas-vindas.js para:
# const mensagem = "Ola! Comece por aqui.";

git add src/boas-vindas.js
git commit -m "fix(boas-vindas): troca mensagem para convite inicial"
git push -u origin fix/mensagem-inicial
gh pr create --fill
```

Abra o PR da Pessoa B: o GitHub exibirá **This branch has conflicts that must be resolved before merging**. As duas pessoas mudaram a mesma linha e o Git não sabe qual escolher.

### Parte 3 - Pessoa B resolve o conflito localmente

```bash
# traga a main atualizada para dentro da sua branch
git switch fix/mensagem-inicial
git fetch origin
git merge origin/main
```

Saída esperada (e desejada, neste exercício):

```text
Auto-merging src/boas-vindas.js
CONFLICT (content): Merge conflict in src/boas-vindas.js
Automatic merge failed; fix conflicts and then commit the result.
```

Abra `src/boas-vindas.js`. O Git marcou a briga:

```javascript
<<<<<<< HEAD
const mensagem = "Ola! Comece por aqui.";
=======
const mensagem = "Bem-vindos, turma de 2026!";
>>>>>>> origin/main
```

Leitura das marcas:

- Entre `<<<<<<< HEAD` e `=======`: o que está na SUA branch;
- Entre `=======` e `>>>>>>> origin/main`: o que veio da `main`.

Como resolver:

1. Decida o conteúdo final (manter um lado OU combinar os dois). Neste exercício, combine os dois:

```javascript
const mensagem = "Bem-vindos! Comece por aqui.";
```

2. Apague TODAS as linhas de marcação (`<<<<<<<`, `=======`, `>>>>>>>`);
3. Salve, confirme a conclusão do merge e envie:

```bash
git add src/boas-vindas.js
git commit -m "merge: resolve conflito da mensagem de boas-vindas"
git push
```

4. O PR da Pessoa B atualiza sozinho, volta a ficar mesclável, recebe aprovação e entra na `main`.

### Lições do exercício

- Conflito não é erro: é o Git pedindo uma decisão humana;
- Conflitos diminuem quando PRs são pequenos e a `main` é atualizada com frequência (`git pull` no início do dia);
- Comunique-se: avisar "vou mexer no arquivo X" evita trabalho duplicado;
- A alternativa ao `git merge origin/main` é `git rebase main`: histórico linear, mas reescreve seus commits locais.

## 6. Estratégias de merge

Configuração sugerida para o curso: **squash** (Settings > General > Pull Requests > squash padrão).

| Estratégia | Histórico resultante | Prós | Contras | Quando usar |
| --- | --- | --- | --- | --- |
| Merge commit (padrão do Git) | Preserva TODOS os commits do PR e cria um commit de merge | Histórico fiel; fácil reverter o conjunto; mostra o contexto | Fica poluído com commits triviais ("ajuste", "typo") | Times maduros, com commits bem escritos |
| Squash | Condensa o PR inteiro em UM commit na `main` | Main limpa e legível; 1 commit = 1 ideia; casa com commits semânticos | Perde a granularidade interna do PR | Curso e equipes iniciantes; PRs pequenos |
| Rebase | Reaplica os commits do PR sobre a `main`, sem commit de merge | Histórico linear, fácil de ler | Reescreve hashes; exige disciplina e familiaridade | Times avançados, fluxos trunk-based |

## 7. Etiqueta de code review

Acordos da equipe:

1. Revise-se o CÓDIGO, não a pessoa: tom neutro, fato e sugestão;
2. Responda PRs em até 24 horas, mesmo que só para dizer "estou olhando";
3. Classifique os comentários para evitar ruído:
   - `[obrigatorio]`: precisa ser corrigido antes do merge;
   - `[sugestao]`: opcional; decisão é do autor;
   - `[pergunta]`: busca entendimento, não exige mudança;
4. Elogie boas soluções: review também serve para reforçar o que funciona;
5. Autor do PR: não leve para o pessoal, responda cada ponto, agradeça e peça nova revisão após corrigir.

Exemplos de comentários construtivos:

| Em vez disso... | Prefira isto |
| --- | --- |
| "Isso está errado." | "[obrigatorio] Aqui o calculo ignora anos bissextos. A funcao `ehBissexto()` em `utils/data.js` ja resolve isso, vale usar?" |
| "Por que você fez assim?" | "[pergunta] Existe algum motivo para nao reaproveitarmos a funcao utilitaria existente? Me corrige se eu entendi errado." |
| "Ninguém faz desse jeito." | "[sugestao] Validar no middleware, como as outras rotas fazem, deixaria este codigo consistente com o resto do projeto." |
| "LGTM" (sem ler nada) | Comentário concreto: "Testei seguindo os passos da descricao; funcionou inclusive com lista vazia. Aprovado." |

Próximo capítulo: [04-papeis-e-rituais-ageis.md](04-papeis-e-rituais-ageis.md).
