Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirresultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Valor inválido')
    }

    console.log('fim')
}

imprimirresultado(10)
imprimirresultado(8.9)
imprimirresultado(6.55)
imprimirresultado(2.3)
imprimirresultado(-1)
imprimirresultado(11)