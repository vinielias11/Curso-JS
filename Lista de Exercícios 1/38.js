function impares(i = 0, f = 100) {
    if (i > f) {
        i = f + i;
        f = i - f;
        i = i - f;
    }

    for (i; i <= f; i++) {
        if (i % 2 != 0) {
            console.log(`${i}`);
        }
    }
    console.log('');
}

impares(2, 10)
impares(2, 10)
impares(-2, 49)