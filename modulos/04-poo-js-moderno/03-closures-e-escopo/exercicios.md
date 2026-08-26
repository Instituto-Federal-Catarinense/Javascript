# Exercícios — Closures e Escopo

> **Como resolver:** crie os arquivos `exercicio-01.js`, `exercicio-02.js`... nesta mesma pasta,
> no seu fork ou na sua branch pessoal. Ao final do módulo compare com `../../solucoes/`.

## Antes de começar
- Releia o [README da aula](./README.md) e execute os exemplos de `closures.js`.
- Revise escopo léxico, fábricas de funções e estado privado.

## Lista de exercícios

### 1) Fábrica de multiplicadores `[fácil]`
Implemente `criarMultiplicador(fator)` que devolve uma nova função. Com ela, gere `dobro` e `metade` e mostre que `dobro(6)` é `12` e `metade(6)` é `3`.

<details>
<summary>Dica</summary>

A função interna "lembra" do `fator` recebido pela externa — isso já é uma closure.
</details>

### 2) Senha do caixa protegida `[fácil]`
Crie `criarCaixa(senhaInicial)` que devolve `{ abrir(tentativa) }`. A senha não pode ser lida de fora: `abrir` retorna `'Aberto'` se a tentativa for igual à senha guardada e `'Senha errada'` caso contrário. Prove imprimindo o objeto do caixa (a senha não aparece).

<details>
<summary>Dica</summary>

A variável `senhaInicial` vive apenas dentro da fábrica; nada fora dela consegue acessá-la diretamente.
</details>

### 3) Contador de pedidos do delivery `[médio]`
Crie `criarContadorDePedidos()` retornando `{ registrar(), total(), reset() }`. Cada chamada de `registrar()` soma 1 e devolve o número do pedido (`#1`, `#2`...); `reset()` zera a contagem. Demonstre dois contadores independentes (um por turno da loja).

<details>
<summary>Dica</summary>

Declare `let pedidos = 0` dentro da fábrica; cada chamada cria variáveis novas e independentes.
</details>

### 4) Configuração encapsulada `[médio]`
Implemente `criarConfig(inicial)` que guarda um objeto de configuração da aplicação e devolve `get(chave)`, `set(chave, valor)` e `chaves()`. O `set` deve recusar chaves desconhecidas lançando `Error`. Fora da closure, ninguém altera a configuração sem passar pelo `set`.

<details>
<summary>Dica</summary]

Valide com `!(chave in inicial)` antes de gravar; `Object.keys` ajuda no `chaves()`.
</details>

### 5) Memoização do cálculo de frete `[médio]`
Escreva `memoizar(funcao)` que recebe uma função cara (simule `calcularFrete(cep)` com um atraso de 300 ms) e devolve uma versão com cache: repetir o mesmo argumento responde instantaneamente. Meça e imprima o tempo das duas chamadas com `console.time`/`console.timeEnd`.

<details>
<summary>Dica</summary>

Use um objeto (ou `Map`) declarado na fábrica como cache, indexado pelos argumentos serializados.
</details>

### 6) Desafio integrador: carrinho fechado `[desafiador]`
Construa `criarCarrinho()` (loja) expondo apenas: `adicionar(produto, preco, qtd)`, `remover(produto)`, `aplicarCupom(codigo)` (aceita `LOJA10` = 10%), `total()` e `itens()`. A lista interna e o desconto ativo ficam inacessíveis de fora. Simule uma compra com 3 produtos, cupom aplicado e impressão do resumo final.

<details>
<summary>Dica</summary>

Todas as operações compartilham o mesmo escopo da fábrica — declare ali o array de itens e a variável de desconto.
</details>

## Critérios de aceite
- [ ] O código roda sem erros
- [ ] Nenhum estado interno pode ser modificado sem passar pelas funções expostas
- [ ] Cada fábrica suporta múltiplas instâncias independentes (testado com ao menos duas)
