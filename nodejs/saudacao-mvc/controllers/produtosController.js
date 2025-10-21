const path = require('path');

module.exports = {
	index: (req, res) => {
		res.sendFile(path.join(__dirname, '..', 'views', 'produtos.html'));
	},
	camisetas: (req, res) => {
		res.sendFile(path.join(__dirname, '..', 'views', 'camisetas.html'));
	}
};
