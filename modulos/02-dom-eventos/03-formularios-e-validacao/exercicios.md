# Exercícios — Formulários e Validação

> **Como resolver:** estas aulas trabalham no navegador. Copie os arquivos `index.html` e `validacao.js`
> desta pasta para uma nova subpasta `pratica/` (ficando `pratica/index.html` e `pratica/validacao.js`)
> e faça todos os exercícios nessa cópia, no seu fork ou na sua branch pessoal.
> Ao final do módulo compare com `../../solucoes/`.

## Antes de começar
- Releia o [README da aula](./README.md).
- Abra o `index.html` original desta pasta e teste os estados de erro e sucesso do formulário `#cadastro`.
- Observe como `setCustomValidity` + `checkValidity` + `reportValidity` formam o ciclo de validação.

## Lista de exercícios

### 1) Ano de edição plausível `[fácil]`
No cadastro de livros da biblioteca, adicione um campo numérico "Ano de edição". Ele é obrigatório e precisa estar entre 1500 e o ano atual. Use validação nativa (`min`, `max`, `required`) mais uma mensagem customizada quando estourar a faixa: `"Informe um ano entre 1500 e <ano atual>"`.

<details>
<summary>Dica</summary>

`new Date().getFullYear()` entrega o ano corrente; monte a mensagem com template literal dentro do `setCustomValidity`.
</details>

### 2) Cadastro de leitor com senha forte `[fácil]`
Crie o formulário de novo leitor com senha e confirmação. As regras: mínimo de 8 caracteres, ao menos um número e as duas senhas idênticas. Cada violação deve produzir uma mensagem específica via `setCustomValidity`.

<details>
<summary>Dica</summary>

Verifique a igualdade comparando os dois campos antes de limpar (ou definir) a mensagem customizada — e não esqueça de zerá-la quando tudo estiver certo.
</details>

### 3) Mensagens por campo em tempo real `[médio]`
Em vez de mostrar tudo só no envio, cada campo deve exibir uma dica logo abaixo dele enquanto a pessoa digita:
- Vazio obrigatório → `"Preencha este campo"`.
- Fora da faixa (`rangeUnderflow`/`rangeOverflow`) → `"Valor fora da faixa"`.
- Tudo certo → dica verde `"Ok"`.

Use o evento `input` e as propriedades de `validity` de cada elemento para escolher a mensagem.

<details>
<summary>Dica</summary>

O objeto `campo.validity` traz flags booleanas prontas, como `valueMissing` e `tooShort`; um pequeno `if` encadeado escolhe o texto.
</details>

### 4) Envio travado até ficar válido `[médio]`
O botão de enviar deve nascer desabilitado e só habilitar quando o formulário inteiro passar por `checkValidity()`. A checagem acontece a cada digitação. Teste digitando, apagando e corrigindo campos e observe o botão ligar e desligar.

<details>
<summary>Dica</summary>

Atribua à propriedade `disabled` do botão o inverso do resultado de `checkValidity()`; reutilize a função criada no exercício 3.
</details>

### 5) Desafio integrador: ficha de doação de livros `[desafiador]`
Monte o formulário completo de doação:
1. Campos: título (3+ caracteres), ano de edição (regra do exercício 1), páginas (inteiro maior que zero) e e-mail do doador (formato válido).
2. Validação nativa para o básico + `setCustomValidity` para as regras próprias, com mensagens por campo em tempo real.
3. Botão de envio desabilitado enquanto algo estiver errado.
4. No envio válido: mostre um painel de sucesso com os dados formatados em frases (`"Doação registrada: Dom Casmurro, 1899, 256 páginas"`), limpe o formulário e devolva o foco ao primeiro campo.
5. Nenhum `alert` — todo feedback fica na página.

Descreva em comentário três sequências de teste: uma inválida, uma parcialmente válida e uma final bem-sucedida.

<details>
<summary>Dica</summary>

Leia os valores com `.value` e monte o resumo com template literals; `formulario.reset()` devolve os campos ao estado inicial.
</details>

## Critérios de aceite
- [ ] A página abre no navegador sem erros no Console (F12)
- [ ] Usa `const`/`let` adequadamente (nunca `var`)
- [ ] Nomes de variáveis descritivos em português
- [ ] O envio é sempre interceptado com `preventDefault()` antes das validações
- [ ] Nenhuma regra depende apenas de HTML: cada campo tem mensagem customizada própria
