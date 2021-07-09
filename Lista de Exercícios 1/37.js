function progressaoA(n, a1, r) {
    let termoatual = a1;
    let soma = 0;
    for (i = 1; i <= n; i++) {
        console.log(`Termo ${i}: ${termoatual}`);
        soma += termoatual;
        termoatual = termoatual + r;
    }
    console.log(`Razão da P.A: ${r}`);
    console.log(`Soma dos termos: ${soma}`);
    console.log('');
}

progressaoA(3, 1, 1)
progressaoA(4, 2, 7)

function progressaoG(n, a1, r) {
    let termoatual = a1;
    let soma = 0;
    for (i = 1; i <= n; i++) {
        console.log(`Termo ${i}: ${termoatual}`);
        soma += termoatual;
        termoatual *= r;
    }
    console.log(`Razão da P.G: ${r}`);
    console.log(`Soma dos termos: ${soma}`);
    console.log('');
}

progressaoG(3, 1, 1);
progressaoG(3, 1, 2);