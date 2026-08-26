# Exercícios — Banco de Dados (MongoDB + Mongoose)

> **Como resolver:** crie os arquivos `exercicio-01.js`, `exercicio-02.js`... nesta mesma pasta,
> no seu fork ou na sua branch pessoal. Ao final do módulo compare com `../../solucoes/`.
> (Para aulas com app Express/Node: trabalhe numa CÓPIA da pasta chamada `pratica/`.)

## Antes de começar
- Releia o [README da aula](./README.md), configure `MONGODB_URI` e rode o exemplo com `npm install` e `npm start`.
- Revise Schema, Model, validações e as operações `find`, `findById`, `create`, `findOneAndUpdate` e `deleteOne`.

## Lista de exercícios

### 1) Validações no model Usuario `[fácil]`
Em `pratica/models/Usuario.js`, torne o schema mais rigoroso: `nome` obrigatório com no mínimo 3 caracteres, `email` único, obrigatório e validado por regex, `idade` mínima de 0. Tente criar um documento inválido pelo endpoint e observe o erro 500 — depois trate-o devolvendo 400.

<details>
<summary>Dica</summary>

Use `{ required: true, minlength: 3 }` e `{ unique: true, match: /.../ }`; erros do Mongoose chegam em `erro.name === 'ValidationError'`.
</details>

### 2) Execute e explique: timestamps e _id `[fácil]`
Adicione `{ timestamps: true }` ao schema, crie um usuário pela rota existente e faça `GET /usuarios`. COPIE a resposta e EXPLIQUE os campos `_id`, `createdAt` e `updatedAt`: quem gera o `_id`? O que acontece com `updatedAt` após um PUT?

<details>
<summary>Dica</summary>

O `_id` é um ObjectId gerado pelo MongoDB; `timestamps` mantém as duas datas automaticamente.
</details>

### 3) Busca por nome `[médio]`
Adicione `GET /usuarios?busca=ana` retornando apenas documentos cujo nome CONTENHA o texto, sem diferenciar maiúsculas:

```bash
curl "http://localhost:3003/usuarios?busca=ana"
```

<details>
<summary>Dica</summary>

`Usuario.find({ nome: new RegExp(busca, 'i') })` resolve; valide que `busca` veio antes de montar a regex.
</details>

### 4) CRUD completo na rota `[médio]`
Complete `pratica/app.js` com `GET /usuarios/:id`, `POST /usuarios`, `PUT /usuarios/:id` e `DELETE /usuarios/:id` usando o Model (não arrays em memória). Status esperados: 201 na criação, 200 nas demais, 404 quando o id não existe. Teste com curl como na aula de REST API.

<details>
<summary>Dica</summary>

`findByIdAndUpdate(id, req.body, { new: true, runValidators: true })` já devolve o documento atualizado e revalida.
</details>

### 5) Separando acesso a dados `[médio]`
Mova toda chamada ao Model para `pratica/services/usuarioService.js` e deixe as rotas apenas com req/res/next. Envolva cada handler em `try/catch` encaminhando para `next(erro)` e registre um middleware de erro final que responde 400 para ValidationError e 500 nos demais casos.

<details>
<summary>Dica</summary>

O serviço não conhece `req`/`res` — ele só conversa com o Mongoose e lança erros.
</details>

### 6) Desafio integrador: agenda da clínica `[desafiador]`
Modele o schema `Paciente` (`nome`, `cpf` único, `telefone`, `convenio` com valores limitados a uma lista via `enum`) e monte o CRUD completo em `/pacientes` seguindo a arquitetura de rotas + serviço. Inclua busca por CPF exato e contagem total em `GET /pacientes/relatorio` (`{ total: N, porConvenio: {...} }`). Popule 5 pacientes e teste todos os endpoints.

<details>
<summary>Dica</summary>

Para o relatório, combine `countDocuments()` e um `aggregate` com `$group` por `convenio`.
</details>

## Critérios de aceite
- [ ] O código roda sem erros
- [ ] Documentos inválidos respondem 400 (nunca 500) com mensagem legível
- [ ] Nenhuma credencial do banco está fixa no código — tudo vem de `process.env.MONGODB_URI`
