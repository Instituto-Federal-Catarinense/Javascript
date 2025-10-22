module.exports = {

    produtos: (req, res) => {
        res.sendFile('produtos.html' , { root: './views' });
    },

    camiseta: (req, res) => {
        res.sendFile('camiseta.html' , { root: './views' });
}
};