// function expression
// function anonymous

// parâmetros (parameters)
//Ex: 1
const sum = function(number1, number2){
    console.log(number1 + number2)
}
sum(2, 3) // arguments - argumentos
sum(4, 5)
sum(56, 300986743) // chamando a função que criei anteriormente, para facilitar na soma, reutilizado o bloco de código


// Ex: 2
let number1 = 34
let number2 = 25

console.log('O número 1 é ${number1}')
console.log('O número 2 é ${number2}')
console.log('A soma é ${sum(number1, number2)}')



// Ex:3 
const sum = function(number1, number2){
    let total = number1 + number2
    return total
} 

let number1 = 34
let number2 = 25

// console.log(`o número 1 é ${number1}`)
// console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)
console.log(total)

