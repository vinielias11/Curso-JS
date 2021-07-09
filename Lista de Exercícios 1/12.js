function fatorial(n) {
    let fat = 1;
    for (let i = n; i > 1; i--) {
        fat = (fat * i)
    }

    console.log(`O fatorial de ${n} é ${fat}`)
}

fatorial(5)
fatorial(6)
fatorial(9)