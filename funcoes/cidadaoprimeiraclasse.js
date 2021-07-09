function fun1() { }

const fun2 = function () { }

// dentro de um array
const array = [function (a,b) {return a + b}, fun1, fun2]
console.log(array[0](2,3))

// armazenando funcoes dentro de um atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

// funcao dentro de funcao
function run(fun) {
    fun()
}

run(function() {console.log('Executando...')})

// funcao pode retornar uma funcao
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincomais = soma(2, 3)
cincomais(4)