
// Função para calcular a idade a partir do ano de nascimento
// anoNascimento: número representando o ano de nascimento da pessoa
// anoAtual: ano atual (opcional, padrão é o ano corrente)
export function calcularIdade(anoNascimento, anoAtual = new Date().getFullYear()) {
	// Verifica se o ano de nascimento é válido
	if (typeof anoNascimento !== 'number' || anoNascimento > anoAtual) {
		throw new Error('Ano de nascimento inválido.');
	}
	// Retorna a diferença entre o ano atual e o ano de nascimento
	return anoAtual - anoNascimento;
}
