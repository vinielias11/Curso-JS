function cardapio(codigo) {

    switch(codigo) {

        case 100:
            console.log('Descrição: Cachorro Quente');
            console.log('Preço: R$ 3,00');
            console.log('');
        break;
        
        case 200:
            console.log('Descrição: Hambúrguer Simples');
            console.log('Preço: R$ 4,00');
            console.log('');
        break;

        case 300:
            console.log('Descrição: Cheeseburguer');
            console.log('Preço: R$ 5,50');
            console.log('');
        break;

        case 400:
            console.log('Descrição: Bauru');
            console.log('Preço: R$ 7,50');
            console.log('');
        break;

        case 500:
            console.log('Descrição: Refrigerante');
            console.log('Preço: R$ 3,50');
            console.log('');
        break;

        case 600:
            console.log('Descrição: Suco');
            console.log('Preço: R$ 2,80');
            console.log('');
        break;

        default:
            console.log('Produto inválido.');
        break;
    }
}

cardapio(100)
cardapio(200)
cardapio(300)
cardapio(400)
cardapio(1000)