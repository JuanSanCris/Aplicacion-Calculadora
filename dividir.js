function dividir(numero1, numero2){
    if (numero1 === 0){
        return 0
    } else if (numero2 === 0){
        return "Error, no se puede dividir por cero"
    }
    
    return (numero1 / numero2)

}

module.exports = { dividir }
