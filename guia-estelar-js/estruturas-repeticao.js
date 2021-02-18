// Estruturas de repetição:

/*

for
Break -> para a execução do loop
Continue -> pula a execução do momento

for(let i = 0; i < 10; i++) {
    console.log(i);
}

for(let i = 20; i > 15; i--) {
    if(i === 12) {
        break;
    }
    console.log(i);
}

for(let i = 10; i > 0; i--) {
    if(i === 5) {
        continue;
    }
    console.log(i);
}
*/

// While

// let i = 0;
// while(i < 10) {
//     console.log(i)

//     i++
// }

// let x = 5050505050
// while(x > 10) {
//     console.log(x)

//     x /= 50
// }


// for of

let nameTeste = 'Danie'
let namesTeste = ['Darlene', 'Dominique', 'Whiterose']

for(let name of namesTeste) {
    console.log(name)
}

// for in

let pessoa = {
    nome: 'Joanna Wellick',
    idade: 33,
    altura: 1.80
}

for(let property in pessoa) {
    console.log(property)
    console.log(property.nome)
}