function planoSaude(idade) {
    let adicional;
    
    if (idade < 10) {
        adicional = 80;
    }
    else if (idade >= 10 && idade <= 30) {
        adicional = 50
    }
    else if (idade > 30 && idade <= 60) {
        adicional = 95;
    }
    else if (idade > 60) {
        adicional = 130;
    }

    let valorTotal = 100 + adicional;

    console.log(`Idade: ${idade} anos`);
    console.log(`O valor a ser pago pelo plano de saúde é de R$${valorTotal.toFixed(2).toString().replace(".", ",")}`);
    console.log('');
}

planoSaude(5)
planoSaude(70)
planoSaude(32)