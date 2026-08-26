# Exercícios — Objetos

> **Como resolver:** crie os arquivos `exercicio-01.js`, `exercicio-02.js`... nesta mesma pasta,
> no seu fork ou na sua branch pessoal. Ao final do módulo compare com `../../solucoes/`.

## Antes de começar
- Releia o [README da aula](./README.md) e execute o exemplo com `node objetos.js`.
- Revise destructuring, spread/rest, optional chaining e `Object.keys/values/entries` — todos aparecem aqui.

## Lista de exercícios

### 1) Ficha do jogador `[fácil]`
Modele a jogadora `Nina` em um objeto: apelido, nível (`7`) e pontos (`1240`). Adicione depois a propriedade `vida` (100) e um método `descrever()` que devolve `"Nina - nível 7, 1240 pontos"`. Imprima a descrição e as chaves do objeto.

<details>
<summary>Dica</summary>

Dentro do método, use `this` para acessar as próprias propriedades; `Object.keys` lista as chaves.
</details>

### 2) Partida encerrada, ficha preservada `[médio]`
Após uma partida, Nina ganha 380 pontos e sobe ao nível 8. Gere um **novo** objeto com essas alterações usando spread, sem tocar no original (imprima os dois para provar). Em seguida, extraia apenas `apelido` e agrupe todo o resto com rest em um objeto `dadosPartida`.

<details>
<summary>Dica</summary>

A ordem importa: `{ ...original, pontos: novoValor }` sobrescreve só o que vier depois.
</details>

### 3) Leitura segura do inventário `[médio]`
Alguns jogadores têm inventário detalhado, outros não:

```javascript
const nina = { equipamento: { arma: { tipo: 'arco', dano: 12 } } };
const leo = {};
```

Usando optional chaining, imprima o tipo de arma de cada jogador sem que o segundo caso gere erro (exiba `"sem arma"` quando o caminho não existir). Depois use destructuring com valor padrão para extrair o dano da arma de Leo como `0`.

<details>
<summary>Dica</summary>

Encadeie `?.` em cada nível suspeito: `equipamento?.arma?.tipo`.
</details>

### 4) Estatísticas por arena `[médio]`
O histórico de vitórias por arena está em um objeto:

```javascript
const vitorias = { deserto: 14, estadio: 9, neve: 21, vulcao: 6 };
```

Calcule com `Object.values` o total de vitórias; descubra a arena favorita percorrendo `Object.entries`; imprima uma linha por arena no formato `"neve: 21 vitórias"`.

<details>
<summary>Dica</summary>

No `entries`, cada item é um par `[chave, valor]` — compare os valores guardando a melhor chave encontrada.
</details>

### 5) Desafio integrador: painel de fim de partida `[desafiador]`
Duas fontes descrevem a mesma jogadora e precisam virar um painel único:
1. Combine a ficha básica (`{ apelido, nivel }`) com o resultado da partida (`{ pontos, abates, mortes }`) usando spread em um objeto final imutável.
2. As partidas recentes chegam como array dentro do objeto: `partidas: [ { mapa: 'neve', pontuacao: 320 }, ... ]` — calcule a média de pontuação das últimas partidas com `reduce`.
3. Monte o texto do painel usando destructuring nos campos principais.
4. Leia com segurança campos opcionais que podem faltar (como `patente?.nivel`) exibindo `"—"`.
5. Liste com `Object.entries` o resumo `campo: valor` de todas as estatísticas numéricas.

Saída esperada (números conforme seus dados):

```
== NINA | nivel 8 ==
Media recente: 286.5 | Abates: 15 | Mortes: 4
Patente: —
neve -> 320
...
```

<details>
<summary>Dica</summary>

Monte tudo por cópias sucessivas com spread; nenhum objeto de entrada pode ser modificado. Para o resumo, filtre as entradas cujo valor é número antes de imprimir.
</details>

## Critérios de aceite
- [ ] O código roda sem erros (`node exercicio-XX.js`)
- [ ] Usa `const`/`let` adequadamente (nunca `var`)
- [ ] Nomes de variáveis descritivos em português
- [ ] Nenhum objeto de entrada é mutado: todas as alterações passam por spread/cópias
- [ ] Optional chaining protege todos os acessos a caminhos que podem não existir
