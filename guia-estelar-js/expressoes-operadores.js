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