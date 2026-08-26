# Capítulo 02 - Fluxo de trabalho

Este capítulo define COMO escrevemos código juntos: o GitHub Flow, a convenção de commits semânticos, os comandos para desfazer erros comuns e as regras do `.gitignore`.

## 1. GitHub Flow

É o fluxo mais simples que mantém a `main` sempre estável. Resumo: nada entra na `main` sem passar por uma branch e por um Pull Request revisado.

```text
+--------------------------------------------------------------------+
|                            GITHUB FLOW                             |
+--------------------------------------------------------------------+

   (1) main protegida: nenhum push direto
              |
              |  git switch -c feat/nome-descritivo
              v
   (2) branch descritiva nascida da main atualizada
              |
              |  commits pequenos e semanticos
              v
   (3) git push -u origin feat/nome-descritivo
              |
              v
   (4) Pull Request: descricao + issue vinculada (Closes #N)
              |
              |  code review: >= 1 aprovacao e CI verde
              v
   (5) merge na main (squash, sugerido no curso)
              |
              v
   (6) apagar a branch e atualizar a main local
              |
              +-----------------------> volta ao passo (1)

   visao do historico:

   main:    A---B---------------M---->   (M = merge do PR)
                 \               /
                  feat/x: C---D-
```

Regras de ouro:

1. `main` sempre funcional: se o CI quebra, consertar é prioridade máxima;
2. Uma branch por tarefa, com nome curto e descritivo: `feat/login`, `fix/calculo-media`, `docs/readme-instalacao`;
3. Branches vivem pouco: dias, não semanas.

## 2. Comandos do dia a dia, comentados

```bash
# ---------- inicio do expediente ----------
# va para a main e traga as novidades que os colegas mesclaram
git switch main
git pull origin main

# crie sua branch de trabalho a partir da main atualizada
git switch -c feat/filtro-tarefas

# ---------- enquanto desenvolve ----------
# veja o que mudou antes de commitar (evita enviar lixo)
git status
git diff

# adicione APENAS os arquivos relacionados a esta tarefa
git add src/filtro.js

# commite com mensagem semantica (veja a tabela abaixo)
git commit -m "feat(tarefas): filtra lista por texto digitado"

# ---------- primeira publicacao da branch ----------
# -u liga sua branch local a remota (nas proximas vezes, basta 'git push')
git push -u origin feat/filtro-tarefas

# abra o Pull Request direto do terminal
gh pr create --fill

# ---------- depois do merge ----------
# volte para a main, atualize e apague a branch que ja cumpriu seu papel
git switch main
git pull origin main
git branch -d feat/filtro-tarefas
git push origin --delete feat/filtro-tarefas
```

## 3. Convenção de commits semânticos

Formato:

```text
<tipo>(<escopo opcional>): <descricao curta>
```

Regras:

- Tipo sempre em minúsculas, seguido de dois pontos;
- Escopo entre parênteses indica o módulo afetado (opcional, mas recomendado);
- Descrição no imperativo, em minúsculas, sem ponto final, com até 50 caracteres quando possível;
- Um commit = uma ideia coesa (nunca junte feature com correção no mesmo commit).

| Tipo | Quando usar | Exemplo |
| --- | --- | --- |
| `feat` | Nova funcionalidade para quem usa o sistema | `feat(api): adiciona endpoint de cadastro` |
| `fix` | Correção de bug | `fix(calc): corrige divisao por zero` |
| `docs` | Apenas documentação | `docs: explica como rodar os testes` |
| `style` | Formatação, espaços em branco, ponto e vírgula (não muda lógica) | `style: ajusta indentacao do menu` |
| `refactor` | Mudança de código que não altera comportamento | `refactor(auth): extrai funcao validarSenha` |
| `perf` | Melhoria de desempenho | `perf(lista): reduz consultas dentro do loop` |
| `test` | Criação ou ajuste de testes | `test(login): cobre senha invalida` |
| `chore` | Manutenção, build, dependências, ferramentas | `chore: atualiza eslint para a versao 9` |
| `ci` | Pipelines de integração contínua | `ci: adiciona job de lint no GitHub Actions` |

### Três bons exemplos

```text
feat(carrinho): adiciona cupom de desconto
```

Bom porque diz o tipo (funcionalidade nova), o módulo (carrinho) e exatamente o que entrou.

```text
fix(matricula): corrige validacao de CPF duplicado (#42)
```

Bom porque é específico e referencia a issue #42, ligando o commit ao contexto do trabalho.

```text
docs: atualiza instrucoes de instalacao no README
```

Bom porque documenta uma mudança que não toca código; escopo dispensável quando a alteração é geral.

### Três maus exemplos

```text
update
```

Ruim: não informa tipo nem conteúdo. Impossível entender o histórico ou gerar changelog.

```text
Corrigindo varios bugs e ajustando layout
```

Ruim: mistura assuntos (deveriam ser dois commits), não começa com um tipo válido e é vago: quais bugs?

```text
feat: WIP
```

Ruim: "WIP" (trabalho em andamento) não deve virar commit público. Termine a ideia localmente e use `git commit --amend`, ou faça commits menores e completos.

## 4. Desfazendo coisas: situação → comando

| Situação | Comando | Observações |
| --- | --- | --- |
| Errei a mensagem do último commit | `git commit --amend -m "mensagem correta"` | Use ANTES do `push`; amend reescreve o commit local |
| Esqueci um arquivo no último commit | `git add esquecido.js` e depois `git commit --amend --no-edit` | `--no-edit` mantém a mensagem original |
| Um commit indesejado já foi enviado (público) | `git revert <hash>` | Cria um NOVO commit que desfaz o antigo; seguro para a `main` |
| Preciso trocar de tarefa com trabalho pela metade | `git stash` guarda; `git stash pop` recupera; `git stash list` lista | Mudanças ficam guardadas sem precisar de commit |
| Um arquivo modificado deve voltar ao último commit | `git restore caminho/do/arquivo` | ATENÇÃO: descarta as alterações locais sem possibilidade de recuperação |
| Um arquivo entrou no stage por engano | `git restore --staged caminho/do/arquivo` | Sai da área de stage, mas mantém suas edições |

Nunca em equipe:

- `git reset --hard` em branches compartilhadas;
- `git push --force` na `main` (se precisar forçar numa branch só sua, prefira `--force-with-lease`).

## 5. Boas práticas de `.gitignore`

O `.gitignore` lista padrões de arquivos que o Git deve ignorar. Ele mora na raiz do repositório e deve existir desde o primeiro commit.

Modelo enxuto para projetos Node.js:

```bash
# Dependencias (podem ser reinstaladas com npm install)
node_modules/

# Artefatos de build e relatorios
dist/
build/
coverage/

# Segredos e variaveis de ambiente: NUNCA versionar
.env
.env.local

# Ruido de sistema operacional e editores
.DS_Store
Thumbs.db
*.log

# Configuracoes pessoais de IDE
.idea/
.vscode/
```

Boas práticas:

1. Ignore artefatos que podem ser gerados (`node_modules/`, `dist/`), nunca o código-fonte;
2. Nunca versione segredos: commite um `.env.example` com os nomes das variáveis e valores vazios;
3. Use comentários (`#`) e linhas em branco para organizar as seções;
4. Se um arquivo já versionado precisar passar a ser ignorado, tire-o do índice primeiro: `git rm --cached arquivo`;
5. Para descobrir por que algo está sendo ignorado: `git check-ignore -v arquivo`;
6. Preferências pessoais (tema do editor, arquivos temporários seus) pertencem ao seu ignore global, não ao do projeto:

```bash
git config --global core.excludesFile ~/.gitignore_global
```

Próximo capítulo: [03-pull-requests-e-code-review.md](03-pull-requests-e-code-review.md).
