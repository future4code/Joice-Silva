//................Exercicio 1° de escrita de código........................................


const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 /*const listaDeNomes = pets.map((pets) => {
     return pets.nome
 })

 console.log(listaDeNomes)*/

 // a) Crie um novo array que contenha apenas o nome dos doguinhos:

 const listaDeNomesEIndex = pets.map( (pet, index) => {
     return ` ${index} ${pet.nome}`
 })

 console.log(listaDeNomesEIndex)

 // b) Crie um novo array apenas com os cachorros salsicha:

 const petSalsicha = pets.filter((pets) => {
    return pets.raca === "Salsicha"
})

console.log("Salsicha", petSalsicha)

/*

// c) Crie um novo array que possuirá mensagens para enviar para todos os 
clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto 
de 10% para tosar o/a [NOME]!"

*/

const apenaPoodles = pets.filter((item, index, array) => {
    return item.raca === "poodle"
})
console.log(apenaPoodles)

const mensagem = apenaPoodles.map((item, index, array) => {
    return `${mensagem}`
})
console.log(`Você ganhou um cupom com desconto de 10% para tosar o/a ${mensagem}`)

//...............exercicio 2°............................................................

//2. 

const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// a) crie um novo array que contenha apenas o nome de cada item

const listaNome = produtos.map((produtos) => {
    return produtos.nome
})

console.log(listaNome)

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos

const objetos = produtos.map((elementoProdutos) => {
    return elementoProdutos.nome
})
console.log(objetos)

const objetos1 = produtos.map((elementoProdutos1) => {
    return elementoProdutos1.preco * 0.50
})
console.log(`O valor do  produto ${objetos} com 5% de desconto fica: ${objetos1}`)
 

// c).................................................................................................




