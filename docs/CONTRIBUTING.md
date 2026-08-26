# Guia de Contribuição

Obrigado por considerar contribuir com o repositório **JavaScript Educacional**. Este documento define conduta, fluxo de trabalho, padrões de conteúdo e de código. Leia-o antes de abrir issues ou pull requests.

## Código de conduta

- Trate todas as pessoas com respeito; assédio, ataques pessoais e tom depreciativo não serão tolerados.
- Faça feedback objetivo e técnico: critique ideias e código, nunca pessoas.
- Lembre-se de que este é um repositório educacional: clareza didática vale tanto quanto correção técnica.
- Discussões acontecem em português (pt-BR), idioma oficial do material.

## Fluxo de contribuição

1. **Abra uma issue antes de mudanças grandes**: novas aulas, módulos ou refatorações estruturais devem ser propostos e discutidos primeiro. Correções pequenas (typos, ajustes de exercício) podem ir direto ao pull request.
2. **Faça um fork** do repositório para sua conta.
3. **Crie uma branch descritiva** no formato `feat/descricao-curta` (ex.: `feat/aula-map-filter`, `fix/exercicio-tarifa`), conforme o [fluxo detalhado do guia colaborativo](../github-playbook/02-fluxo-de-trabalho.md) (branches e commits semânticos).
4. **Use commits semânticos**, referenciando a issue quando aplicável:

   | Prefixo | Uso |
   | --- | --- |
   | `feat:` | nova aula, exemplo ou funcionalidade didática |
   | `fix:` | correção de erro em código ou enunciado |
   | `docs:` | documentação (READMEs, guias) |
   | `refactor:` | melhoria sem mudança de comportamento |
   | `test:` | ajustes em testes automatizados |
   | `chore:` | configuração, dependências e tarefas administrativas |

5. **Abra o pull request** apontando para a branch principal, descrevendo o que foi feito, por quê e como testar.

## Padrão de nova aula

Toda aula nova deve seguir a mesma anatomia das existentes:

```text
modulos/<modulo>/NN-slug/
├── README.md          teoria curta, objetivo de aprendizagem e referências
├── <topico>.js        exemplo executável comentado (node <topico>.js)
└── exercicios.md      lista no template padrão
```

Requisitos obrigatórios:

- **README.md**: objetivo claro, teoria essencial curta, exemplos mínimos e referências oficiais (MDN, Node.js docs).
- **Exemplo executável**: arquivo `.js` que roda sem erros com `node`, com comentários didáticos em pt-BR. Para aulas de navegador, incluir `index.html` correspondente.
- **exercicios.md** no template padrão:
  - título com o tema da aula;
  - seção "Como resolver" (instruções de arquivo e execução);
  - seção "Antes de começar" com leituras prévias;
  - lista graduada `[facil]`, `[medio]`, `[desafiador]`, cada item com dica expansível (`<details>`);
  - seção "Critérios de aceite" com checklist.
- **Playground espelhado**: versão manipulável em `playground/<modulo>/` seguindo a convenção local (arquivo `NN-slug.js` nos módulos baseados em script; subpasta nas aulas com HTML).
- **Quiz**: vive no nível do módulo (um quiz por módulo, não por aula). Ao criar módulo novo, inclua o `quiz.md` correspondente.
- Atualize a tabela de aulas em [`docs/CURRICULUM.md`](./CURRICULUM.md).

## Estilo de código

O lint é automatizado com ESLint (`npm run lint`) usando `airbnb-base`. Resumo das regras vigentes:

- Indentação de **2 espaços**.
- **Aspas simples** em strings.
- **Ponto e vírgula** sempre.
- Preferir `const` e `let`; nunca `var`.
- Comentários e identificadores em **pt-BR** (nomes descritivos em português).
- Sem emojis no código nem na documentação.

## Estilo de texto

- Português formal-didático, claro e direto.
- **Sem emojis** em títulos, corpo de texto ou tabelas.
- Títulos markdown consistentes em *sentence case* (apenas a primeira letra maiúscula), exceto nomes próprios e tecnologias.
- Links relativos corretos dentro do repositório; evite URLs encurtadas.
- Tabelas markdown para conteúdo tabular (cronogramas, rubricas, comparações).

## Checklist de pull request

Antes de solicitar revisão, confirme:

- [ ] A issue correspondente existe e está referenciada (quando aplicável).
- [ ] Branch nomeada no padrão `feat/descricao-curta`.
- [ ] Commits seguem o padrão semântico.
- [ ] Código passa em `npm run lint` sem erros.
- [ ] Exemplos executáveis rodam sem falhas (`node arquivo.js`).
- [ ] Nova aula contém README.md, exemplo e exercicios.md completos.
- [ ] Playground espelhado criado (quando aplicável).
- [ ] Documentação afetada foi atualizada (inclusive CURRICULUM.md).
- [ ] Textos revisados: ortografia, pt-BR formal, sem emojis.

## Como reportar bugs

Abra uma issue contendo:

1. **Título objetivo** (ex.: "Erro de sintaxe no exercicio 3 de 05-condicionais").
2. **Localização exata**: caminho do arquivo e linha aproximada.
3. **Passos para reproduzir**: comandos executados e saída observada.
4. **Comportamento esperado** versus **comportamento obtido**.
5. **Ambiente**: sistema operacional, versão do Node e do navegador (quando pertinente).

Se souber a causa, sugira a correção na mesma issue; se puder, envie o pull request diretamente.

## Reconhecimento

- Toda contribuição aceita recebe crédito no próprio pull request (merge registrado no histórico do Git).
- Contribuições relevantes podem ser destacadas com o marcador `Co-authored-by:` no commit, garantindo autoria compartilhada permanente.
- Colaboradores recorrentes poderão ser convidados a revisar pull requests de outras pessoas.
