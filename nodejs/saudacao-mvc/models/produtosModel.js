
 module.exports =  {
       
    mensagemCadastro:(id, descricao, quantidade, preco) => {
        let mensagem = `O produto ${descricao} com ID ${id}, quantidade ${quantidade} e preço R$ ${preco}`
        return mensagem;
    }
};