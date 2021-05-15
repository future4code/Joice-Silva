/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log("Bem vindo ao jogo de Blackjack!")

    let jogo = confirm("Quer iniciar uma nova rodada?")

    if (jogo) {
       let carta1Usuario = comprarCarta()
       let carta2Usuario = comprarCarta()
       let carta1Pc = comprarCarta()
       let carta2Pc = comprarCarta()

       let pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor
       let pontuacaoPc = carta1Pc.valor + carta2Pc.valor

       console.log(`Usuário - Cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} = ${pontuacaoUsuario}`)
       console.log(`Computador - Cartas: ${carta1Pc.texto} ${carta2Pc.texto} = ${pontuacaoPc}`)

       if (pontuacaoUsuario > pontuacaoPc) {
         console.log("usuario ganhou!")
      } else if (pontuacaoPc < pontuacaoUsuario) {
         console.log("O computador ganhou!")
      } else {
         console.log("Empate!")
      }

    } else {
       console.log("O jogo acabou")
    }
    
    
    
    
    
    
    
    
    
    
    
     /*const cartaUsuario = comprarCarta()
    const cartaPc = comprarCarta()*/
      // o que fazer se o usuário clicar "ok"
     /* console.log(`Usuario - Cartas:`, cartaUsuario.texto, `Pontuação`, cartaUsuario.valor)
      console.log(`Computador - Cartas:`, cartaPc.texto, `Pontuação`, cartaPc.valor)
   } else {
      // o que fazer se o usuário clicar "cancelar"
      console.log("O jogo acabou")
   }

   somaDeJogadores = (cartaUsuario, cartaPc) => {
      const somaUsuario = Number(cartaUsuario.valor) + Number(cartaPc.valor)
      console.log(`A soma das cartas do jogador foi ${somaUsuario}`)
      console.log(`A soma das cartas do computador foi ${somaUsuario}`)
      if (somaUsuario > somaPc) {
         console.log("usuario ganhou!")
      } else if (somaUsuario < somaPc) {
         console.log("O computador ganhou!")
      } else {
         console.log("Empate!")
      }
   }
   somaDeJogadores(cartaUsuario, cartaPc)


 /*  const Carta = comprarCarta(); 
// Sorteia uma carta. Por exemplo, o rei de ouros
   function(K♦️) {
      return 

   }

console.log(carta.texto) 
// imprime o texto da carta. Nesse caso: "K♦️"

console.log(carta.valor) 
// imprime o valor da carta (um número). Nesse caso: 10

*/