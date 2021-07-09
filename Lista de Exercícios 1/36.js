function multVetor(vetor, num) {
    let vetorResultado = [];

    for (let i = 0; i < vetor.length; i++) {
        vetorResultado.push(vetor[i] * num);
    }
    console.log(`Vetor Resultado: ${vetorResultado}`);
}

vetor1 = [1, 2, 3];

multVetor(vetor1, 2);
multVetor(vetor1, 3);
console.log('');

function multVetorSe5(vetor, num) {
    let vetorResultado = [];
        for (let i = 0; i < vetor.length; i++) {
            if (vetor[i] > 5) {
            vetorResultado.push(vetor[i] * num);
            }
        }
    console.log(`Vetor Resultado: ${vetorResultado}`);
}

vetor2 = [2, 3, 4, 5, 6, 7, 8];
multVetorSe5(vetor2, 2);
multVetorSe5(vetor2, 3);