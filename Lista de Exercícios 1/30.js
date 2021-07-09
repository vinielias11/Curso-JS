function menorMaior (vetor) {
    let maior = -9999;
    let menor = 9999;

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i];
        }
        if (vetor[i] < menor) {
            menor = vetor[i];
        }
    }

    console.log(`Menor elemento: ${menor}. Maior elemento: ${maior}.`);
}

vetor1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
menorMaior(vetor1);