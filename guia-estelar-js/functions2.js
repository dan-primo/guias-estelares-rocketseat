// function expression
// function anonymous

// parâmetros (parameters)

/*
const sum = function(number1, number2) {
    total = number1 + number2
    return total
}

let number1 = 5
let number2 = 20
sum(number1, number2) // arguments - argumentos

// console.log(`o número 1 é ${number1}`)
// console.log(`o número 2 é ${number2}`)
console.log(`A soma é ${sum(number1, number2)}`)
console.log(total)

// A função é um liquidificador

function fazerSuco(fruta1, fruta2) {
    return 'Suco de: ' + fruta1 + fruta2
}

const copo = fazerSuco('laranja ', '+ acelora')

console.log(copo)

*/

// function scope

// function hoisting
/*

sayMyName()

function sayMyName() {
    console.log('Danie Linda')
}

*/

// arrow function

/*
const sayMyName = () => {
    console.log('Danie Linda')
}

sayMyName()
*/

// callback function

/*
function sayMyName() {
    console.log('antes de executar a função callback')

    function name() {
        console.log('estou em uma callback')
    }
    name()

    console.log('depois de executar a callback')
}

sayMyName()
*/

// Function() constructor
//  *espressão new
//  *criar um novo objeto
//  *this keyword

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const dan = new Person("Danie")
const maria = new Person("João")
console.log(dan)
console.log(maria.walk())