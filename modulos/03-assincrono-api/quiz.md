# Quiz — Módulo 03: Assíncrono e API

Responda sem consultar o material. Depois confira o gabarito comentado no fim.

## Parte 1 — Múltipla escolha

**Q1.** Qual estrutura é usada para capturar erros em código síncrono?

- a) `if`/`else`
- b) `try`/`catch`
- c) `switch`
- d) `for...of`

**Q2.** A função `fetch()` devolve:

- a) O corpo da resposta já convertido em objeto
- b) Uma Promise que resolve para um objeto Response
- c) Uma string com o HTML da página
- d) Um erro se o status não for 200

**Q3.** `JSON.parse()` serve para:

- a) Transformar um objeto JS em string JSON
- b) Converter uma string JSON em valor JavaScript
- c) Validar a sintaxe de um arquivo `.json` no disco
- d) Enviar JSON para um servidor

**Q4.** A palavra-chave `await` só pode ser usada:

- a) Em qualquer função
- b) No escopo global de qualquer script
- c) Dentro de funções declaradas com `async` (ou top-level em módulos)
- d) Apenas dentro de `try`

## Parte 2 — Verdadeiro ou falso (justifique)

**Q5.** `setTimeout(fn, 0)` executa `fn` imediatamente, antes do processamento das promises pendentes.

**Q6.** O método `response.json()` de uma resposta fetch retorna uma Promise.

**Q7.** Uma Promise só pode estar em um de três estados: pending, fulfilled ou rejected — e depois de resolvida não muda mais.

## Parte 3 — Analise o código

**Q8.**

```js
console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));
console.log('D');
```

Em que ordem as letras aparecem no console?

**Q9.**

```js
async function teste() {
  throw new Error('falha');
}
teste().catch((e) => console.log('capturado:', e.message));
```

O que imprime? O programa quebra?

**Q10.**

```js
const texto = '{"ativo":true,"notas":[7,8]}';
const obj = JSON.parse(texto);
console.log(obj.notas.length);
```

O que imprime? E se a string fosse `'{"ativo":true}'`, qual seria a saída de `obj.notas.length`?

---

<details>
<summary><strong>Gabarito comentado</strong> (clique após responder)</summary>

**Q1 — b)** `try`/`catch` captura erros lançados (por runtime ou por `throw`) durante a execução síncrona do bloco `try`. Erros dentro de callbacks assíncronos exigem tratamento no próprio fluxo assíncrono.

**Q2 — b)** `fetch()` sempre resolve numa Promise de `Response`, mesmo para status 404/500 (só rejeita em falha de rede). Cabe a você verificar `response.ok` e converter o corpo com `.json()` ou `.text()`.

**Q3 — b)** `JSON.parse` desserializa: string JSON para valor JS. O inverso (objeto JS para string JSON) é `JSON.stringify`. Lança `SyntaxError` se a string for inválida — por isso costuma ficar dentro de `try`.

**Q4 — c)** `await` pausa a execução da função `async` até a promise resolver. Fora disso, só é permitido no topo de módulos ES (top-level await). Usar fora gera SyntaxError.

**Q5 — Falso.** Mesmo com delay 0, o callback vai para a fila de tarefas (macrotasks). As microtasks (callbacks de promises) têm prioridade e rodam antes; além disso, todo o script síncrono termina primeiro. Por isso a ordem típica é: código síncrono, microtasks, macrotasks.

**Q6 — Verdadeiro.** Ler o corpo é assíncrono: `response.json()` retorna uma Promise que resolve com o corpo parseado. É por isso que usamos `await response.json()`.

**Q7 — Verdadeiro.** Estados possíveis: pending (pendente), fulfilled (realizada) ou rejected (rejeitada). Após settle (resolver ou rejeitar), o estado e o valor são imutáveis.

**Q8 — Ordem: A, D, C, B.** `A` e `D` são síncronos e rodam primeiro. `C` é uma microtask (promise já resolvida) e executa logo após o script síncrono terminar. `B` está na fila de macrotasks do `setTimeout` e roda por último, mesmo com delay zero.

**Q9 — Imprime `"capturado: falha"` sem quebrar o programa.** Dentro de uma função `async`, um `throw` vira uma promise rejeitada; o `.catch` externo intercepta essa rejeição, exatamente como um `try/catch` faria com `await`.

**Q10 — Imprime `2`.** A string JSON contém o array `[7, 8]`, cujo `length` é 2. Se fosse `'{"ativo":true}'`, `obj.notas` seria `undefined` e `obj.notas.length` lançaria `TypeError: Cannot read properties of undefined`.

</details>
