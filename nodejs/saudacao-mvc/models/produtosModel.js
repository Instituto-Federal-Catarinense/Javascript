module.exports = {
    mensagemCadastro: (id, descricao, quantidade, preco) => {
        return `Produto com id: ${id}, descrição: "${descricao}", quantidade: ${quantidade} e preço: R$${preco} cadastrado com sucesso!`;
    }
};