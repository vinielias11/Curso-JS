function verPlano(plano, salario) {

    switch (plano) {

        case 'A':
            console.log(`Seu novo salário é de R$${(salario * 1.10).toFixed(2)}`);
        break;

        case 'B':
            console.log(`Seu novo salário é de R$${(salario * 1.15).toFixed(2)}`);
        break;

        case 'C':
            console.log(`Seu novo salário é de R$${(salario * 1.20).toFixed(2)}`);
        break;

        default:
            console.log('Plano inválido.');
        break;

    }
}

verPlano('A', 1000);
verPlano('B', 1000);
verPlano('C', 1000);