function producto(numero1, numero2) {
    if (numero1 === 0 || numero2 === 0) {
        return 0
    } else {
        return (numero1 * numero2);
    }
}

module.exports = { producto }

