# Exercícios — Funções

> **Como resolver:** crie os arquivos `exercicio-01.js`, `exercicio-02.js`... nesta mesma pasta,
> no seu fork ou na sua branch pessoal. Ao final do módulo compare com `../../solucoes/`.

## Antes de começar
- Releia o [README da aula](./README.md) e execute o exemplo com `node funcoes.js`.
- Compare declaração, expressão e arrow function no mesmo problema antes de escolher um estilo.

## Lista de exercícios

### 1) Média do boletim `[fácil]`
Crie a função `media(nota1, nota2)` que devolve a média aritmética arredondada para uma casa decimal. Declare-a como **declaração de função** e depois reescreva como **arrow function** mantendo o mesmo comportamento. Imprima os resultados para `(8, 7)` e `(6.5, 5)`.

<details>
<summary>Dica</summary>

Arredonde multiplicando por 10, aplicando `Math.round` e dividindo por 10.
</details>

### 2) Situação do aluno `[fácil]`
Crie `situacao(mediaAluno, mediaMinima = 6)` que devolve `"Aprovado"` quando a média atinge o mínimo, `"Recuperação"` entre 4 e o mínimo, e `"Reprovado"` abaixo de 4. O segundo parâmetro é opcional: teste chamando com e sem ele (por exemplo, mínimo especial de 7 para uma turma avançada).

<details>
<summary>Dica</summary>

O parâmetro padrão só entra em ação quando o argumento chega como `undefined`.
</details>

### 3) Calculadora com callback `[médio]`
Implemente `calcularBoletim(nota1, nota2, estrategia)` onde `estrategia` é uma função recebida pronta:
- `mediaSimples` — média aritmética comum.
- `mediaPonderada` — primeira nota vale 40%, segunda vale 60%.

Chame `calcularBoletim` duas vezes passando cada estratégia e imprima as médias obtidas. Nenhuma das estratégias pode conhecer os detalhes internos da calculadora.

<details>
<summary>Dica</summary>

A calculadora só precisa chamar `estrategia(nota1, nota2)` e devolver o resultado.
</details>

### 4) Boletim flexível com rest `[médio]`
Crie `mediaGeral(...notas)` que aceita qualquer quantidade de notas (3, 5 ou até nenhuma) e devolve a média; sem notas, devolve `0`. Escreva essa função como **expressão de função** atribuída a uma constante e explique em comentário por que ela não pode ser chamada antes da linha da declaração, diferente de uma declaração de função.

<details>
<summary>Dica</summary>

O rest transforma tudo em um array dentro da função — verifique o comprimento antes de dividir.
</details>

### 5) Desafio integrador: emissora de boletins `[desafiador]`
Monte uma pequena emissora de boletins escolares:
1. Encapsule as regras fixas da escola (nome da escola, mínimo para aprovação) em uma **IIFE** que devolve um objeto de configuração.
2. Crie a função `emitirBoletim(nome, ...paresNotaPeso)` recebendo pares alternados nota/peso (exemplo: `7, 2, 9, 3`) e calculando a média ponderada via callback de estratégia.
3. Reaproveite `situacao` do exercício 2 para classificar cada aluno usando o mínimo vindo da configuração da IIFE.
4. Emita boletins para três alunos com quantidades diferentes de notas e imprima linhas formatadas:

```
Escola Estadual Aurora | Ana: média 8.4 - Aprovado
```

5. Garanta que nenhum dado da escola pode ser sobrescrito por fora da IIFE.

<details>
<summary>Dica</summary>

Dentro do rest, percorra os pares avançando de dois em dois índices; a IIFE roda uma única vez e o resultado fica protegido em constantes.
</details>

## Critérios de aceite
- [ ] O código roda sem erros (`node exercicio-XX.js`)
- [ ] Usa `const`/`let` adequadamente (nunca `var`)
- [ ] Nomes de variáveis descritivos em português
- [ ] Os três formatos aparecem: declaração, expressão e arrow function
- [ ] Pelo menos uma função recebe outra função (callback) e o rest é usado no desafio integrador
