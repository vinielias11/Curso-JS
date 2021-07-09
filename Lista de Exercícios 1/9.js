function nota(x) {
    if (x < 38) {
        console.log(`Reprovado com nota ${x}`)
    }
    else {
        
        let y = Math.ceil(x/5) * 5

        if (y - x < 3) {
        console.log(`Aprovado com nota ${y}`)
        } else {
            console.log(`Aprovado com nota ${x}`)
        }
        
    }
}

nota(30)
nota(38)
nota(41)
nota(84)