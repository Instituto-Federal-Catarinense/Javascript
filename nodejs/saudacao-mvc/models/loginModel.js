module.exports = {
  gerarMensagemLogin: (email, senha) => {
    if (email === "Kaua12345@gmail.com" && senha === "12345") {
      return "Login completado com sucesso";
    } else {
      return "Login incorreto";
    }
  }
};