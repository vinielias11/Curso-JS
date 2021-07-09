function mediaVetor(vetor) {
    let soma = 0;
    let media = 0;

    for (let i = 0; i < vetor.length; i++) {
        soma = soma + vetor[i];
    }

    media = soma / vetor.length;
    console.log(`Média: ${media}`);
}

vetor1 = [3, 5, 4];
mediaVetor(vetor1);