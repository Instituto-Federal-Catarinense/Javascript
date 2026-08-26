<!-- SOLUÇÃO-MODELO — 01-npm-e-package-json | Enunciado: exercícios 1 e 2 (+ notas dos demais) de ../01-npm-e-package-json/exercicios.md -->

# Gabarito comentado — npm e package.json

## Exercício 1) Inicialize seu pacote

Passos executados na pasta `pratica/`:

```bash
npm init -y
```

O `-y` aceita todos os padrões. Depois, o `package.json` gerado foi editado à mão:

```json
{
  "name": "loja-api",
  "version": "1.0.0",
  "description": "API REST da loja construída durante o módulo de Express",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "author": "Aluna Maria Silva",
  "license": "MIT"
}
```

Campo por campo:

| Campo        | Para que serve                                                                 |
|--------------|--------------------------------------------------------------------------------|
| `name`       | Identifica o pacote (minúsculas, sem espaços).                                 |
| `version`    | Semver `MAIOR.MENOR.PATCH`.                                                    |
| `description`| Texto curto exibido no npm e no GitHub.                                        |
| `main`       | Ponto de entrada quando alguém faz `require('<pacote>')`.                      |
| `scripts`    | Atalhos de comandos executados via `npm run <nome>` (ou `npm start`).          |
| `author`     | Quem mantém o projeto.                                                         |
| `license`    | Termos legais de reuso (`MIT`, `ISC`, `UNLICENSED`...).                        |

**Resposta à pergunta:** para `npm start` funcionar é obrigatório existir a chave
`"start"` dentro de `"scripts"`. O `npm start` é um dos poucos apelidos oficiais
do npm (`start`, `test`, `stop`, `restart`) e executa exatamente o comando
registrado nele.

## Exercício 2) Interprete um package.json

Dado o trecho da lista:

```json
{
  "name": "loja-api",
  "scripts": { "start": "node server.js", "dev": "nodemon server.js", "test": "jest --coverage" },
  "dependencies": { "express": "^4.21.2" },
  "devDependencies": { "nodemon": "^3.1.9", "jest": "^29.7.0" }
}
```

Respostas em comentário (JSON não aceita comentários, então vão aqui):

- **Qual comando sobe a aplicação?** `npm start` — ele dispara
  `node server.js`, registrado em `"scripts"."start"`.
  Alternativa direta: `node server.js`.
- **O que `^4.21.2` permite?** Trava o MAJOR em `4` e libera atualizações de
  MINOR e PATCH: aceita `>= 4.21.2` e `< 5.0.0` (ex.: `4.22.0`, `4.25.3`).
- **E se fosse `~4.21.2`?** Travaria MAJOR **e** MINOR, liberando apenas PATCH:
  aceita `>= 4.21.2` e `< 4.22.0`.

## Notas rápidas sobre os demais itens

- **Exercício 3:** `express` vai para `dependencies` (`npm install express`);
  `nodemon` vai para `devDependencies` (`npm install --save-dev nodemon`),
  pois só serve ao desenvolvimento. Em produção instala-se com
  `npm install --omit=dev`. Cada instalação cria/atualiza `package-lock.json`
  (versões EXATAS) e preenche `node_modules`.
- **Exercício 4:** `"dev"` e `"prod"` são scripts personalizados → exigem
  `npm run dev`; `npm test` dispensa o `run` por ser apelido oficial.
- **Exercício 5:** `npx cowsay ...` baixa o pacote temporariamente num cache do
  npm e o executa sem instalá-lo no projeto. Apagar `node_modules` e rodar
  `npm install` de novo NÃO altera o lockfile: é justamente a função dele
  congelar versões exatas — por isso ele DEVE ir para o Git.
- **Exercício 6:** modelo de `package.json` escrito do zero (desafio):

```json
{
  "name": "clinica-api",
  "version": "1.0.0",
  "description": "API da clínica com agendamento de consultas",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "seed": "node scripts/seed.js"
  },
  "keywords": ["api", "clinica", "rest"],
  "author": "Equipe Clinica",
  "license": "MIT",
  "dependencies": {
    "express": "^4.21.2",
    "mongoose": "^8.9.0"
  },
  "devDependencies": {
    "nodemon": "^3.1.9"
  }
}
```

Validação do desafio: rode `npm install` num diretório vazio com esse arquivo e
depois `npm run seed` — o npm executa `node scripts/seed.js` criado para popular
os dados.

## DISCUSSÃO

- JSON não permite comentários nem vírgula sobrando: erros de sintaxe aparecem
  na saída do próprio npm ao ler o arquivo.
- `^` vs `~` é a dúvida clássica de semver: cuidado (caret) = "aceito novidades
  compatíveis"; til = "só correções de patch".
- O `package-lock.json` versiona a ÁRVORE EXATA de dependências; sem ele, dois
  colegas podem instalar versões ligeiramente diferentes e reproduzir bugs que
  o outro não vê.
