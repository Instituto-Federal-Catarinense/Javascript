# Exercícios — Autenticação (bcryptjs + JWT)

> **Como resolver:** crie os arquivos `exercicio-01.js`, `exercicio-02.js`... nesta mesma pasta,
> no seu fork ou na sua branch pessoal. Ao final do módulo compare com `../../solucoes/`.
> (Para aulas com app Express/Node: trabalhe numa CÓPIA da pasta chamada `pratica/`.)

## Antes de começar
- Releia o [README da aula](./README.md), defina `JWT_SEGREDO` e rode o exemplo com `npm install` e `npm start`.
- Revise `bcryptjs` (hash/compare) e `jsonwebtoken` (`sign`/`verify`).

## Lista de exercícios

### 1) Execute e explique: hash não volta atrás `[fácil]`
Usando `bcryptjs`, hasheado a senha `"senha123"` duas vezes e imprima os dois resultados. Depois valide ambos com `compareSync("senha123", hash)`. EXPLIQUE em comentário por que os hashes são diferentes e os dois passam na verificação.

<details>
<summary>Dica</summary>

O salt é aleatório e fica embutido no próprio hash gerado por `hashSync(senha, 10)`.
</details>

### 2) Cadastro com senha protegida `[fácil]`
Crie `POST /registrar` recebendo `{ nome, email, senha }`: recuse senhas com menos de 8 caracteres (400), salve o usuário SOMENTE com `bcryptjs.hashSync(senha, 10)` e responda 201 sem nunca ecoar o hash na resposta.

<details>
<summary>Dica</summary>

Monte o objeto de retorno escolhendo os campos, ou remova a senha antes de responder.
</details>

### 3) Login que emite token `[médio]`
Implemente `POST /login`: procure o email, use `compareSync` contra o hash salvo e, em caso de sucesso, assine um JWT com `{ sub: id, papel }` usando `JWT_SEGREDO`, devolvendo `{ token }`. Email inexistente e senha errada devem devolver a MESMA mensagem genérica 401.

<details>
<summary>Dica</summary>

A mensagem única ("Credenciais inválidas") evita revelar quais emails estão cadastrados.
</details>

### 4) Rota protegida extra `[médio]`
Extraia o middleware de verificação para `middleware/auth.js` (lê o cabeçalho `Authorization: Bearer <token>`, faz `jwt.verify` e anexa o payload em `req.usuario`). Proteja além das rotas da aula uma rota nova `GET /meus-pedidos` que responde com os pedidos fictícios do id dentro do token. Teste: sem token (401), token alterado (401) e token válido (200).

```bash
curl -H "Authorization: Bearer $TOKEN" http://localhost:3004/meus-pedidos
```

<details>
<summary>Dica</summary>

`authorization?.startsWith('Bearer ')` evita quebra com cabeçalho malformado.
</details>

### 5) Expiração e papéis `[médio]`
Adicione `expiresIn: '15m'` ao `sign` e crie a rota só-admin `GET /admin/relatorio` verificando `req.usuario.papel === 'admin'` (403 para clientes). Prove com curl: token expirado devolve 401 com mensagem clara sobre expiração e papel errado devolve 403.

<details>
<summary>Dica</summary>

Diferencie no catch do verify: `erro.name === 'TokenExpiredError'` merece mensagem própria; 403 é autenticado mas sem permissão.
</details>

### 6) Desafio integrador: fluxo completo da clínica `[desafiador]`
Monte o ciclo inteiro: `/registrar` (papel `cliente` fixo), `/registrar-admin` protegida para admins criarem outros admins, `/login`, middleware de auth reaproveitado e três rotas com níveis distintos — pública `/medicos`, autenticada `/consultas` e admin-only `/relatorios`. Entregue também um bloco bash documentando o teste completo do fluxo.

<details>
<summary>Dica</summary>

Persista usuários num array em memória se ainda não integrou banco; o importante é a cadeia registrar → login → usar → autorizar.
</details>

## Critérios de aceite
- [ ] O código roda sem erros
- [ ] Nenhuma senha aparece em texto puro em requisição de resposta ou log
- [ ] `JWT_SEGREDO` vem de variável de ambiente (nunca hardcoded)
