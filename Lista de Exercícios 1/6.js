function jurosSimples(C, i, t) {
    let M = (C * i * t);
    return M;
}

console.log(jurosSimples(500, 2/100, 8))

function jurosCompostos(C, i, t) {
    let M = (C * (1 + i) ** t).toFixed(2);
    return M;
}

console.log(jurosCompostos(500, 2/100, 8))
