const chave = 'itens-estudo';
const lista = document.querySelector('#lista');
const ler = () => JSON.parse(localStorage.getItem(chave) || '[]');
const renderizar = () => { lista.innerHTML = ler().map((item) => `<li>${item}</li>`).join(''); };
document.querySelector('#salvar').addEventListener('click', () => {
  const item = document.querySelector('#item').value.trim();
  if (!item) return;
  localStorage.setItem(chave, JSON.stringify([...ler(), item])); renderizar();
});
document.querySelector('#limpar').addEventListener('click', () => { localStorage.removeItem(chave); renderizar(); });
renderizar();