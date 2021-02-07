// Prototype

//  * prototype-based language
//  * prototype chain
//  * __proto__

/*
    Type conversion (typecasting) vs Type coersion

    * Alteração de um tipo de dado para outro tipo

    console.log('9' + 5) // -> coersion
    console.log(Number('9') + 5) // -> conversion
*/

/*
 Manipulando Strings e Números
 Transformar String em Número e Número em String

 let string = '123'
Number(string)
let number = 321
String(number)
*/

/*
    Manipulando Strings e Números

    Contar quantos caracteres tem uma palavra e quantos
    dígitos tem um número

let word = "Paralelepido"
console.log(word.length)
let number = 1234
console.log(String(number).length)
*/

// Manipulando Arrays

let techs = ["html", "css", "js"];

// adicionar um item no fim
console.log(techs.push("nodejs"));

// adicionar no começo
techs.unshift("sql");

// remover no fim
techs.pop();

// remover do começo
techs.shift();

//  pegar somente alguns elementos do array
// console.log(techs.slice(1, 3))

// remover 1 ou mais items em qualquer posição do array
// techs.splice(1, 1)

//  encontrar a posição de um elemento no array
let index = techs.indexOf("css");
techs.splice(index, 1);

console.log(techs);
