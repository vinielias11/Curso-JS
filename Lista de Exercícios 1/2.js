function triangulo(a, b, c) {

    if (a == b == c) {
        console.log('O triângulo é equilátero.')
    }
    else if (a == b || a == c || b == c) {
        console.log('O triângulo é isósceles.')
    }
    else {
        console.log('O triângulo é escaleno.')
    }
}

triangulo(1, 1, 1)
triangulo(1, 1, 2)
triangulo(1, 2, 3)