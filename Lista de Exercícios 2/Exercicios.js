// 1
function cumprimentar(texto) {
    return `Olá, ${texto}!`;
}
console.log(cumprimentar('Leonardo'));
console.log(cumprimentar('Maria'));

// 2
function idadeEmDias(idade) {
    return idade * 365;
}
console.log(`Se você tem 18 anos, tem ${idadeEmDias(18)} dias de idade`);
console.log(`Se você tem 24 anos, tem ${idadeEmDias(24)} dias de idade`);

// 3
function salario(horas, valorHora) {
    console.log(`Salário igual a R$ ${(horas * valorHora).toFixed(2).toString().replace('.', ',')}`);
}
salario(150, 40.5);
salario(200, 20);

// 4
function inverso(x) {
    if (typeof x === 'boolean') {
        return !x;
    }
    else if (typeof x === 'number') {
        if (x > 0) {
            return `-${x}`;
        } else if (x < 0) {
            return `${x.toString().replace('-', '')}`;
        } else {  // < quando for 0
            return x;
        }
    } else {
        return `Booleano ou numérico esperado, mas o parâmetro é do tipo ${typeof x}`
    }
}

console.log(inverso(true));
console.log(inverso(500));
console.log(inverso(-20));
console.log(inverso(0));
console.log(inverso('a'));

// 5
function intervalo(n, min, max, incl = false) {
    if (incl == false) {
        if (n > min && n < max) {
            return true;
        } else {
            return false;
        }
    } else {
        if (n >= min && n <= max) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(intervalo(10, 5, 50));
console.log(intervalo(10, 10, 50, true));

// 6
function multSemSinal(a, b) {
    let resultado = 0;
    for (let i = 0; i < b; i++) {
        resultado += a
    }
    return resultado;
}

console.log(multSemSinal(5, 5))
console.log(multSemSinal(7, 3))

// 7
function repeteElemento(elemento, vezes) {
    let meuArray = [];
    for (let i = 0; i < vezes; i++) {
        meuArray.push(elemento);
    }
    console.log(meuArray)
}

repeteElemento('codigo', 2);
repeteElemento('cu', 7);

// 8
function simboloMais(n) {
    let Arrayzasso = [];
    for (let i = 0; i < n; i++) {
        Arrayzasso.push('+');
    }
    let arrayzassoString = Arrayzasso.join('')
    console.log(arrayzassoString)
}
simboloMais(2)
simboloMais(4)

// 9
function primeiroEUltimo(umArray) {
    let arrayComPrEUlt = [];
    arrayComPrEUlt[0] = umArray.shift();
    arrayComPrEUlt[1] = umArray.pop();
    console.log(arrayComPrEUlt);
}
primeiroEUltimo([1, 2, 3]);
primeiroEUltimo(['a', 1, 3, [], 'b'])

// 10
function removerAtributo(obj, atr) {
    let copia = {}
    copia = Object.assign(copia, obj);
    delete copia[atr];
    return copia;
}

const p1 = {
    nome: "caneta",
    preco: 1.50,
    marca: "bic"
}

console.log(removerAtributo(p1, "preco"));

// 11
function soNumeros(arrayDiverso) {
    const novoArray = [];
    for (let item of arrayDiverso) {
        if (typeof item === 'number') {
            novoArray.push(item);
        }
    }
    return novoArray;
}
console.log(soNumeros([1, 2, 'a']));
console.log(soNumeros([4, 7, [], 'seda']));

// 12
function objetoParaArray(obj) {
    return Object.entries(obj);
}
console.log(objetoParaArray({nome: "Maria", profissao: "Dev"}));

// 13
function paresEIndicesPares(arr) {
    let arrayPar = [];
    arr.forEach(function(elemento, indice) {
        if (elemento % 2 == 0 && indice % 2 == 0) {
            arrayPar.push(elemento);
        }
    })
    return arrayPar;
}
console.log(paresEIndicesPares([2, 3, 4, 5, 7]))

// 14
function anoBissexto(ano) {
    if ((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(anoBissexto(1930));
console.log(anoBissexto(2016));
console.log(anoBissexto(2022));
console.log(anoBissexto(2020));

// 15
function somarArray(arrayX) {
    let soma = 0;
    arrayX.forEach(numero => soma += numero);
    return soma;
}
console.log(somarArray([10, 10, 10]));
console.log(somarArray([7, 3, 16]));

// 16
function totalDespesas(arrayProdutos) {
    const apenasPreco = produto => produto.preco;
    let soma = 0;
    let arrayprecos = arrayProdutos.map(apenasPreco);
    arrayprecos.forEach(preco => soma += preco);
    return soma;
}

/* ou
function totalDespesas(arrayProdutos) {
    let soma = 0;
    for (let item of arrayProdutos) {
        soma += item.preco
    }
    return soma;
}
*/
const produtos = [
    { nome: "Alexa", preco: 250.00 },
    { nome: "Kindle", preco: 269.00 },
    { nome: "E-books", preco: 58.89 }
]

console.log(totalDespesas(produtos));

// 17
function mediaArray(arrayNumeros) {
    let soma = 0;
    let media = 0;
    arrayNumeros.forEach(elemento => soma += elemento);
    media = soma / arrayNumeros.length;
    return media;
}
console.log(mediaArray([0, 10]));
console.log(mediaArray([7, 6, 8]));

// 18
function areaTriangulo(base, altura) {
    let area = (base * altura) / 2;
    return area.toFixed(2);
}
console.log(areaTriangulo(10, 15));
console.log(areaTriangulo(9.25, 13.1));

// 19
function menorNumero(array) {
    let menorNumero = array[0];
    for (let i in array) {
        if (array[i] < menorNumero) { menorNumero = array[i] }
    }
    return menorNumero;
}
console.log(menorNumero([1, 454, 2]));
console.log(menorNumero([54, 98, 23, 45]));

// 20
function sorteio(n) {
    const numeroSecreto = function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min) + min);
    }
    let sorteio = numeroSecreto(1, 10);
    if (sorteio == n) {
        return `Parabéns, o número sorteado foi o ${n}!`
    } else {
        return `Que pena, o número sorteado foi o ${sorteio}.`
    }
}
console.log(sorteio(2));
console.log(sorteio(4));

// 21
function contarPalavras(frase) {
    let contador = 1; // 1, pois sempre será uma palavra ao menos.
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] == ' ') { contador++; }
    }
    return contador;
}

/* ou
function contarPalavras(frase) {
    let palavras = frase.split(' ');
    return palavras.length;
}
*/
console.log(contarPalavras('Olá, tudo bem?'))
console.log(contarPalavras('Eu gosto de Guns N Roses.'))

// 22
function contarCaracteres(caracter, string) {
    let qtdDoCaracter = 0;
    let stringEmArray = string.split("");
    stringEmArray.forEach(function(e) {
        if (e == caracter) { qtdDoCaracter++; }
    })
    return qtdDoCaracter;
}
console.log(contarCaracteres("r", "Eu gosto de guns n roses"));
console.log(contarCaracteres("a", "Natalia gosta de rosas"));

// 23
function buscarPalavrasIguais(palavra, arrayString) {
    let novoArrayString = [];
    for (let elemento of arrayString) {
        if (elemento.includes(palavra)) { novoArrayString.push(elemento) }
    }
    return novoArrayString;
}
console.log(buscarPalavrasIguais("pro", ["programação", "mobile", "profissional"]));

// 24
function removerVogais(palavra) {
    /*const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    vogais.forEach(vogal => palavra = palavra.replace(vogal, ''));
    return palavra;*/ // <-- não deu certo

    return palavra.replace(/[aeiou]/ig, '')
}
console.log(removerVogais("Coder"));
console.log(removerVogais("Maria"));

// 25
function inverterObjeto(objeto) {
    const paresDeChaveValorInvertidos = Object.entries(objeto).map(parChaveValor => parChaveValor.reverse()); 
    return Object.fromEntries(paresDeChaveValorInvertidos);
}
console.log(inverterObjeto({ a: 1, b: 2, c: 3 }));

// 26
function filtrarPorDigitos(arrayNumeros, qtdDigitos) {
    let resultado = [];
    for (numero of arrayNumeros) {
        const digitos = String(numero).length
        if (digitos === qtdDigitos) {
            resultado.push(numero);
        }
    }
    return resultado;
}
console.log(filtrarPorDigitos([1, 23, 4, 35], 1));

// 27
function segundoMaior(arrayNumerico) {
    const numerosOrdenados = arrayNumerico.sort((numeroA, numeroB) => numeroB - numeroA) 
    const segundoMaior = numerosOrdenados[1];
    return segundoMaior;
}
console.log(segundoMaior([1, 2, 3, 4]))