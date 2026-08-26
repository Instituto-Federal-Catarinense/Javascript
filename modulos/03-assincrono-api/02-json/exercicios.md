# Exercícios — JSON

> **Como resolver:** crie os arquivos `exercicio-01.js`, `exercicio-02.js`... nesta mesma pasta,
> no seu fork ou na sua branch pessoal. Ao final do módulo compare com `../../solucoes/`.

## Antes de começar
- Releia o [README da aula](./README.md) e execute o exemplo com `node json.js`.
- Lembre do caminho de ida e volta: objeto → `JSON.stringify` → texto → `JSON.parse` → objeto.

## Lista de exercícios

### 1) Boletim em texto `[fácil]`
Serialize o boletim abaixo em uma string com indentação de 2 espaços, imprima-a, depois reconstrua o objeto com `JSON.parse` e acesse a nota de Matemática:

```javascript
const boletim = { aluno: 'Helena', serie: '9o ano', notas: { matematica: 8.5, historia: 7 } };
```

<details>
<summary>Dica</summary>

O terceiro argumento do `stringify` controla a indentação.
</details>

### 2) Diário da turma `[fácil]`
Transforme um array de três alunos em string JSON, guarde-a numa variável (simulando o que iria para um servidor ou storage), leia de volta com `parse` e conte quantos ficaram aprovados (nota maior ou igual a 6). Ao final, verifique com `typeof` que as notas voltaram como número — não como texto.

<details>
<summary>Dica</summary>

Depois do `parse` você tem arrays e objetos normais; qualquer recurso das aulas anteriores funciona neles.
</details>

### 3) Escondendo o dado sensível `[médio]`
O cadastro abaixo precisa ser enviado ao grêmio sem expor a matrícula completa:

```javascript
const estudante = { nome: 'Igor', turma: '9B', matricula: '2026-04471', telefone: '(47) 99999-0101' };
```

Gere duas versões serializadas: uma omitindo só `matricula` (usando o segundo parâmetro do `stringify` como lista de chaves) e outra usando uma função substituidora que devolve `"***"` para esse campo. Imprima ambas.

<details>
<summary>Dica</summary>

A lista de chaves inclui apenas o que deve aparecer; a função recebe `(chave, valor)` e decide o que devolver.
</details>

### 4) Reviver da data de matrícula `[médio]`
O registro salvo traz `"dataMatricula": "2026-02-09T08:30:00.000Z"`. Use `JSON.parse` com a função *reviver* para converter esse campo em um objeto `Date`. Prove com `instanceof Date` e imprima o ano da matrícula. Compare com um `parse` simples, comentando o que acontece sem o reviver.

<details>
<summary>Dica</summary>

No reviver, teste `this[key] === 'dataMatricula'` antes de transformar; os demais valores passam intactos.
</details>

### 5) Desafio integrador: intercâmbio seguro do diário `[desafiador]`
Monte um mini-sistema de troca do diário de classe:
1. Crie a função `serializarDiario(diario)` que gera o texto formatado omitindo o campo `observacoesMedicas`.
2. Crie `desserializarDiario(texto)` que devolve `{ ok: true, valor }` em caso de sucesso ou `{ ok: false, erro }` quando o texto for inválido — trate `SyntaxError` dentro dela, nunca deixe estourar.
3. Faça a viagem de ida e volta com um diário real (três alunos, notas e datas de matrícula revividas como `Date`).
4. Simule um payload corrompido (`"{ aluno: 'Ze', notas: "` truncado) e mostre a falha sendo capturada.
5. Recupere a situação lendo uma cópia de segurança válida guardada em outra string e confirme que o sistema volta a funcionar.
6. Nenhuma exceção pode escapar para fora do arquivo.

<details>
<summary>Dica</summary>

O reviver da data e o tratamento de sintaxe podem viver juntos: primeiro tente fazer o parse normal, e só aplique o reviver no caminho de sucesso — ou use o reviver desde o início dentro do mesmo try.
</details>

## Critérios de aceite
- [ ] O código roda sem erros (`node exercicio-XX.js`)
- [ ] Usa `const`/`let` adequadamente (nunca `var`)
- [ ] Nomes de variáveis descritivos em português
- [ ] Todo `JSON.parse` de dado externo está protegido por tratamento de erro
- [ ] A ida e volta (exercícios 1 e 2) preserva tipos: strings seguem string, números seguem number
