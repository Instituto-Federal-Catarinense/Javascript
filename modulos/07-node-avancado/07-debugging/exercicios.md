# Exercícios — Debugging

> **Como resolver:** crie os arquivos `exercicio-01.js`, `exercicio-02.js`... nesta mesma pasta,
> no seu fork ou na sua branch pessoal. Ao final do módulo compare com `../../solucoes/`.
> (Para aulas com app Express/Node: trabalhe numa CÓPIA da pasta chamada `pratica/`.)

## Antes de começar
- Releia o [README da aula](./README.md), execute `node debugging.js` e depois explore com `node inspect debugging.js`.
- Revise `console.*`, a instrução `debugger`, `node --inspect-brk` e o painel do inspector.

## Lista de exercícios

### 1) Caça ao bug da média `[fácil]`
O código abaixo deveria calcular a média das notas de uma turma, mas devolve resultado errado. Primeiro encontre o erro LENDO; depois confirme com logs:

```javascript
function mediaDasNotas(notas) {
  let total = 0;
  for (let i = 0; i <= notas.length; i++) {
    total += notas[i];
  }
  return total / notas.length;
}
console.log(mediaDasNotas([7, 8, 9])); // esperado 8
```

Corrija, explique qual era a causa e registre a resposta em comentário.

<details>
<summary>Dica</summary>

Rode a versão com erro e observe o valor somado — `notas[i]` existe quando `i === length`?
</details>

### 2) Logs estruturados `[fácil]`
Substitua os `console.log` soltos de `debugging.js` por saídas estruturadas: `console.table([...] )` para a lista de notas, `console.error` para entradas inválidas e prefixo `[media]` nas mensagens. A mesma execução deve ficar legível sem abrir o debugger.

<details>
<summary>Dica</summary>

`console.table` aceita arrays de objetos e alinha as colunas automaticamente.
</details>

### 3) Execute e explique: pausa no debugger `[médio]`
`debugging.js` já contém a instrução `debugger`. Rode `node --inspect-brk debugging.js`, abra `chrome://inspect` no Chrome, clique em "inspect" e aguarde. COPIE/DESCRIA cada passo: onde a execução pausou primeiro (e por quê, sendo `--inspect-brk`), o que os painéis Watch/Scope/Call Stack mostram ao clicar em "Resume script execution", e qual o valor de `notas` dentro de `calcularMedia`.

<details>
<summary>Dica</summary>

`--inspect-brk` pausa na PRIMEIRA linha, antes de executar qualquer coisa; sem o `-brk`, só para no `debugger`.
</details>

### 4) Roteiro guiado de inspeção `[médio]`
Escreva, num comentário no topo de `inspecao.js`, um roteiro passo a passo para depurar este código com `node --inspect-brk inspecao.js`:

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

Depois EXECUTE seguindo o próprio roteiro: pause dentro da Promise pendente, use "step over" até o resolve e anote como o painel Scope muda antes/depois do `await`.

<details>
<summary>Dica</summary>

Com o script pausado, procure a Promise no Scope; após o resume, o valor resolvido substitui o estado pendente.
</details>

### 5) Pilha de chamadas em ação `[médio]`
Crie `pilha.js` com a cadeia `registrarVenda → validarPedido → calcularTotal` onde `calcularTotal` lança `Error('Preço inválido')` propositalmente. Capture o erro no nível mais alto, imprima `erro.stack` completo e EXPLIQUE cada quadro (frame) da pilha: quem chamou quem e por que a ordem é do ponto do erro até o início.

<details>
<summary>Dica</summary>

A pilha cresce do topo (onde o erro nasceu) para a base (quem iniciou tudo).
</details>

### 6) Desafio integrador: caça-bugs no servidor `[desafiador]`
Copie para `bugado.js` um servidor HTTP com TRÊS defeitos plantados: variável usada antes de existir, condição invertida numa rota (200 no lugar de 404) e um handler que esquece o `response.end`. SEM corrigir direto, produza um relatório em comentário usando o fluxo completo: reproduza rodando, aplique `node --inspect-brk bugado.js`, marque breakpoints nas linhas suspeitas, anote valores observados no Scope para cada bug e SÓ ENTÃO corrija, citando no relatório qual evidência do inspector provou cada correção.

<details>
<summary>Dica</summary>

Um bug por vez: reproducão → hipótese → breakpoint → observação → correção → nova execução confirmando.
</details>

## Critérios de aceite
- [ ] O código roda sem erros
- [ ] Cada bug encontrado tem causa explicada com evidência (log ou observação do inspector)
- [ ] Os roteiros dos itens 3 e 4 descrevem comandos exatos e painéis utilizados
