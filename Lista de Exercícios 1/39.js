function trocaTermo(vetor1, vetor2) {
    if (vetor1.length == vetor2.length) {
        vetor1[0] = vetor2[0] + vetor1[0];
        vetor2[0] = vetor1[0] - vetor2[0];
        vetor1[0] = vetor1[0] - vetor2[0];

        console.log(`Vetor 1: ${vetor1}`);
        console.log(`Vetor 2: ${vetor2}`);
    } else {
        console.log('Tamanhos diferentes.');
    }
}

let vetorA = [1, 2, 3];
let vetorB = [4, 5, 6];

trocaTermo(vetorA, vetorB);