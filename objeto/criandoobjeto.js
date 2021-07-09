// usando a notacao literal
const obj1 = {}
console.log(obj1)

// object em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// funcoes construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return (preco * (1 - desc)).toFixed(2)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// funcao factory
function criarFuncionario(nome, salariobase, faltas) {
    return {
        nome,
        salariobase,
        faltas,
        getSalario() {
            return (salariobase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// uma funcao famosa que retorna Objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)