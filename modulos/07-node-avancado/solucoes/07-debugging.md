<!-- SOLUÇÃO-MODELO — 07-debugging | Enunciado: roteiro guiado dos exercícios 1 a 4 de ../07-debugging/exercicios.md -->

# Gabarito comentado — Debugging (roteiro guiado)

> Esta "solução" é um ROTEIRO: os exercícios pedem execução no terminal e
> inspeção no Chrome DevTools. Comandos exatos e o que observar em cada passo.

## Preparação

```bash
cd modulos/07-node-avancado/07-debugging
node -v          # confirme Node 18+
node debugging.js            # execução normal
```

---

## Exercício 1) Caça ao bug da média `[fácil]`

Código problemático:

```javascript
function mediaDasNotas(notas) {
  let total = 0;
  for (let i = 0; i <= notas.length; i++) {   // suspeito
    total += notas[i];
  }
  return total / notas.length;
}
console.log(mediaDasNotas([7, 8, 9])); // sai NaN em vez de 8
```

### Passo 1 — encontrar LENDO

- Índices válidos de um array de tamanho N vão de `0` a `N - 1`.
- A condição `i <= notas.length` deixa `i` chegar a `notas.length`
  (no exemplo, `notas[3]`), que é `undefined`.
- `total += undefined` vira `NaN`; `NaN / 3` continua `NaN`.

### Passo 2 — confirmar com logs

```javascript
for (let i = 0; i <= notas.length; i++) {
  console.log(`[media] i=${i} nota=${notas[i]}`);
  total += notas[i];
}
// Saída: ... nota=9, depois i=3 nota=undefined -> total vira NaN
```

A linha `nota=undefined` é a evidência do bug.

### Passo 3 — corrigir

```javascript
function mediaDasNotas(notas) {
  if (!notas.length) throw new Error('A lista de notas não pode ser vazia.');
  let total = 0;
  for (let i = 0; i < notas.length; i++) { // < em vez de <=
    total += notas[i];
  }
  return total / notas.length;
}
// Saída correta: 8
```

**Causa registrada:** off-by-one no limite do laço (`<=` em vez de `<`),
somando `undefined` ao acumulador e contaminando o resultado com `NaN`.

---

## Exercício 2) Logs estruturados `[fácil]`

Substitua os `console.log` soltos por saída legível:

```javascript
const notas = [7, 8, 9];

console.table(notas.map((nota, indice) => ({ indice, nota })));

if (!Array.isArray(notas) || !notas.length) {
  console.error('[media] Entrada inválida: lista de notas vazia');
}

console.log(`[media] Média calculada: ${calcularMedia(notas)}`);
```

Critério: a MESMA execução deve ficar compreensível sem abrir o debugger.
`console.table` alinha colunas automaticamente; `console.error` separa erros
do fluxo normal (e aparece em vermelho no terminal/DevTools).

---

## Exercício 3) Pausa no debugger `[médio]`

Roteiro executado sobre o `debugging.js` da aula (que já contém `debugger`):

```bash
node --inspect-brk debugging.js
# Saída: Debugger listening on ws://127.0.0.1:9229/...
```

1. Abra `chrome://inspect` no Chrome e clique em **inspect** no processo listado.
2. **Primeira pausa:** a execução para ANTES da primeira linha do arquivo.
   Motivo: o `-brk` (`--inspect-brk`) força pausa na entrada do script;
   sem ele, só pararíamos na instrução `debugger`.
3. Clique em **Resume script execution** (F8):
   - **Watch:** painel livre — adicione `notas.length` ou expressões para
     acompanhar valores entre pausas (vazio até você adicionar algo).
   - **Scope:** mostra `Local` com as variáveis do escopo atual e `Global`;
     ao parar dentro de `calcularMedia`, `notas` aparece em Local.
   - **Call Stack:** pilha de chamadas — de cima para baixo,
     `calcularMedia` -> módulo principal (quem chamou quem).
4. **Valor de `notas` dentro de `calcularMedia`:** `[7, 8, 9]`, visível ao
   pausar na linha do `debugger` (antes do `reduce`).
5. Resultado final no console do DevTools: `Média: 8`.

Diferença essencial anotada: `debugger` pausa ONDE está escrito;
`--inspect-brk` pausa NA PRIMEIRA LINHA, antes de qualquer código rodar.

---

## Exercício 4) Roteiro guiado de inspeção assíncrona `[médio]`

Salve como `inspecao.js`:

```javascript
async function buscarEstoque(idProduto) {
  return new Promise((resolve) => setTimeout(() => resolve({ id: idProduto, qtd: 42 }), 500));
}

async function main() {
  const estoque = await buscarEstoque(7);
  console.log(estoque.qtd * 2);
}
main();
```

Roteiro comentado (topo do arquivo):

```bash
node --inspect-brk inspecao.js   # abre o inspector pausado na 1ª linha
```

1. Conecte via `chrome://inspect` e clique em inspect.
2. Coloque um breakpoint na linha `return new Promise(...)` clicando no número
   da linha e dê Resume: a pausa mostra a Promise PENDENTE no painel Scope
   (estado `pending`, ainda sem valor).
3. Use **Step over** (F10): a função agenda o `setTimeout` e devolve a Promise;
   nada resolve por 500 ms — observe o Call Stack esvaziando enquanto o Node
   volta ao event loop.
4. Breakpoint na linha após o `await`: ao retomar, quando o timeout dispara,
   `resolve({ id: 7, qtd: 42 })` completa a Promise e o Scope agora mostra
   `estoque = { id: 7, qtd: 42 }` (estado fulfilled substitui o pending).
5. Anotação exigida: antes do `await` o valor não existe (Promise pendente);
   depois, o valor resolvido substitui o estado pendente e o fluxo segue
   síncrono dentro de `main`.

Saída esperada no console: `84`.

---

## DISCUSSÃO

- Fluxo canônico de caça-bugs: reproduzir -> hipótese -> breakpoint ->
  observar Scope/Watch -> corrigir -> reexecutar confirmando.
- Logs estruturados resolvem 80% dos casos; breakpoints entram quando o valor
  muda em algum ponto intermediário difícil de logar tudo.
- O exercício 6 da lista (servidor com três defeitos) segue este mesmo roteiro:
  um bug por vez, sempre com a EVIDÊNCIA do inspector anotada antes de corrigir
  (variável usada antes de existir -> ReferenceError no Scope; condição
  invertida -> statusCode observado na resposta; handler sem response.end ->
  requisição que nunca conclui no curl).
