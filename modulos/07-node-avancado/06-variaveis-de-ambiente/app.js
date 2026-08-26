require('dotenv').config();
const porta = Number(process.env.PORTA || 3007);
console.log(`Aplicação configurada na porta ${porta}.`);