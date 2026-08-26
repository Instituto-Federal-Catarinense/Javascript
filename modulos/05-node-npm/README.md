# Módulo 05 — Node.js e npm

A partir daqui o JavaScript roda fora do navegador: você instala e usa o Node.js, organiza código em módulos CommonJS, explora módulos nativos como `fs`, `os` e `http`, e constrói um servidor web simples com roteamento manual. É a porta de entrada para back-end e pré-requisito direto dos módulos de Express e API REST.

## Pré-requisitos

- Módulos 01 a 04 concluídos.
- Terminal/linha de comando básica (navegar pastas, executar comandos).
- Node.js instalado (versão LTS recomendada) — verifique com `node -v`.

## Mapa das aulas

| # | Aula | Você vai aprender |
|---|------|-------------------|
| 01 | [Introdução ao Node](./01-introducao-node/) | O que é o runtime Node/V8, executar scripts, `process.argv` e REPL |
| 02 | [Módulos Nativos](./02-modulos-nativos/) | CommonJS (`require`/`module.exports`), `fs`, `os`, `http` e criação de módulos próprios |
| 03 | [Servidor HTTP e Roteamento](./03-servidor-http-roteamento/) | Criar um servidor com o módulo `http`, ler requisições e rotear manualmente |

## Como estudar este módulo

1. Leia o README da aula.
2. Execute o exemplo da aula (ex.: `node hello-world.js`) e o playground correspondente em `../../playground/05-node-npm/`.
3. Resolva o `exercicios.md` da aula.
4. Ao terminar TODAS as aulas, faça o [quiz do módulo](./quiz.md).

## Ao final deste módulo você será capaz de:

- Executar scripts JavaScript no terminal e receber argumentos via `process.argv`.
- Exportar e importar código com CommonJS (`module.exports` e `require`).
- Ler e escrever arquivos com o módulo `fs` e obter informações do sistema com `os`.
- Subir um servidor HTTP na porta desejada e responder requisições.
- Implementar roteamento básico por caminho e método HTTP sem frameworks.

## Projeto relacionado

- Aplique o que aprendeu no [Projeto 02 — API de Tarefas Express](../../projetos-equipe/projeto-02-api-tarefas-express/): entender servidor, rotas e módulos nativos prepara o terreno para construir a API com Express nos módulos 06 e 07.

## Referências

- [Node.js — Documentação oficial (API)](https://nodejs.org/docs/latest/api/documentation.html)
- [Node.js — Guia de introdução](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [Node.js — Módulo fs](https://nodejs.org/docs/latest/api/fs.html)
- [Node.js — Módulo http](https://nodejs.org/docs/latest/api/http.html)
- [npm — Documentação](https://docs.npmjs.com/)
