# Módulo 07 — Node Avançado

Este módulo completa a formação back-end com os temas que separam um protótipo de uma aplicação real: persistência em banco de dados, autenticação segura, upload de arquivos, comunicação em tempo real com WebSockets, testes automatizados, configuração por variáveis de ambiente e debugging profissional. É aqui que o Projeto 02 ganha produção.

## Pré-requisitos

- Módulo 06 completo (Express, middleware e REST).
- Módulos 01-04 concluídos (assincronismo e POO são intensivos).
- Projeto 02 iniciado ajuda, pois os exemplos dialogam com ele.

## Mapa das aulas

| # | Aula | Você vai aprender |
|---|------|-------------------|
| 01 | [Banco de Dados](./01-banco-de-dados/) | Modelos e conexão com banco, operações CRUD e ORMs/Mongoose |
| 02 | [Autenticação](./02-autenticacao/) | Hash de senhas com bcrypt, tokens JWT e middleware de proteção de rotas |
| 03 | [Upload de Arquivos](./03-upload-de-arquivos/) | Recepção de arquivos multipart/form-data com multer |
| 04 | [WebSockets](./04-websockets/) | Comunicação bidirecional em tempo real com o pacote ws |
| 05 | [Testes](./05-testes/) | Testes automatizados com Jest: `test`, `expect`, matchers e cobertura |
| 06 | [Variáveis de Ambiente](./06-variaveis-de-ambiente/) | Configuração com `process.env` e dotenv; separar segredos do código |
| 07 | [Debugging](./07-debugging/) | Depurar com inspector, breakpoints, VS Code e logs estruturados |

## Como estudar este módulo

1. Leia o README da aula.
2. Execute o exemplo da aula: dentro da pasta da aula rode `npm install` quando houver `package.json` e depois `node app.js`.
3. Resolva o `exercicios.md` da aula.
4. Ao terminar TODAS as aulas, faça o [quiz do módulo](./quiz.md).

## Ao final deste módulo você será capaz de:

- Conectar uma API Express a um banco de dados e implementar CRUD completo.
- Autenticar usuários com senha hasheada e proteger rotas com JWT.
- Receber uploads de arquivos validando tipo e tamanho.
- Implementar funcionalidades em tempo real (como chat ou notificações) com WebSockets.
- Escrever testes automatizados e rodá-los com npm scripts.
- Externalizar configurações sensíveis para variáveis de ambiente.
- Diagnosticar bugs usando o debugger do Node em vez de apenas `console.log`.

## Projeto relacionado

- Aplique o que aprendeu no [Projeto 02 — API de Tarefas Express](../../projetos-equipe/projeto-02-api-tarefas-express/): adicione login com JWT, persistência real, testes da API e configuração por ambiente ao projeto.

## Referências

- [Node.js — Módulo debugger](https://nodejs.org/docs/latest/api/debugger.html)
- [Node.js — Variáveis de ambiente](https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs)
- [Jest — Documentação oficial](https://jestjs.io/pt-BR/)
- [npm — bcrypt](https://www.npmjs.com/package/bcrypt)
- [npm — jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [npm — multer](https://www.npmjs.com/package/multer)
