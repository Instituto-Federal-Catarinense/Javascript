/** SOLUÇÃO-MODELO — 03-servidor-http-roteamento | Enunciado: exercícios 1 e 2 de ../03-servidor-http-roteamento/exercicios.md | Como rodar: node 03-servidor-http-roteamento.js (o servidor fica aguardando conexões; encerre com Ctrl+C)
 *
 * Exercício 1 — rota `/produtos`: responde 200 com <h1> e uma lista <ul>
 *   de três produtos escritos à mão; as rotas antigas (`/`, `/sobre`,
 *   `/contato`, `/fotos`) continuam funcionando.
 * Exercício 2 — `/contato` aceita APENAS GET: qualquer outro método
 *   recebe 405 com a mensagem "Método não permitido".
 *
 * Teste com curl (comandos anotados):
 *   curl -i http://localhost:3000/
 *   curl -i http://localhost:3000/produtos
 *   curl -i http://localhost:3000/contato            # GET -> 200
 *   curl -i -X POST http://localhost:3000/contato    #     -> 405
 *   curl -i http://localhost:3000/rota-inexistente   #     -> 404
 *
 * Observação: o exemplo da aula usa `import` porque o package.json dela tem
 * "type": "module". Esta pasta solucoes/ não tem package.json próprio, então
 * o arquivo usa CommonJS (`require`) herdado da raiz do repositório.
 */
const http = require('http');

const PORTA = 3000;

// Lista fixa do exercício 1.
const produtos = ['Arroz tipo 1', 'Feijão carioca', 'Café torrado'];

// Monta o HTML da lista separado do roteamento para manter cada ramo curto.
function montarListaHtml(itens) {
  const itensHtml = itens.map((item) => `<li>${item}</li>`).join('');
  return `<ul>${itensHtml}</ul>`;
}

const servidor = http.createServer((requisicao, resposta) => {
  const { url } = requisicao;
  const { method: metodo } = requisicao;

  resposta.setHeader('Content-Type', 'text/html; charset=utf-8');

  if (url === '/') {
    resposta.statusCode = 200;
    resposta.end('<h1>Página Inicial</h1>');
  } else if (url === '/sobre' && metodo === 'GET') {
    resposta.statusCode = 200;
    resposta.end('<h1>Sobre Nós</h1><p>Exemplo de solução com Node.js puro.</p>');
  } else if (url === '/contato' && metodo === 'GET') {
    // Exercício 2: primeiro o caso VÁLIDO...
    resposta.statusCode = 200;
    resposta.end('<h1>Fale Conosco</h1>');
  } else if (url === '/contato') {
    // ...depois o caso inválido, que só chega aqui se o método não for GET.
    resposta.statusCode = 405;
    resposta.end('<h1>Método não permitido</h1>');
  } else if (url === '/fotos') {
    resposta.statusCode = 200;
    resposta.end('<h1>Fotos</h1>');
  } else if (url === '/produtos') {
    // Exercício 1: nova rota encadeada ANTES do bloco final do 404.
    resposta.statusCode = 200;
    resposta.end(`<h1>Nossos Produtos</h1>${montarListaHtml(produtos)}`);
  } else {
    resposta.statusCode = 404;
    resposta.end('<h1>404 - Página Não Encontrada</h1>');
  }
});

// Protege o listen atrás de require.main === module: importar este arquivo
// (em testes, por exemplo) NÃO sobe um servidor travando o processo.
if (require.main === module) {
  servidor.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
  });
}

module.exports = servidor;

// DISCUSSÃO:
// - A ordem dos ramos importa: o par (`/contato` && GET) precisa vir ANTES do
//   ramo genérico `/contato`, senão o 405 nunca seria alcançado.
// - 405 (Method Not Allowed) é o status semanticamente correto quando a rota
//   existe mas o método não; 404 ficaria impreciso.
// - Próximos passos naturais da lista: filtro por query string em /produtos
//   com `new URL(request.url, 'http://localhost')` + `searchParams`
//   (exercício 3) e resposta JSON em /api/horario trocando o Content-Type
//   para application/json; charset=utf-8 (exercício 5).
