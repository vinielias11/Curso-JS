function negativos (vetor) {
    let qtdNegativos = 0;

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            qtdNegativos++;
        }
    }

    console.log(`Quantidade de negativos: ${qtdNegativos}`);
}

vetor1 = [-1, -2, -3, -4, 5, 6, 7, 8, 9, 10];
negativos(vetor1);