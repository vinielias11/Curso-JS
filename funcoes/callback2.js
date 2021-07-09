const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// sem callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// com callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

const notas2 = [1.1, 5.5, 8.3, 8.1, 6,9, 10]
let notasAprovadas = notas2.filter(nota => nota > 6.5)
console.log(notasAprovadas)

notasAprovadas = notas2.filter(function (nota) {
    return nota > 6.5
})
console.log(notasAprovadas)