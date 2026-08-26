/**
 * ============================================================
 * PLAYGROUND — Classes e POO em JavaScript
 * ------------------------------------------------------------
 * Módulo: 04 — POO JS Moderno   |   Aula: modulos/04-poo-js-moderno/01-classes-e-poo/
 * Execute: node playground/04-poo-js-moderno/01-classes-e-poo.js
 * Código comentado para estudar, alterar e QUEBRAR à vontade.
 *
 * Modelagem do exemplo: uma Biblioteca que possui Livros.
 * ============================================================
 */

// ===== 1. CLASSE BÁSICA: class, constructor e métodos =====

class Livro {
  // Campo PRIVADO (#): só acessível de DENTRO da classe.
  // Tentar ler livro.#disponivel fora dela gera SyntaxError.
  #disponivel = true; // sintaxe de private field (ECMAScript 2022)

  // O constructor roda UMA VEZ quando usamos `new Livro(...)`.
  constructor(titulo, autor, ano, paginas) {
    this.titulo = titulo;   // propriedades públicas
    this.autor = autor;
    this.ano = ano;
    this.paginas = paginas; // (#disponivel já nasce true na declaração acima)
  }

  // Método comum da instância.
  emprestar() {
    if (!this.#disponivel) {
      console.log(`  "${this.titulo}" ja esta emprestado!`);
      return false;
    }
    this.#disponivel = false;
    return true;
  }

  devolver() {
    this.#disponivel = true;
  }

  // GETTER: parece propriedade, mas é um método disfarçado.
  get disponivel() {
    return this.#disponivel;
  }

  get resumo() {
    const status = this.#disponivel ? 'disponivel' : 'emprestado';
    return `${this.titulo} (${this.ano}) - ${status}`;
  }

  // SETTER: valida antes de gravar — proteção extra para o atributo.
  set paginasAtualizadas(qtd) {
    if (!Number.isInteger(qtd) || qtd <= 0) {
      throw new RangeError('Quantidade de paginas invalida');
    }
    this.paginas = qtd;
  }

  // MÉTODO ESTÁTICO: pertence à CLASSE, não à instância.
  // Chamamos com Livro.criarDeTexto(...), nunca com livro.criarDeTexto(...).
  static criarDeTexto(linhaCsv) {
    const [titulo, autor, ano] = linhaCsv.split(';');
    return new Livro(titulo.trim(), autor.trim(), Number(ano), 100);
  }
}
// ===== 2. HERANÇA: extends e super =====

class LivroDigital extends Livro {
  constructor(titulo, autor, ano, paginas, tamanhoMb) {
    super(titulo, autor, ano, paginas); // chama o constructor do pai
    this.tamanhoMb = tamanhoMb;         // atributo exclusivo do filho
  }

  // SOBRESCRITA (override): substituímos o getter herdado.
  get resumo() {
    return `${super.resumo} [digital, ${this.tamanhoMb} MB]`; // super reaproveita o pai
  }

  // Método novo, existente apenas nesta subclasse.
  baixar() {
    console.log(`  Baixando "${this.titulo}" (${this.tamanhoMb} MB)...`);
  }
}

// ===== 3. COMPOSIÇÃO: "TEM UM" em vez de "É UM" =====
// Biblioteca NÃO é um livro: a Biblioteca TEM livros.
// Composição = montar objetos complexos a partir de partes simples.

class Biblioteca {
  // Campo privado: ninguém de fora mexe direto no acervo.
  #acervo = [];

  adicionar(livro) {
    this.#acervo.push(livro);
    return this; // retorno encadeável: bibli.adicionar(a).adicionar(b)
  }

  buscarPorTitulo(termo) {
    const termoMinusculo = termo.toLowerCase();
    return this.#acervo.find((livro) => livro.titulo.toLowerCase().includes(termoMinusculo));
  }

  listarResumos() {
    return this.#acervo.map((livro) => ` - ${livro.resumo}`);
  }

  get quantidade() {
    return this.#acervo.length;
  }
}

// ===== 4. USANDO TUDO JUNTO =====

const biblioteca = new Biblioteca();

biblioteca
  .adicionar(new Livro('Dom Casmurro', 'Machado de Assis', 1899, 256))
  .adicionar(Livro.criarDeTexto('O Cortico; Aluisio Azevedo; 1890')) // método estático
  .adicionar(new LivroDigital('Clean Code', 'Robert Martin', 2008, 464, 12.5));

console.log('Acervo da biblioteca:');
console.log(biblioteca.listarResumos().join('\n'));
console.log('Total de livros:', biblioteca.quantidade);

// Getters parecem propriedades (sem parênteses):
const domCasmurro = biblioteca.buscarPorTitulo('casmurro');
console.log('\nDisponibilidade:', domCasmurro.disponivel);

// Emprestando e tentando emprestar de novo:
domCasmurro.emprestar();
domCasmurro.emprestar(); // agora falha dentro do método
domCasmurro.devolver();
console.log('Depois de devolver:', domCasmurro.resumo);

// Setter validando entrada:
try {
  domCasmurro.paginasAtualizadas = -10;
} catch (erro) {
  console.log('\nSetter bloqueou:', erro.message);
}

// Sobrescrita em ação:
const ebook = new LivroDigital('Eloquent JavaScript', 'Marijn Haverbeke', 2018, 472, 8);
console.log(ebook.resumo);
ebook.baixar();
// ===== EXPERIMENTE =====
// 1. Crie uma classe Revista extends Livro com edicao e sobrescreva resumo().
// 2. Tente ler domCasmurro.#disponivel fora da classe e veja o erro gerado.
// 3. Adicione um metodo estatico Livro.compararAnos(a, b) que retorna o mais antigo.
