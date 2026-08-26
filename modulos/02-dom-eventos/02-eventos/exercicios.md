# Exercícios — Eventos

> **Como resolver:** estas aulas trabalham no navegador. Copie os arquivos `index.html` e `eventos.js`
> desta pasta para uma nova subpasta `pratica/` (ficando `pratica/index.html` e `pratica/eventos.js`)
> e faça todos os exercícios nessa cópia, no seu fork ou na sua branch pessoal.
> Ao final do módulo compare com `../../solucoes/`.

## Antes de começar
- Releia o [README da aula](./README.md).
- Abra o `index.html` original desta pasta no navegador e teste o mini-app: o contador de cliques no `#botao` e a saudação do formulário `#form`.
- Deixe o Console do navegador aberto (F12) para acompanhar os registros dos exercícios.

## Lista de exercícios

### 1) Placar de dois times `[fácil]`
Transforme o mini-app em placar de vôlei: dois botões "+1" (um por time) atualizam a pontuação exibida de cada time em elementos separados. Comece do zero e mantenha as duas pontuações em variáveis distintas.

<details>
<summary>Dica</summary>

Dois listeners independentes, um por botão; cada um altera só seu próprio texto de saída.
</details>

### 2) Zerar e registrar `[fácil]`
Acrescente um botão "Zerar partida" que volta ambos os placares a zero e adiciona uma linha ao histórico: um `<ul>` que ganha um `<li>` com o resultado final (`"Fim: 25 x 21"`). O histórico nunca é apagado durante a sessão.

<details>
<summary>Dica</summary>

Crie o `<li>` dinamicamente e anexe ao fim da lista, como feito na aula de DOM.
</details>

### 3) Controle pelo teclado `[médio]`
Adicione atalhos globais escutando `keydown` no documento:
- Tecla `A` soma 1 ao time da casa; tecla `Q` subtrai 1 (nunca abaixo de zero).
- Teclas de seta movem um "cursor" visual (uma caixa que anda pela tela via classes ou estilos inline).
- A tecla pressionada deve aparecer na área de saída.

Impedir o comportamento padrão das setas (rolagem da página) faz parte do exercício.

<details>
<summary>Dica</summary>

Compare `evento.key` com strings minúsculas; lembre do `preventDefault()` antes da página rolar.
</details>

### 4) Bolhas controladas `[médio]`
Monte uma área com três elementos aninhados (card externo, faixa interna, botão). Registre listeners nos três níveis e observe no Console a ordem dos disparos ao clicar no botão. Depois:
1. Faça o clique do botão **não** acionar a faixa nem o card (`stopPropagation`) e comente a ordem observada.
2. Repita o experimento registrando um dos listeners em modo *capturing* e descreva a diferença.

<details>
<summary>Dica</summary>

O terceiro parâmetro do `addEventListener` liga o capturing; sem ele, os eventos sobem (bubbling).
</details>

### 5) Desafio integrador: mesa de ping-pong `[desafiador]`
Feche a aula com um marcador de ping-pong completo:
1. Pontuação por clique nos botões dos jogadores e pelos atalhos de teclado (mesma regra de não passar de zero).
2. Um único listener no `<ul>` do histórico cuida de todos os itens, inclusive os criados depois — delegação de eventos com `closest('li')`: clicar num item antigo remove-o.
3. Botão "Nova partida": zera o placar e grava a linha final no histórico.
4. Ao alcançar 11 pontos, o app anuncia o vencedor e bloqueia novos pontos até começar outra partida.
5. Nenhum handler duplicado: cada interação dispara exatamente uma ação.

Descreva em comentário a sequência completa de testes manuais que você executou.

<details>
<summary>Dica</summary>

Um estado central (`pontosCasa`, `pontosVisitante`, `partidaEncerrada`) evita espalhar regras pelos handlers; a delegação substitui um listener por item.
</details>

## Critérios de aceite
- [ ] A página abre no navegador sem erros no Console (F12)
- [ ] Usa `const`/`let` adequadamente (nunca `var`)
- [ ] Nomes de variáveis descritivos em português
- [ ] Todos os listeners são registrados com `addEventListener` (sem atributos `onclick` no HTML)
- [ ] Bubbling/capturing foram observados e a conclusão está comentada no exercício 4
