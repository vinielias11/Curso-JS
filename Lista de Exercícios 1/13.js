function defineDia(dia) {

    switch (dia) {

        case 1:
        case 7:
            console.log('Fim de semana.')
        break;

        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log('Dia útil.')
        break;

        default:
            console.log('Dia inválido.')
        break;
    }
}

defineDia(1)
defineDia(7)
defineDia(3)
defineDia(9)