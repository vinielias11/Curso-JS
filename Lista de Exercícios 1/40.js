function notaParam(notas) {
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] <= 4.9) {
            console.log(`Nota: ${notas[i]}. Conceito: D.`);
        } else if (notas[i] >= 5 && notas[i] <= 6.9) {
            console.log(`Nota: ${notas[i]}. Conceito: C.`);
        } else if (notas[i] >= 7 && notas[i] <= 8.9) {
            console.log(`Nota: ${notas[i]}. Conceito: B.`);
        } else if (notas[i] >= 9 && notas[i] <= 10) {
            console.log(`Nota: ${notas[i]}. Conceito: A.`);
        } else {
            console.log(`Nota: ${notas[i]}. inválida.`)
        }
    }
}

let notas1 = [3, 6.5, 10, 14, 7]

notaParam(notas1)