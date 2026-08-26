/**
 * ============================================================
 * PLAYGROUND — Objetos
 * ------------------------------------------------------------
 * Módulo: 01 — Fundamentos   |   Aula: modulos/01-fundamentos/09-objetos/
 * Execute: node playground/01-fundamentos/09-objetos.js
 * Código comentado para estudar, alterar e QUEBRAR à vontade.
 * Errar aqui faz parte do método!
 * ============================================================
 */

// ===== 1. LITERAL DE OBJETO: CHAVE → VALOR =====
const aluno = {
  nome: 'João',            // propriedade: par "chave: valor"
  idade: 17,
  turma: '2º Info',
  notas: [8, 6.5, 9],      // valores podem ser arrays...
  endereco: {              // ...ou até outros objetos (aninhamento)
    cidade: 'Rio do Sul',
    uf: 'SC',
  },
};

console.log(aluno);

// ===== 2. ACESSO POR PONTO x POR COLCHETES =====

// Ponto: direto e legível, quando você JÁ sabe o nome da chave:
console.log(aluno.nome);
console.log(aluno.endereco.cidade); // cadeia de acessos em objetos aninhados

// Colchetes: obrigatórios quando a chave está numa VARIÁVEL ou tem caracteres especiais:
const chave = 'turma';
console.log(aluno[chave]); // aluno.chave buscaria uma chave chamada "chave"!

const relatorio = { 'ano letivo': 2026 }; // chave com espaço só via colchetes
console.log(relatorio['ano letivo']);

// Criar/atualizar propriedades dinamicamente também é simples:
aluno.matricula = 20260042; // nova propriedade criada na hora
aluno.idade = 18;           // existente atualizada
console.log('idade atualizada:', aluno.idade);

// Verificar existência: `in` checa a chave; ?. evita erro em caminho inexistente.
console.log("'nome' in aluno:", 'nome' in aluno);
console.log('optional chaining:', aluno.fone?.numero); // undefined SEM quebrar o programa

// ===== 3. MÉTODOS E O BÁSICO DE this =====
// Método = função guardada como propriedade do objeto.

const conta = {
  titular: 'Maria',
  saldo: 100,
  // Em método com function normal, `this` aponta PARA O PRÓPRIO OBJETO:
  depositar(valor) {
    this.saldo += valor; // this.saldo === conta.saldo
    return this.saldo;
  },
  resumo() {
    return `${this.titular} tem R$ ${this.saldo}`;
  },
};

conta.depositar(50);
console.log(conta.resumo()); // 'Maria tem R$ 150'

// ATENÇÃO: arrow function NÃO cria this próprio — evite-a como método
// quando precisar acessar propriedades do objeto via this.

// ===== 4. OBJECT.KEYS / VALUES / ENTRIES =====
const carro = {
  marca: 'VW',
  modelo: 'Gol',
  ano: 2020,
};

// keys → array de chaves | values → array de valores | entries → pares [chave, valor]:
console.log('keys:', Object.keys(carro));
console.log('values:', Object.values(carro));
console.log('entries:', Object.entries(carro));

// Combinando com for..of para percorrer o objeto inteiro:
for (const [chave, valor] of Object.entries(carro)) {
  console.log(`${chave} = ${valor}`);
}

// ===== 5. DESTRUCTURING: EXTRAIR DADOS COM ESTILO =====
// Desestruturar = "desmontar" o objeto direto na declaração das variáveis.

const { marca, modelo } = carro;          // cria const marca e const modelo
console.log('desestruturado:', marca, modelo);

// Renomear ao extrair e definir valor padrão para chave inexistente:
const { marca: fabricante, cor = 'prata' } = carro;
console.log(fabricante, cor);             // 'VW prata' (cor não existia: usou o padrão)

// Também funciona em parâmetros de função (muito usado em APIs):
function exibirAno({ ano }) {
  return `Ano do veículo: ${ano}`;
}
console.log(exibirAno(carro));

// ===== 6. SPREAD EM OBJETOS: COPIAR E MESCLAR =====
const configuracoesPadrao = {
  tema: 'claro',
  notificacoes: true,
  idioma: 'pt-BR',
};

// Cópia rasa com spread:
const copiaConfig = { ...configuracoesPadrao };
console.log('cópia:', copiaConfig);

// Mesclagem: propriedades repetidas são SOBRESCRITAS pela última!
const configuracoesUsuario = { tema: 'escuro', som: false };
const configuracoesFinais = { ...configuracoesPadrao, ...configuracoesUsuario };
console.log('mescladas:', configuracoesFinais); // tema virou 'escuro', entrou som:false

// Padrão muito comum: copiar + alterar UMA propriedade, sem mexer no original:
const temaEscuro = { ...configuracoesPadrao, tema: 'escuro' };
console.log('original intacto:', configuracoesPadrao.tema);

// ===== EXPERIMENTE =====
// 1) Adicione um método mediaNotas() ao objeto aluno usando this.notas e reduce.
// 2) Desestruture endereco do aluno e pegue apenas cidade num único passo.
// 3) Troque a ordem dos spreads na mesclagem de configurações e observe quem vence.

module.exports = { aluno, conta, carro };
