function vendeCarro(modelo) {

    switch (modelo) {

        case 'hatch':
            console.log('Compra efetuada com sucesso.');
        break;

        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            console.log('Tem certeza que não prefere este modelo?');
        break;

        default:
            console.log('Não trabalhamos com este tipo de automovel aqui.');
        break;

    }
}

vendeCarro('hatch');
vendeCarro('sedan');
vendeCarro('caminhonete');
vendeCarro('jetski');