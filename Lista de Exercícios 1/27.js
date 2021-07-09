function crescimento(alturai1, alturai2, taxa1, taxa2) {

    let ano = 0;
    if (alturai1 - alturai2 != 0 || alturai2 - alturai1 != 0) {

        let altura1 = alturai1;
        let altura2 = alturai2;

        if (altura1 > altura2) {

            do {

                altura1 = altura1 + taxa1;
                altura2 = altura2 + taxa2;
                ano++;

            } while (altura2 < altura1)

            console.log(`Levarão ${ano} anos para a criança com ${alturai2}cm de altura passar a criança com ${alturai1}cm de altura.`)

        } else {

            do {

                altura1 = altura1 + taxa1;
                altura2 = altura2 + taxa2;
                ano++;

            } while (altura1 < altura2)

            console.log(`Levarão ${ano} anos para a criança com ${alturai1}cm de altura passar a criança com ${alturai2}cm de altura.`)
        }

    } else {
        console.log('As alturas são iguais.')
    }
}

crescimento(150, 110, 2, 3)
crescimento(130, 105, 2, 6)
crescimento(151, 164, 1, 2)