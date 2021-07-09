function notaAluno(codigo, n1, n2, n3) {

    if (n1 > n2 && n1 > n3) {
        let media = (((n1 * 4) + (n2 * 3) + (n3 * 3)) / 12).toFixed(2);
        console.log(`Código: ${codigo}`);
        console.log(`Nota 1: ${n1}`);
        console.log(`Nota 2: ${n2}`);
        console.log(`Nota 3: ${n3}`);
        console.log(`Média: ${media}`);

        if (media >= 5) {
            console.log('Aprovado');
        } else {
            console.log('Reprovado');
        }
    }
    else if (n2 > n1 && n2 > n3) {
        let media = (((n2 * 4) + (n1 * 3) + (n3 * 3)) / 12).toFixed(2);
        console.log(`Código: ${codigo}`);
        console.log(`Nota 1: ${n1}`);
        console.log(`Nota 2: ${n2}`);
        console.log(`Nota 3: ${n3}`);
        console.log(`Média: ${media}`);

        if (media >= 5) {
            console.log('Aprovado');
        } else {
            console.log('Reprovado');
        }
    }
    else if (n3 > n2 && n3 > n1) {
        let media = (((n3 * 4) + (n2 * 3) + (n1 * 3)) / 12).toFixed(2);
        console.log(`Código: ${codigo}`);
        console.log(`Nota 1: ${n1}`);
        console.log(`Nota 2: ${n2}`);
        console.log(`Nota 3: ${n3}`);
        console.log(`Média: ${media}`);

        if (media >= 5) {
            console.log('Aprovado');
        } else {
            console.log('Reprovado');
        }
    }

}

notaAluno(123, 8, 4, 5)