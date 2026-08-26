# Exercícios — REST API

> **Como resolver:** crie os arquivos `exercicio-01.js`, `exercicio-02.js`... nesta mesma pasta,
> no seu fork ou na sua branch pessoal. Ao final do módulo compare com `../../solucoes/`.
> (Para aulas com app Express/Node: trabalhe numa CÓPIA da pasta chamada `pratica/`.)

## Antes de começar
- Releia o [README da aula](./README.md) e rode a API com `npm install` e `npm start`.
- Revise os verbos GET/POST/PUT/DELETE, status codes e `express.Router`.

## Lista de exercícios

### 1) Buscar um usuário por id `[fácil]`
Na cópia em `pratica/`, complete o Router de usuários com `GET /usuarios/:id`: retorna 200 com o objeto ou 404 com `{ erro: 'Usuário não encontrado' }`. Teste os dois caminhos:

```bash
curl -i http://localhost:3002/usuarios/1
curl -i http://localhost:3002/usuarios/999
```

<details>
<summary>Dica</summary>

`req.params.id` é string — converta com `Number()` antes do `find`.
</details>

### 2) Validação no POST `[fácil]`
Fortaleça o POST `/usuarios`: exija `nome` (texto não vazio) e `email` contendo `@`. Respostas: 400 com lista de erros `{ erros: ['Nome obrigatório', ...] }` quando inválido; 201 com o objeto criado quando válido.

<details>
<summary>Dica</summary>

Acumule as mensagens num array antes de decidir entre 400 e 201.
</details>

### 3) Paginação na listagem `[médio]`
Adicione paginação ao `GET /usuarios` via query string:

```bash
curl "http://localhost:3002/usuarios?pagina=2&limite=3"
```

Resposta: `{ pagina: 2, limite: 3, total: 12, dados: [...] }`. Padrões sem query: página `1`, limite `10`.

<details>
<summary>Dica</summary>

Combinado com `slice()`: `(pagina - 1) * limite` é o início do recorte.
</details>

### 4) Separando controller e serviço `[médio]`
Refatore a pasta `pratica/`: mova a lógica para `services/usuarioService.js` (funções `listar`, `buscarPorId`, `criar`, `atualizar`, `remover`) e deixe `routes/usuarios.js` apenas recebendo req/res e chamando o serviço. As respostas HTTP devem continuar idênticas.

<details>
<summary>Dica</summary>

O serviço devolve dados OU lança um erro com status (`const e = new Error(...); e.status = 404; throw e;`); a rota traduz isso em resposta.
</details>

### 5) Execute e explique: ciclo completo com curl `[médio]`
Execute o bloco abaixo contra sua API, COPIE cada resposta e EXPLIQUE o status devolvido em cada passo:

```bash
# cria
curl -i -X POST http://localhost:3002/usuarios \
  -H "Content-Type: application/json" \
  -d '{"nome":"Bruna","email":"bruna@loja.com"}'
# lista
curl -i http://localhost:3002/usuarios
# atualiza (use o id retornado acima)
curl -i -X PUT http://localhost:3002/usuarios/ID_AQUI \
  -H "Content-Type: application/json" \
  -d '{"nome":"Bruna S."}'
# remove
curl -i -X DELETE http://localhost:3002/usuarios/ID_AQUI
# tenta remover de novo
curl -i -X DELETE http://localhost:3002/usuarios/ID_AQUI
```

Por que o segundo DELETE não devolve 204?

<details>
<summary>Dica</summary>

Anote a sequência esperada: 201 → 200 → 200 → 204 → 404. O filtro do DELETE não encontra mais ninguém.
</details>

### 6) Desafio integrador: CRUD de produtos `[desafiador]`
Crie `routes/produtos.js` com CRUD completo montado em `/produtos` (mesmos padrões dos exercícios: validação 400, busca por id 404, listagem paginada), seguindo a separação controller/serviço do exercício 4. Campos: `nome`, `preco` (número positivo), `categoria`. Teste tudo com um bloco curl análogo ao do exercício 5.

<details>
<summary>Dica</summary>

Monte no `app.js` com `app.use('/produtos', require('./routes/produtos'));`
</details>

## Critérios de aceite
- [ ] O código roda sem erros
- [ ] Cada falha devolve o status correto (400 validação, 404 inexistente, 201 criação, 204 remoção)
- [ ] Rotas respondem apenas JSON e o desafio inclui bloco curl de teste
