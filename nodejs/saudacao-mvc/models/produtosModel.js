module.exports = {

    cadastrar:(id, descricao, quantidade, preco) => {

        return `O produto ${descricao}, com ID: ${id} - Quantidade: ${quantidade}
        - Valor Unitário: ${preco} foi cadastrado com sucesso`;
    }
};