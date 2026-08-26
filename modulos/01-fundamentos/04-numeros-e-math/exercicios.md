# Exercícios — Números e Math

> **Como resolver:** crie os arquivos `exercicio-01.js`, `exercicio-02.js`... nesta mesma pasta,
> no seu fork ou na sua branch pessoal. Ao final do módulo compare com `../../solucoes/`.

## Antes de começar
- Releia o [README da aula](./README.md) e execute o exemplo com `node numeros.js`.
- Observe a diferença entre `floor`, `ceil` e `round`, e como `random` nunca chega a 1.

## Lista de exercícios

### 1) Dado de vinte faces `[fácil]`
Num jogo de RPG, o mestre pede um teste com dado d20. Gere um número inteiro de 1 a 20 usando `Math`. Depois simule "vantagem": role dois d20 e fique com o maior. Imprima as três rolagens e o valor usado.

```
Rolagens: 14, 8 | Resultado com vantagem: 14
```

<details>
<summary>Dica</summary>

Multiplique `Math.random()` por 20, aplique `Math.floor` e some 1 para deslocar o intervalo de 0–19 para 1–20.
</details>

### 2) Pontuação ajustada `[fácil]`
O placar de um fliperama calculou a média `7.4567` entre duas partidas. Exiba:
1. A média arredondada para uma casa decimal (`7.5`).
2. A pontuação mínima necessária para ganhar um brinde, sempre por cima (`Math.ceil`) a partir de `62.1`.
3. O total de fichas usadas, truncado para baixo a partir de `17.9`.

<details>
<summary>Dica</summary>

Para manter uma casa decimal, multiplique por 10, arredonde e divida por 10.
</details>

### 3) Validador de pontuação `[médio]`
As pontuações chegam do servidor como texto: `"1500"`, `"42.5"` e `"abc"`. Converta cada uma com `parseInt` e depois com `parseFloat`, imprima os seis resultados e responda em comentários: qual conversão perde informação no caso decimal? Qual valor indica falha no terceiro caso? Só aceite uma pontuação se ela passar pela verificação com `Number.isNaN`.

<details>
<summary>Dica</summary>

`parseInt("42.5")` para em 42; `parseFloat("abc")` devolve `NaN` — e `NaN !== NaN`, por isso existe `Number.isNaN`.
</details>

### 4) Quadro de recordes `[médio]`
Três jogadores fizeram `850`, `720` e `910` pontos. Usando funções de `Math`, determine o recorde da mesa, a pior pontuação e quantos pontos o segundo colocado ficou do recorde. Imprima também o valor de PI com quatro casas para constar na placa decorativa.

```
Recorde: 910 | Último: 720 | Diferença do 2º: 60 | Placa: π ≈ 3.1416
```

<details>
<summary>Dica</summary>

`Math.max` e `Math.min` recebem vários valores separados por vírgula.
</details>

### 5) Desafio integrador: iniciativa da mesa `[desafiador]`
Quatro heróis entram em combate: `Aria` (+2 de bônus), `Bruno` (0), `Ciro` (-1) e `Duda` (+3). Para cada herói:
- Role um d20 (função `rolarDado(faces)` reutilizável), aplique o bônus e registre o total.
- Marque quem tirou 15 ou mais ("age primeiro").
- Calcule a média dos totais arredondada para uma casa decimal.

Imprima um diário de batalha linha a linha:

```
Aria rolou 11 + 2 = 13
...
Média da mesa: 14.3
Heróis que agem primeiro: Aria, Duda
```

Rode o script algumas vezes e confirme que os resultados mudam a cada execução.

<details>
<summary>Dica</summary>

Monte as frases com template literals guardando rolagem e bônus em variáveis separadas; a lista de nomes que agem primeiro pode ir crescendo com concatenação simples.
</details>

## Critérios de aceite
- [ ] O código roda sem erros (`node exercicio-XX.js`)
- [ ] Usa `const`/`let` adequadamente (nunca `var`)
- [ ] Nomes de variáveis descritivos em português
- [ ] Toda entrada numérica vinda de texto passa por conversão + validação com `Number.isNaN`
- [ ] Os números aleatórios respeitam os limites pedidos (nunca zero, nunca acima do número de faces)
