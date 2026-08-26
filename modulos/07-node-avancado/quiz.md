# Quiz — Módulo 07: Node Avançado

Responda sem consultar o material. Depois confira o gabarito comentado no fim.

## Parte 1 — Múltipla escolha

**Q1.** Um token JWT é composto por três partes separadas por ponto:

- a) usuário, senha, expiração
- b) header, payload, assinatura
- c) id, hash, salt
- d) chave pública, chave privada, certificado

**Q2.** As variáveis de ambiente de um processo Node ficam acessíveis em:

- a) `process.env`
- b) `global.vars`
- c) `node.config`
- d) `require('settings')`

**Q3.** Para qual tarefa o pacote multer foi criado?

- a) Criptografar senhas
- b) Processar requisições multipart/form-data (upload de arquivos)
- c) Conectar ao MongoDB
- d) Escrever testes unitários

**Q4.** Qual é a principal diferença entre WebSocket e HTTP tradicional?

- a) WebSocket só funciona no navegador
- b) WebSocket é mais lento porque usa UDP
- c) WebSocket mantém uma conexão persistente e bidirecional, sem repetir requisições
- d) Não há diferença prática

## Parte 2 — Verdadeiro ou falso (justifique)

**Q5.** Senhas de usuários devem ser armazenadas como hash (ex.: bcrypt), nunca em texto puro.

**Q6.** Adotar WebSockets exige desligar o servidor HTTP da aplicação.

**Q7.** No Jest, `expect(valor).toBe(esperado)` compara usando igualdade estrita para primitivos.

## Parte 3 — Analise o código

**Q8.**

```js
const token = jwt.sign({ id: 1 }, process.env.SECRET, { expiresIn: '1h' });
jwt.verify(token, 'outra-chave');
```

O que acontece na linha do `verify`, sabendo que a constante usada no `sign` era diferente? O código devolve o payload?

**Q9.**

```js
require('dotenv').config();
console.log(typeof process.env.PORT);
// arquivo .env contém: PORT=3000
```

O que imprime? Por que não imprime `'number'`?

**Q10.**

```js
function dobrar(n) { return n * 2; }

test('dobrar 3 dá 6', () => {
  expect(dobrar(3)).toBe(6);
});
```

Esse teste passa ou falha? E se o matcher fosse `.toBe(7)`?

---

<details>
<summary><strong>Gabarito comentado</strong> (clique após responder)</summary>

**Q1 — b)** Um JWT tem header (algoritmo/tipo), payload (claims/dados) e signature (assinatura gerada com a chave secreta). A assinatura garante integridade: alterar qualquer parte invalida o token.

**Q2 — a)** `process.env` é um objeto com as variáveis de ambiente do processo. Com dotenv, valores de um arquivo `.env` são carregados nele na inicialização.

**Q3 — b)** Multer interpreta corpos `multipart/form-data` (necessários para arquivos) e disponibiliza metadados em `req.file`/`req.files`. Hash de senha é bcrypt; Mongo usa mongoose/drivers.

**Q4 — c)** HTTP request/response: cada interação abre uma troca iniciada pelo cliente. WebSocket faz um handshake HTTP e depois mantém o canal aberto nos dois sentidos — ideal para chat, notificações e jogos em tempo real.

**Q5 — Verdadeiro.** Texto puro vaza em qualquer breach. bcrypt aplica hash com salt único e custo computacional, tornando reversão inviável; compara-se com `bcrypt.compare()` no login.

**Q6 — Falso.** Na web, o WebSocket começa com um handshake sobre HTTP e o mesmo servidor (ou um upgrade dele) passa a tratar o protocolo ws. Servidores HTTP e WebSocket coexistem normalmente.

**Q7 — Verdadeiro.** `toBe` usa Object.is (equivalente prático ao `===` para primitivos). Para objetos/arrays comparados por estrutura, use `toEqual`.

**Q8 — Lança erro (`JsonWebTokenError: invalid signature`).** O verify recalcula a assinatura com a chave informada e compara com a do token; chaves diferentes não batem, então o payload NÃO é devolvido — o método lança exceção, que deve ser capturada (e geralmente resulta em resposta 401).

**Q9 — Imprime `'string'`.** Toda variável de ambiente chega como string, mesmo contendo dígitos. Para usar como número: `Number(process.env.PORT)` ou `parseInt`.

**Q10 — Passa**, pois `dobrar(3)` retorna `6` e o matcher confirma. Com `.toBe(7)` o teste FALHA: o Jest reporta valor recebido vs esperado, ajudando a localizar o bug.

</details>
