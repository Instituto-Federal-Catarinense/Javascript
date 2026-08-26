# Exercícios — Variáveis e Escopo

> **Como resolver:** crie os arquivos `exercicio-01.js`, `exercicio-02.js`... nesta mesma pasta,
> no seu fork ou na sua branch pessoal. Ao final do módulo compare com `../../solucoes/`.

## Antes de começar
- Releia o [README da aula](./README.md) e o guia [HOISTING.md](./HOISTING.md).
- Execute o exemplo da aula com `node variaveis.js` e observe onde cada variável é visível.

## Lista de exercícios

### 1) Cartão de transporte `[fácil]`
Crie um arquivo que declare a constante `TARIFA` valendo `4.50`, a variável `saldo` começando em `12.00` e a constante `PASSAGEIRO` com o nome "Beatriz". Simule o pagamento de duas passagens (subtraia a tarifa duas vezes do saldo) e imprima exatamente:

```
Passageira Beatriz | Saldo final: R$ 3.00
```

<details>
<summary>Dica</summary>

Monte a frase com template literal. Só o `saldo` muda de valor, então apenas ele precisa ser `let`.
</details>

### 2) Preveja a saída (hoisting) `[fácil]`
Sem executar antes, escreva em um comentário qual será a saída linha por linha deste trecho. Depois transcreva o código para o arquivo, rode com `node` e compare:

```javascript
console.log(portao);
var portao = 'P7';
anunciarEmbarque();
function anunciarEmbarque() {
  console.log('Embarque imediato');
}
```

Ao final, responda em comentários: por que `portao` não deu erro? E o que aconteceria se `var portao` fosse trocado por `let portao`?

<details>
<summary>Dica</summary>

Declarações com `var` sobem inicializadas como `undefined`; declarações de função sobem completas. Já `let` existe antes da declaração, mas sem valor inicial — acessar nesse intervalo lança erro.
</details>

### 3) Área restrita da estação `[médio]`
Dentro de um bloco `if (true) { ... }`, declare `let assento = '14A'` e `const linha = 'Azul'`. Imprima os dois valores dentro do bloco. Depois, fora do bloco, tente imprimir `assento`. Rode o programa, anote em um comentário qual erro apareceu, comente essa linha externa e execute de novo até terminar sem erros.

<details>
<summary>Dica</summary>

O escopo de bloco limita `let` e `const` às chaves `{}` onde foram declaradas. O erro esperado é um `ReferenceError`.
</details>

### 4) Contador de viagens `[médio]`
Declare `let totalViagens = 0` no escopo global do arquivo e crie a função `registrarViagem()` que soma 1 ao total e imprime `"Viagem número X"`. Chame a função três vezes. Em seguida, declare dentro da função uma variável `var codigoInterno = 'CAT-99'` e responda em comentário: esse código é visível fora da função? Por quê?

<details>
<summary>Dica</summary>

`var` respeita escopo de função, não de bloco. Dentro de uma função, ela fica presa ali.
</details>

### 5) Desafio integrador: painel do bilhete único `[desafiador]`
Monte um script único que simula o painel de um bilhete único de ônibus:
- Constantes globais: `TARIFA_COMUM = 4.50` e `TARIFA_ESTUDANTE = 2.25`.
- Uma variável global `saldo` iniciando em `10.00` e um contador de viagens começando em zero.
- Uma função `debitar(ehEstudante)` que escolhe a tarifa correta, desconta do saldo, soma uma viagem e imprime o recibo; se o saldo ficar negativo, imprime um aviso de saldo insuficiente.
- Chame `debitar()` três vezes alternando o tipo de passageiro e imprima um relatório final com nome fictício do passageiro, tipo, total de viagens e saldo restante.
- Nenhuma variável pode ser declarada com `var`.

<details>
<summary>Dica</summary>

Escolha a tarifa com um `if/else` simples dentro da função. Guarde cada valor fixo em `const` antes de usar.
</details>

## Critérios de aceite
- [ ] O código roda sem erros (`node exercicio-XX.js`)
- [ ] Usa `const`/`let` adequadamente (nunca `var`)
- [ ] Nomes de variáveis descritivos em português
- [ ] A previsão do exercício 2 está escrita em comentário ANTES de rodar e coincide com a saída real
- [ ] Nenhuma variável de bloco é acessada fora do bloco (os erros previstos ficam apenas documentados)
