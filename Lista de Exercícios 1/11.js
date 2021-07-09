function anoBissexto(ano) {

    if ((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)) {
        console.log(`${ano} é bissexto`)
    } else {
        console.log(`${ano} não é bissexto`)
    }
}

anoBissexto(1930)
anoBissexto(2016)
anoBissexto(2022)
anoBissexto(2020)