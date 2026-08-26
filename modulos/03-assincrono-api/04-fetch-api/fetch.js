const botao = document.querySelector('#carregar');
const status = document.querySelector('#status');
botao.addEventListener('click', async () => {
  status.textContent = 'Carregando...';
  try {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    if (!resposta.ok) throw new Error(`HTTP ${resposta.status}`);
    const posts = await resposta.json();
    document.querySelector('#posts').innerHTML = posts.map((post) => `<li>${post.title}</li>`).join('');
    status.textContent = 'Carregado.';
  } catch (erro) { status.textContent = `Erro: ${erro.message}`; }
});