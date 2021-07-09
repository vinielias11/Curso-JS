function dinheiro(valor) {

    let cem;
    let cinquenta;
    let dez;
    let cinco;
    let um;

    let resto = valor

    if (resto >= 100) {
        cem = Math.floor(resto / 100);
        resto = resto - (cem * 100);
    }
    
    if (resto >= 50) {
        cinquenta = Math.floor(resto / 50);
        resto = resto - (cinquenta * 50);
    }

    if (resto >= 10) {
        dez = Math.floor(resto / 10);
        resto = resto - (dez * 10);
    }

    if (resto >= 5) {
        cinco = Math.floor(resto / 5);
        resto = resto - (cinco * 5);
    }

    if (resto >= 1) {
        um = Math.floor(resto / 1);
    }

    console.log(`Para sacar R$${valor} precisamos de:`);

    if (cem >= 1) {
        console.log(`${cem} notas de 100.`);
    }
    if (cinquenta >= 1) {
        console.log(`${cinquenta} notas de 50.`);
    }
    if (dez >= 1) {
        console.log(`${dez} notas de 10.`);
    }
    if (cinco >= 1) {
        console.log(`${cinco} notas de 5.`);
    }
    if (um >= 1) {
        console.log(`${um} moeda(s) de 1 real.`);
    }
    console.log('');
}

dinheiro(881);
dinheiro(500);
dinheiro(1440);
dinheiro(738);