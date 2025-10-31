module.exports = {
    vinindex: (req, res) => {
        res.sendFile("vini.html", { root: "./views" });
    },
    fotosvini: (req, res) => {
        res.sendFile("fotosvini.html", { root: "./views" });
    }
};