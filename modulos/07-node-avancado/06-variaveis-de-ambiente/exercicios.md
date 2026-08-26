# Exercícios — Variáveis de Ambiente

> **Como resolver:** crie os arquivos `exercicio-01.js`, `exercicio-02.js`... nesta mesma pasta,
> no seu fork ou na sua branch pessoal. Ao final do módulo compare com `../../solucoes/`.
> (Para aulas com app Express/Node: trabalhe numa CÓPIA da pasta chamada `pratica/`.)

## Antes de começar
- Releia o [README da aula](./README.md), copie `.env.example` para `.env` e rode o exemplo com `npm install` e `npm start`.
- Revise `process.env`, o carregamento do `dotenv` e o papel do `.env.example`.

## Lista de exercícios

### 1) Porta configurável `[fácil]`
No `pratica/app.js`, troque a porta fixa por `process.env.PORTA || 3006`. Adicione `PORTA=4000` no seu `.env` e prove que o servidor sobe nela; depois remova a linha e confirme o fallback para 3006.

<details>
<summary>Dica</summary>

O `require('dotenv').config()` precisa vir ANTES de qualquer leitura de `process.env`.
</details>

### 2) Execute e explique: o que chega em process.env `[fácil]`
Crie `sondagem.js` que imprime `process.env.PORTA` e `process.env.APP_SEGREDO` (adicione os dois no `.env`). Execute, COPIE a saída e EXPLIQUE: por que esses valores NÃO podem ir para o Git? Confirme que `.env` está listado no `.gitignore` da cópia e responda o que o `.env.example` faz de diferente.

<details>
<summary>Dica</summary>

O `.example` documenta CHAVES sem valores reais — é ele que versionamos.
</details>

### 3) Validação obrigatória na inicialização `[médio]`
Crie `config/appConfig.js` que valida ao ser importado: se `APP_SEGREDO` não existir, lance um erro claro (`'APP_SEGREDO não definida — verifique seu .env'`) antes do app subir. Importe-o no topo do `app.js` e teste removendo a variável: a aplicação deve falhar RÁPIDO, com mensagem legível.

<details>
<summary>Dica</summary>

Valide logo no carregamento do módulo de configuração, não no meio de uma rota.
</details>

### 4) Comportamento por ambiente `[médio]`
Use `NODE_ENV` para alternar comportamentos: em `development`, logs detalhados das requisições; em `production`, apenas erros. Adicione `"dev": "NODE_ENV=development nodemon app.js"` e `"start": "NODE_ENV=production node app.js"` aos scripts. Demonstre os dois modos.

<details>
<summary>Dica</summary>

Um simples `const isDev = process.env.NODE_ENV !== 'production';` resolve a maioria dos casos.
</details>

### 5) Nunca vaze segredos nos logs `[médio]`
Implemente um middleware de log que imprime método e URL, mas garanta que o valor de `APP_SEGREDO` nunca apareça: mesmo se alguém passar `?segredo=...` na query, o log deve mascará-lo. Escreva um comentário explicando onde segredos costumam vazar (logs, respostas de erro e stack traces).

<details>
<summary>Dica</summary>

Filtre chaves sensíveis antes de serializar qualquer objeto: `delete copia.segredo` ou substitua por `'***'`.
</details>

### 6) Desafio integrador: configuração central da clínica `[desafiador]`
Estruture `pratica/config/index.js` como ÚNICO ponto de configuração: leia e valide `PORTA`, `NODE_ENV`, `APP_SEGREDO`, `MONGODB_URI` e `JWT_EXPIRA_EM`, exportando tudo já convertido (números como number) com defaults documentados. Atualize o `.env.example` da cópia com TODAS as chaves usadas. Reescreva o `app.js` para consumir só esse módulo e prove que nenhum outro arquivo lê `process.env` diretamente.

<details>
<summary>Dica</summary>

Exporte um objeto congelado: `module.exports = Object.freeze({ porta: ..., ... });`
</details>

## Critérios de aceite
- [ ] O código roda sem erros
- [ ] O `.env` real está fora do Git e o `.env.example` documenta todas as chaves
- [ ] A aplicação falha rápido com mensagem clara quando falta variável obrigatória
