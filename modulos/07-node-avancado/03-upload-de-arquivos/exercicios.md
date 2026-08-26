# Exercícios — Upload de Arquivos (Multer)

> **Como resolver:** crie os arquivos `exercicio-01.js`, `exercicio-02.js`... nesta mesma pasta,
> no seu fork ou na sua branch pessoal. Ao final do módulo compare com `../../solucoes/`.
> (Para aulas com app Express/Node: trabalhe numa CÓPIA da pasta chamada `pratica/`.)

## Antes de começar
- Releia o [README da aula](./README.md) e rode o exemplo com `npm install` e `npm start`.
- Envie um campo `arquivo` para `/upload` como no exemplo antes de modificar qualquer coisa.

## Lista de exercícios

### 1) Limite de tamanho `[fácil]`
Configure o Multer para recusar arquivos acima de 1 MB (`limits: { fileSize: 1024 * 1024 }`) e trate o erro devolvendo 400 com `{ erro: 'Arquivo maior que 1 MB' }`. Prove criando um arquivo grande:

```bash
dd if=/dev/zero of=grande.png bs=1048576 count=2
curl -i -F "arquivo=@grande.png" http://localhost:3005/upload
```

<details>
<summary>Dica</summary>

O Multer lança `MulterError`; verifique `erro.code === 'LIMIT_FILE_SIZE'` dentro do middleware de erro.
</details>

### 2) Aceitar apenas imagens `[fácil]`
Adicione um `fileFilter` que aceita somente os mimetypes `image/png`, `image/jpeg` e `image/webp`. Qualquer outro tipo responde 415 com mensagem clara. Teste enviando um `.txt`.

<details>
<summary>Dica</summary>

No callback do filtro, chame `cb(new Error('Tipo não permitido'), false)` — e capture esse erro depois.
</details>

### 3) Execute e explique: nomes controlados `[médio]`
Troque a configuração para `diskStorage`: salve em `uploads/` renomeando cada arquivo para `<timestamp>-<contador><extensão>` gerada por você. Envie duas vezes o MESMO arquivo `foto.png`, liste a pasta e EXPLIQUE por que nenhum upload sobrescreveu o outro e por que NUNCA se usa `file.originalname` direto como nome final.

<details>
<summary>Dica</summary>

Em `filename`, monte o nome com `Date.now()`; derive a extensão de `file.mimetype` (ou `path.extname(originalname)`) — o nome original pode conter caminhos maliciosos.
</details>

### 4) Upload múltiplo `[médio]`
Crie a rota `POST /galeria` usando `upload.array('fotos', 5)`: até 5 imagens por envio. Responda 201 com `{ total: n, arquivos: [...] }`. Exceder 5 deve responder 400 com mensagem amigável (não um erro cru).

```bash
curl -i -F "fotos=@a.png" -F "fotos=@b.png" -F "fotos=@c.png" http://localhost:3005/galeria
```

<details>
<summary>Dica</summary>

O limite excedido chega como `LIMIT_UNEXPECTED_FILE`; mapeie esse código para uma mensagem humana.
</details>

### 5) Ficha anexa ao upload `[médio]`
Na rota `/upload` original, receba também os campos texto `descricao` e `paciente` (campos normais do multipart). Valide que vieram (400 caso contrário) e devolva 201 juntando metadados: `{ descricao, paciente, arquivo: { nomeSalvo, tamanho } }`.

<details>
<summary>Dica</summary>

Campos texto chegam em `req.body` quando declarados DEPOIS dos campos file no formulário/curl.
</details>

### 6) Desafio integrador: prontuário com exames `[desafiador]`
Monte o fluxo completo da clínica: `POST /pacientes/:id/exames` recebe um PDF do exame (limite 5 MB, apenas `application/pdf`) e até 3 fotos (campo separado `imagens`), salvos em pastas distintas (`uploads/exames`, `uploads/fotos`) com nomes controlados. Registre tudo num array em memória por paciente e crie `GET /pacientes/:id/exames` listando os arquivos registrados. Documente com curl os cenários: sucesso, PDF grande, tipo errado e mais de 3 fotos.

<details>
<summary>Dica</summary>

Use dois middlewares Multer com storages diferentes ou um único storage que decide a subpasta pelo `fieldname`.
</details>

## Critérios de aceite
- [ ] O código roda sem erros
- [ ] Tamanho e tipo são validados no servidor, com status 400/415 dedicados
- [ ] Nenhum nome final de arquivo vem do cliente sem tratamento
