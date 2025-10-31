module.exports = {
  cadastrarProduto: ( id, descricao, quantidade, preco) => {
    if (quantidade > 1) {
    return `${quantidade} "${descricao}" foram cadastrados com successo no id ${id} pelo preço de ${preco}$`;
    }
    else {
    return `${quantidade} "${descricao}" foi cadastrado com successo no id ${id} pelo preço de ${preco}$`;};
  }
};
