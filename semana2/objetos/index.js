//.............exemplos........

/*const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

*/

/*

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

*/

/*
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

*/

/*

1° - **Exercícios de escrita de código**
    1. Resolva os passos a seguir: 

        a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:** 

        ```jsx
        // Exemplo de entrada
        const pessoa = {
           nome: "Amanda", 
           apelidos: ["Amandinha", "Mandinha", "Mandi"]
        }

        // Exemplo de saída
        "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"
        

 */

 const pessoa = {
     nome: "JOICE",
     apelidos: ["joy", "Joicinha", "ou, Jô"],
 }

 function sobreMim(pessoa) {
     console.log(`Olá eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}.`)
    }

    const novaPessoa = {
        ...pessoa,

    }

    sobreMim(novaPessoa)
    sobreMim(pessoa)

    // ....................................................


   // 2. Resolva os passos a seguir: 

    /*
    a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

    b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

    1. O valor de `nome`
    2. O numero de caracteres do valor `nome`
    3. O valor de `idade`
    4. O valor de `profissão`
    5. O numero de caracteres do valor `profissão`
    - Exemplo

        
        const pessoa = {
        	nome: "Bruno", 
          idade: 23, 
        	profissao: "Instrutor"
        }

        minhaFuncao(pessoa)

        // Retorno: ["Bruno", 5, 23, "Instrutor", 9]

        */

        const informacoes = {
            nome: "Maria Alice", 
            idade: 25,
        	profissao: "Arquiteta",
        }

        const novaIformacoes = {
            nome: "Maria Eduarda",
            idade: 26,
            profissao: "Verterinária"
        }

        function(informacoes) {
            
        }
           
        
            


