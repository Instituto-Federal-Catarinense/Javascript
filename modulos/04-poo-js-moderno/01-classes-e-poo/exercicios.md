# Exercícios — Classes e POO

> **Como resolver:** crie os arquivos `exercicio-01.js`, `exercicio-02.js`... nesta mesma pasta,
> no seu fork ou na sua branch pessoal. Ao final do módulo compare com `../../solucoes/`.

## Antes de começar
- Releia o [README da aula](./README.md) e execute os exemplos de `poo.js`.
- Revise `constructor`, `extends`, `super`, métodos `static` e getters/setters — todos aparecem aqui.

## Lista de exercícios

### 1) Ficha do aluno `[fácil]`
Crie a classe `Aluno` com `constructor(nome, matricula)` e uma lista interna de notas. Adicione o método `adicionarNota(valor)` e `media()` que devolve a média aritmética. Teste com `Ana` (notas 8, 7 e 9) — a média esperada é `8`.

<details>
<summary>Dica</summary>

Guarde as notas em um array no constructor; some com `reduce` e divida pelo `length`.
</details>

### 2) Nota validada por setter `[fácil]`
Transforme a nota em propriedade controlada: um setter que aceita apenas valores entre `0` e `10` (caso contrário, lance `Error('Nota inválida')`) e um getter que expõe o valor. Tente atribuir `15` e trate o erro com `try/catch`.

<details>
<summary>Dica</summary>

Use `set nota(valor)` e `get nota()`; valide antes de gravar em uma propriedade privada por convenção (`this._nota`).
</details>

### 3) Matrícula automática `[médio]`
Adicione à classe `Aluno` um campo `matricula` gerado automaticamente usando um método `static proximoNumero()`. Cada instância deve receber `2026-0001`, `2026-0002`, ... sem que quem cria o objeto passe esse valor.

<details>
<summary>Dica</summary>

Um membro `static` pertence à classe, não às instâncias: use `Aluno.proximoNumero()` dentro do `constructor`.
</details>

### 4) Monitor herda de Aluno `[médio]`
Crie a subclasse `AlunoMonitor` com `extends`: recebe também `disciplina`, chama `super(...)` para reaproveitar o construtor e sobrescreve `media()` somando `+0.5` de bônus (sem passar de 10). Verifique com `instanceof` que um monitor **também é** um `Aluno`.

<details>
<summary>Dica</summary>

Chame `super.media()` na subclasse para reusar o cálculo original antes de aplicar o bônus.
</details>

### 5) Execute e explique `[médio]`
Salve e execute este trecho, depois EXPLIQUE em comentários por que as duas linhas finais imprimem valores diferentes:

```javascript
class Turma {
  static ano = 2026;
  constructor(nome) { this.nome = nome; }
}
const t1 = new Turma('DS1');
console.log(Turma.ano);   // ?
t1.ano = 1999;
console.log(Turma.ano);   // ?
```

<details>
<summary>Dica</summary>

Lembre-se: membros `static` vivem na classe; atribuir `t1.ano` cria uma propriedade própria da instância.
</details>

### 6) Desafio integrador: mini sistema escolar `[desafiador]`
Modele a hierarquia completa: `Pessoa` (nome, email), `Aluno extends Pessoa` (matrícula, notas com setter validado), `Professor extends Pessoa` (disciplina, salário com getter que formata como moeda). Crie uma classe `Escola` que matricula alunos, contratam professores e calcula a folha total via método `static`. Monte um cenário com 2 alunos e 2 professores e imprima um relatório.

<details>
<summary>Dica</summary>

Comece pelas classes filhas chamando `super` com os dados comuns; deixe a `Escola` guardando arrays de pessoas.
</details>

## Critérios de aceite
- [ ] O código roda sem erros
- [ ] As notas inválidas são rejeitadas pelo setter sem quebrar a execução
- [ ] `AlunoMonitor` reaproveita código da classe pai via `extends`/`super` (sem copiar métodos)
