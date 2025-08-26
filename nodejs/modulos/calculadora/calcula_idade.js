function idade(a) {
    return hoje - a;
}
const hoje = new Date().getFullYear();
module.exports = {
    idade
};