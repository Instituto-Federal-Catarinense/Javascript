# Quiz — Módulo 05: Node.js e npm

Responda sem consultar o material. Depois confira o gabarito comentado no fim.

## Parte 1 — Múltipla escolha

**Q1.** Node.js é:

- a) Uma linguagem de programação nova, derivada do JavaScript
- b) Um runtime que executa JavaScript fora do navegador, sobre o motor V8
- c) Um framework web concorrente do Express
- d) Um gerenciador de pacotes

**Q2.** O comando `npm install express` faz:

- a) Atualiza o Node.js para a última versão
- b) Baixa o express para `node_modules/` e o registra em `package.json`
- c) Publica seu projeto no registro do npm
- d) Instala o express globalmente na máquina, sempre

**Q3.** Em CommonJS, qual par é usado corretamente para exportar/importar?

- a) `export default` / `import`
- b) `module.exports` / `require()`
- c) `exports` / `include()`
- d) `@export` / `@import`

**Q4.** No Node.js, `__dirname` representa:

- a) O diretório onde o comando foi executado
- b) A pasta raiz do projeto
- c) O diretório do arquivo em que a variável é usada
- d) O caminho do executável do Node

## Parte 2 — Verdadeiro ou falso (justifique)

**Q5.** Ao rodar `npm install` num projeto existente, as versões exatas instaladas vêm do `package-lock.json`, quando presente.

**Q6.** No Node.js existe o objeto global `window`, igual ao dos navegadores.

**Q7.** Módulos nativos como `fs` e `http` precisam ser instalados com npm antes do uso.

## Parte 3 — Analise o código

**Q8.**

```js
// soma.js
module.exports = (a, b) => a + b;

// main.js
const soma = require('./soma');
console.log(soma(2, 3));
```

Executando `node main.js`, o que imprime?

**Q9.**

```js
// app.js
console.log(process.argv.slice(2));
```

Executando `node app.js banana maçã`, o que imprime?

**Q10.**

```js
const http = require('http');
http.createServer((req, res) => {
  res.end('ok');
}).listen(3000);
console.log('subiu');
```

O que acontece após executar esse script? Ele encerra sozinho?

---

<details>
<summary><strong>Gabarito comentado</strong> (clique após responder)</summary>

**Q1 — b)** Node empacota o motor V8 (do Chrome) com bibliotecas para I/O, rede e sistema de arquivos, permitindo rodar JS no servidor. É um runtime; npm é seu gerenciador de pacotes, não a mesma coisa.

**Q2 — b)** Por padrão (npm 5+), instala no `node_modules/` local e salva em `"dependencies"` do `package.json`. Para instalar globalmente seria preciso `-g`. Publicar exige `npm publish`.

**Q3 — b)** CommonJS usa `module.exports` para expor valores e `require('./caminho')` para importar. `export`/`import` são da sintaxe ES Modules, que também existe no Node, mas é outro sistema.

**Q4 — c)** `__dirname` é o diretório do ARQUIVO atual, independente de onde o comando foi disparado. Já `process.cwd()` mostra o diretório de execução.

**Q5 — Verdadeiro.** Se houver lockfile, o npm instala exatamente as versões travadas nele, garantindo builds reproduzíveis entre máquinas. Sem lockfile, respeita os intervalos semânticos do `package.json`.

**Q6 — Falso.** `window` é exclusivo do navegador. O objeto global do Node é `globalThis` (e, historicamente, `global`). Usar `window` lança ReferenceError.

**Q7 — Falso.** Módulos nativos vêm embutidos no Node; basta `require('fs')`. npm serve para dependências de terceiros (express, bcrypt etc.).

**Q8 — Imprime `5`.** `main.js` importa a arrow function exportada por `soma.js` via `require('./soma')` (o `./` indica arquivo local) e chama `soma(2, 3)`.

**Q9 — Imprime `['banana', 'maçã']`.** `process.argv` contém `[nodePath, scriptPath, ...args]`; o `slice(2)` descarta os dois primeiros elementos, restando apenas os argumentos passados pelo usuário.

**Q10 — Imprime `"subiu"` e o processo CONTINUA rodando.** `listen(3000)` coloca o servidor aguardando conexões na porta 3000; como há trabalho pendente, o event loop não fica vazio e o script não encerra até você interrompê-lo (Ctrl+C).

</details>
