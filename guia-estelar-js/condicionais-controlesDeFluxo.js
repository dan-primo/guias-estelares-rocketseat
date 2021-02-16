// Control Flow

// if... else

// let temperature = 38

// if(temperature >= 37) {
//     console.log('Fever')
// } else {
//     console.log('Healthy')
// }

let temperature = 37

if(temperature >= 37.5) {
    console.log('High Fever')
} else if(temperature < 37.5 && temperature >= 37) {
    console.log('Moderate Fever')
} else {
    console.log('Healthy')
}

// switch

function calculate(number1, operator, number2) {
    let result

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('não implementado')
            break
    }

    return result
}

console.log(calculate(2, '*', 2))

// throw
// o erro 'Uncaught' siginifica que o erro não foi 'pego' 'capturado' 'throw'

function sayMyName(namePop = '') {
    if (namePop === '') {
        throw 'Nome é obrigatório'
    }

    console.log(namePop)
}

// try... catch
try {
    sayMyName('Beyoncé')
} catch (e) {
    console.log(e)
}

console.log('Após o try/catch')