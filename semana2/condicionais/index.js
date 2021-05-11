//...............Exercícios de escrita de código......................

/*
1. Faça um programa que pergunta ao usuário qual a idade dele e
 imprima no console se ele/ela pode dirigir (apenas maiores de idade).

a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim,
 imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."

 */
// .........................................................................................

const podeDirigir = () => {
    const idade = Number(prompt("Qual sua idade?"))

    if(idade >= 18) {
        console.log("Pode")
    } else {
        console.log("Não pode")

    }
}

 podeDirigir()

 //..............................................................................................

/*
 2. Agora faça um programa que verifica que turno do dia um aluno estuda. 
 Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno).
  Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!".
  Utilize o bloco if/else

*/

const qualTurnoEstuda = () => {
    const turno = prompt("Digite o seu turno: M, V, ou, N").toLocaleLowerCase()

    if(turno === M) {
        console.log("Bom Dia !")
    } else if (turno === V) {
        console.log("Boa Tarde !")

    } else if (turno === N) {
        console.log("Boa Noite !")
    }
}

 qualTurnoEstuda()

 //................................................................................

 /*
 3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.
 - 💡 Dica

    Lembre-se que o switch case é como se fosse um if, mas ele verifica 
    APENAS IGUALDADES ESTRITAS (`===`)

    */
    const TurnoQueEstuda = () => {
        switch (turno.estuda) {
            case "Matutino":
                console.log("Bom Dia !")
                break
            case "Vespertino":     
                console.log("Boa Tarde !")
                break
            case "Noturno":    
                console.log("Boa Noite !")
                break
            default:
                console.log("Erro")
        }
    }
    
     const cumprimenta = TurnoQueEstuda()
     console.log(cumprimenta)
