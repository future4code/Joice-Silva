//............Escrita de código......................

/* 
 
1. Pergunte ao usuário quantos bichinhos de estimação ele
 tem e guarde esse dado em uma variável.

a) Se a quantidade for 0, imprima no console:
 "Que pena! Você pode adotar um pet!"

b) Se a quantidade for maior que 0, solicite que o usuário 
digite os nomes deles, um por um, e guarde esses nomes em um array.

c) Por fim, imprima o array com os nomes dos bichinhos no console.

*/

//................exercicio 1°.......................................

/*let bichinhoEstimacao = ' '
let bichinhoEstimacaoDigitado;
let numero
let soma = 0

while (bichinhoEstimacaoDigitado !== bichinhoEstimacao) {
    bichinhoEstimacaoDigitado = prompt('Qual Bichinho de estimação você tem?')
    alert('Que pena! Você pode adotar um')
}
*/

/*
function retornaMaiorNumero(arrayDeNumeros) {
    let maiorNumero = 0
    for(let i = 0; i < arrayDeNumeros.length; i++) {
        if(arrayDeNumeros [i] > maiorNumero) {
            maiorNumero = arrayDeNumeros [i]
        }
    }
    return maiorNumero
}

const maiorNumeroDoArray = retornaMaiorNumero([1, 20])

*/

let quantidadeDePets = []
let quantidadeDePet = Number(prompt('Quantos Bichinhos de estimação você tem?'))

if (quantidadeDePet === 0) {
    console.log('Que pena! Você pode adotar um pet!')
} else if(quantidadeDePet > 0) {
    for (let i = 0; <= quantidadeDePet; i++) {
        quantidadeDePets[i] = prompt('Nome do Pet', ${i+i}:)

    }
}

console.log(quantidadeDePets)

const arrayOriginal = [1, 2, 3, 4, 5]