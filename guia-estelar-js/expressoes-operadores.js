/*
Expressões e Operadores

- Expressions
- Operators
    Binary
    Unary
    Ternaryxx
*/

/*
    new

    * left-hand-side expression
    * criar um novo objeto
*/

let name_new = new String('Dan')
name_new.surName = "Primo"
let age = new Number(123)
console.log(name_new.surName, age)

/* 
    Operadores unários
    typeof
    delete
*/

const person = {
    animal: 'Cat',
    age: 200,
}
delete person.age

console.log(person)

/* ------------------------------------- */

// Operadores lógicos (logical operators)

/* - 2 valores booleanos, quando verificados, resultará em verdadeiro ou falso */

let pao = true;
let manteiga = false;

/*

AND &&
console.log(pao && manteiga)

OR ||
console.log(pao || manteiga)

NOT ! */
console.log(!pao)

/* ------------------------------------- */

// Operador Condicional (Ternário)

// Dependendendo da condição, nós receberemos valores diferentes

// Condição então valor 1 se não valor 2 se
// condition ? value1 : value2

let tea = true
let cake = true

const teatime = tea && cake ? 'nice meal' : 'bad meal'

console.log(teatime)

/* ------------------------------------- */

/* 
    FALSY
    Quando um valor é considerado false em contextos onde
    um booleano é obrigatório (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN

    --------------------------

    TRUTHY
    Quando um valor é considerado true em contextos onde
    um booleano é obrigatório (condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

/* ------------------------------------- */

/* 
    Operator precedence | Precedencia de operadores

    * grouping                     |  ( )
    * negação e incremento         |  ! ++ --
    * multiplicação e divição      |  * /
    * adição e subtração           |  + -
    * relacional                   |  < <= >= >
    * igualdade                    |  == != === !==
    * AND                          |  &&
    * OR                           |  ||
    * condicional                  |  ?:
    * assignment (atribuição)      |  = += -= *=
    
*/