# Quiz — Módulo 02: DOM e Eventos

Responda sem consultar o material. Depois confira o gabarito comentado no fim.

## Parte 1 — Múltipla escolha

**Q1.** `document.querySelector('#menu')` retorna:

- a) Todos os elementos com a classe `menu`
- b) O primeiro elemento cujo `id` é `menu`
- c) Um array com todos os elementos de id `menu`
- d) O elemento `<menu>` do HTML5

**Q2.** Qual é a diferença entre `textContent` e `innerHTML`?

- a) Não há diferença prática
- b) `textContent` aceita apenas números
- c) `innerHTML` interpreta tags HTML; `textContent` trata tudo como texto puro
- d) `textContent` apaga os filhos do elemento antes de inserir

**Q3.** Os dados gravados em `localStorage`:

- a) Expiram quando o navegador fecha
- b) Permanecem até serem removidos pelo código ou pelo usuário
- c) Só podem ser lidos pela mesma aba
- d) São enviados automaticamente ao servidor em cada requisição

**Q4.** Para remover um elemento da página, qual combinação é correta?

- a) `elemento.remove()`
- b) `elemento.delete()`
- c) `document.delete(elemento)`
- d) `elemento.destroy(true)`

## Parte 2 — Verdadeiro ou falso (justifique)

**Q5.** Dados salvos em `sessionStorage` são apagados quando a aba é fechada.

**Q6.** `getElementById('#titulo')` funciona porque aceita qualquer seletor CSS.

**Q7.** No bubbling, um evento disparado num elemento filho também ativa listeners dos ancestrais, na direção filho para pai.

## Parte 3 — Analise o código

**Q8.**

```html
<ul id="lista"></ul>
```

```js
const lista = document.querySelector('#lista');
const item = document.createElement('li');
item.textContent = 'Novo item';
lista.appendChild(item);
console.log(lista.children.length);
```

O que imprime no console, assumindo que a lista começou vazia?

**Q9.**

```js
const botao = document.querySelector('#btn');
botao.addEventListener('click', function () {
  console.log('A');
});
botao.addEventListener('click', () => console.log('B'));
// o usuário clica UMA vez no botão
```

O que aparece no console? Quantos handlers estão registrados?

**Q10.**

```js
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('enviado');
});
// o usuário envia o formulário
```

O que acontece com a página e o que imprime?

---

<details>
<summary><strong>Gabarito comentado</strong> (clique após responder)</summary>

**Q1 — b)** `querySelector` retorna o PRIMEIRO elemento que casa com o seletor (aqui, por `id`, único por documento). Para pegar todos, use `querySelectorAll`, que devolve uma NodeList.

**Q2 — c)** `innerHTML` faz o parse do valor como HTML (tags são interpretadas — cuidado com XSS); `textContent` insere o texto literalmente, sem interpretar marcação, sendo mais rápido e seguro.

**Q3 — b)** `localStorage` não tem prazo de validade: persiste entre abas e sessões até `removeItem()`/`clear()` ou limpeza manual pelo usuário. Já `sessionStorage` morre com a aba.

**Q4 — a)** O método moderno é `elemento.remove()` (introduzido no DOM Living Standard). A alternativa clássica ainda válida é `pai.removeChild(elemento)`.

**Q5 — Verdadeiro.** `sessionStorage` tem escopo de aba/sessão: ao fechar a aba, os dados são descartados. `localStorage` compartilha o valor entre abas e sobrevive ao fechamento.

**Q6 — Falso.** `getElementById` recebe APENAS o valor do id, sem `#`: `getElementById('titulo')`. Quem aceita seletores CSS arbitrários é `querySelector`/`querySelectorAll`.

**Q7 — Verdadeiro.** Após disparar no alvo (`event.target`), o evento "sobe" pelos ancestrais (bubbling), a menos que algo chame `event.stopPropagation()` ou o listener use capture.

**Q8 — Imprime `1`.** `createElement` cria o nó na memória, `appendChild` o anexa à lista e `children.length` conta os filhos elementos: exatamente o `<li>` recém-inserido.

**Q9 — Imprime `A` e depois `B`.** `addEventListener` REGISTRA múltiplos handlers: os dois ficam ativos e ambos executam na ordem de registro. Se usasse `botao.onclick = ...` duas vezes, o segundo substituiria o primeiro.

**Q10 — A página NÃO recarrega e imprime `"enviado"`.** `preventDefault()` cancela o comportamento padrão do submit (navegar/recarregar a página com os dados na URL), permitindo processar o formulário via JavaScript.

</details>
