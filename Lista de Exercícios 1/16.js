function calc(a, op, b) {

    switch (op) {

        case '+':
            console.log(`A soma de ${a} e ${b} é ${a + b}`);
        break;

        case '-':
            console.log(`A subtração de ${a} e ${b} é ${a - b}`);
        break;

        case '*':
            console.log(`A multiplicação de ${a} e ${b} é ${a * b}`);
        break;

        case '/':
            console.log(`A divisão de ${a} e ${b} é ${(a / b).toFixed(2)}`);
        break;

        default:
            console.log('Operando inválido.');
        break;
    }
}

calc(2, '+', 3);
calc(2, '-', 3);
calc(2, '*', 3);
calc(2, '/', 3);
calc(2, 'a', 3);