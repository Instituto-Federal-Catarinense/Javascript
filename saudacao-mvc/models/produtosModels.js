module.exports = {
    cadastrar: (id, descricao, quantidade, valor_unitario) => {

    return `O produto ${descricao}, com ID: ${id} - Quantidade: ${quantidade} 
    - Valor Unitário: ${valor_unitario} foi cadastrado com sucesso!`;
  }
};