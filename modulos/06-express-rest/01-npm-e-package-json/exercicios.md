# Exercícios — npm e package.json

> **Como resolver:** crie os arquivos `exercicio-01.js`, `exercicio-02.js`... nesta mesma pasta,
> no seu fork ou na sua branch pessoal. Ao final do módulo compare com `../../solucoes/`.
> (Para aulas com app Express/Node: trabalhe numa CÓPIA da pasta chamada `pratica/`.)

## Antes de começar
- Releia o [README da aula](./README.md) e execute os exemplos.
- Revise `npm init`, `dependencies` vs `devDependencies`, scripts, `npx` e semver.

## Lista de exercícios

### 1) Inicialize seu pacote `[fácil]`
Em `pratica/`, rode `npm init -y`, abra o `package.json` gerado e preencha à mão: `name` com `loja-api`, `description`, `author` e `license`. Qual campo é obrigatório para que `npm start` funcione?

<details>
<summary>Dica</summary>

O `-y` aceita todos os padrões; depois você edita o JSON direto. Scripts vivem na chave `"scripts"`.
</details>

### 2) Interprete um package.json `[fácil]`
Dado o trecho abaixo, responda em comentários: qual comando sobe a aplicação? O que `^4.21.2` permite de atualizações? E se fosse `~4.21.2`?

```json
{
  "name": "loja-api",
  "scripts": { "start": "node server.js", "dev": "nodemon server.js", "test": "jest --coverage" },
  "dependencies": { "express": "^4.21.2" },
  "devDependencies": { "nodemon": "^3.1.9", "jest": "^29.7.0" }
}
```

<details>
<summary>Dica</summary>

`^` trava o major e libera minor/patch; `~` trava major.minor e libera só patch.
</details>

### 3) Dependência de produção vs desenvolvimento `[médio]`
Instale `express` normalmente e `nodemon` como dependência de desenvolvimento:

```bash
npm install express
npm install --save-dev nodemon
```

Inspecione o `package.json` e responda: por que `nodemon` não deveria ir para produção? O que acontece com a pasta `node_modules` e o arquivo `package-lock.json` após cada instalação?

<details>
<summary>Dica</summary>

A flag `--save-dev` grava em `devDependencies`; em produção instala-se com `npm install --omit=dev`.
</details>

### 4) Scripts personalizados `[médio]`
Adicione ao `pratica/package.json`: `"dev"` (usando nodemon), `"test"` (echo `"sem testes ainda"`) e `"prod"` (`NODE_ENV=production node server.js`). Execute os três com npm e anote a diferença entre rodar `npm start`, `npm run dev` e `npm test`.

<details>
<summary>Dica</summary>

`start` e `test` dispensam o `run`; qualquer script próprio precisa de `npm run <nome>`.
</details>

### 5) Execute e explique: npx e lockfile `[médio]`
Execute os comandos abaixo, COPIE as saídas relevantes e EXPLIQUE:
1. `npx cowsay "npm funciona"` — de onde veio o pacote se ele não está instalado?
2. Compare `git diff package-lock.json` antes/depois de apagar `node_modules` e rodar `npm install` novamente. Muda algo? Por que o lockfile deve ir para o Git?

<details>
<summary>Dica</summary>

O `npx` baixa e executa temporariamente; o lockfile congela versões exatas para toda a equipe.
</details>

### 6) Desafio integrador: package.json do zero `[desafiador]`
Sem `npm init`, escreva manualmente um `package.json` completo para uma API de clínica: nome, versão em semver, descrição, main, scripts (`start`, `dev`, `seed` para popular dados), `dependencies` (express, mongoose) e `devDependencies` (nodemon). Depois rode `npm install` num diretório vazio com esse arquivo e prove que `npm run seed` executa o script que você criou.

<details>
<summary>Dica</summary>

JSON não permite vírgula sobrando nem comentários; valide olhando o erro do npm se algo falhar.
</details>

## Critérios de aceite
- [ ] O código roda sem erros
- [ ] `package-lock.json` está presente e as respostas sobre `^` vs `~` estão corretas
- [ ] As ferramentas de desenvolvimento estão em `devDependencies` (não em `dependencies`)
