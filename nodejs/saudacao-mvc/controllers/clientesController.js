module.exports = {

    clientes: (req, res) => {
        res.sendFile('clientes.html', {root: './views'});
    }
};