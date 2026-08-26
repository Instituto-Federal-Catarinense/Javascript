# Exercícios — Condicionais

> **Como resolver:** crie os arquivos `exercicio-01.js`, `exercicio-02.js`... nesta mesma pasta,
> no seu fork ou na sua branch pessoal. Ao final do módulo compare com `../../solucoes/`.

## Antes de começar
- Releia o [README da aula](./README.md) e execute o exemplo com `node condicionais.js`.
- Repare como as guard clauses saem cedo da função e evitam `else` aninhado.

## Lista de exercícios

### 1) Ponto do bolo `[fácil]`
Uma receita pede 30 minutos de forno. A partir do tempo real de assamento informado em uma variável, classifique:
- Menos de 25 minutos: `"Massa crua, aguarde"`.
- Entre 25 e 35 (inclusive): `"Ponto perfeito"`.
- Mais de 35: `"Passou do ponto"`.

Teste com os tempos 18, 30 e 42.

<details>
<summary>Dica</summary>

Encadeie `if / else if / else` testando primeiro o caso extremo inferior.
</details>

### 2) Menu da cantina `[fácil]`
Monte um `switch` para o código do pedido da cantina escolar:
- `1` → `"Suco natural — R$ 5.00"`
- `2` → `"Pão de queijo — R$ 4.50"`
- `3` → `"Vitamina de abacate — R$ 8.00"`
- Qualquer outro valor → `"Código inválido"`

Teste com os códigos 1, 3 e 7.

<details>
<summary>Dica</summary>

Não esqueça do `break` entre os casos nem do `default`.
</details>

### 3) Guard clauses da receita `[médio]`
Escreva a função `podeAssar(ovos, farinhaGramas, fermentoGramas)` que devolve uma string de erro imediatamente quando algo falta:
- Sem ovos suficientes (mínimo 3): `"Faltam ovos"`.
- Farinha abaixo de 300 g: `"Farinha insuficiente"`.
- Fermento abaixo de 10 g: `"Fermento insuficiente"`.
- Tudo certo: `"Pode assar!"`.

Chame a função quatro vezes cobrindo todos os caminhos e imprima cada resposta.

<details>
<summary>Dica</summary>

Um `return` por verificação, na ordem, mantém a função plana — sem um `if` dentro do outro.
</details>

### 4) Temperatura por porte da forma `[médio]`
A mesma massa comporta portes diferentes de forma: pequena assa a 180 °C por 40 min, média a 180 °C por 50 min, grande a 170 °C por 60 min. Dado o porte informado, devolva a instrução completa com ternário **ou** com `if/else if` — depois reescreva usando a outra técnica e comente qual versão ficou mais legível para três opções.

<details>
<summary>Dica</summary>

Ternários encadeados ficam difíceis de ler rapidamente; esse é justamente o limite prático deles.
</details>

### 5) Desafio integrador: assistente de forno `[desafiador]`
Combine tudo em um assistente de cozinha que processa três pedidos guardados em variáveis (receita, porte, minutos disponíveis):
1. Valide os dados com guard clauses: receita precisa ser `"bolo"` ou `"torta"`, porte deve existir e o tempo disponível não pode ser negativo.
2. Use um `switch` por receita para obter temperatura-base.
3. Ajuste o tempo pelo porte com condicionais.
4. Se o tempo disponível for menor que o necessário, avise `"Adiar assamento"`; caso contrário, imprima o plano completo (`"Assar bolo médio a 180°C por 50 min"`).
5. Termine com um resumo de quantos pedidos foram aprovados e quantos adiados.

Nenhum caminho pode gerar erro de execução — dados inválidos produzem mensagens, não exceções.

<details>
<summary>Dica</summary>

Cada pedido pode ser processado copiando o bloco de validação + decisão; se quiser enxugar, transforme o processamento em uma função chamada três vezes.
</details>

## Critérios de aceite
- [ ] O código roda sem erros (`node exercicio-XX.js`)
- [ ] Usa `const`/`let` adequadamente (nunca `var`)
- [ ] Nomes de variáveis descritivos em português
- [ ] As validações usam guard clauses com retorno antecipado (sem `if` aninhado mais de um nível)
- [ ] Todos os caminhos dos exercícios 1 a 3 foram executados ao menos uma vez na saída
