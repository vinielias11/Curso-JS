function intervalo(vetor) {
    let fora = 0;
    let dentro = 0;

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            dentro++;
        } else {
            fora++;
        }
    }
    console.log(`${fora} números estão fora do intervalo e ${dentro} números estão dentro.`)
}

vetor1 = [1, 2, 3, 11, 12, 13]
intervalo(vetor1)