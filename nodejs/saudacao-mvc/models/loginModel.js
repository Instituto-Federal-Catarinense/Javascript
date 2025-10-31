module.exports = {
  gerarMensagemLogin: (email, senha) => {
    let acesso;

    if (email === "Kaua12345@gmail.com" && senha === "12345") {
      acesso="liberado";
    } else {
      acesso="negado";
    }
    return'Olá, ${email}! Seu acesso foi ${acesso}.';
  }
};