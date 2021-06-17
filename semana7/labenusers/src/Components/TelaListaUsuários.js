import React from "react"
import axios from "axios"
import styled from "styled-components"

const CardUsuario = styled.div`
  display: grid;
  justify-content: center;
 
  
`

const ContainerMain = styled.div`
display: grid;
max-width: 700px;
margin: 0 auto;
height: 600px;
background-color: black;
color: white; 
  
  
`

const TopCards = styled.h2`
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: large;
  width: 300px;
  height: 20px;
  background-color: blue;
  border: solid 2px blue;
  color: white; 
  margin-top: auto 0;
  margin: 10px auto 0 auto;
  padding: 7px;

  
`
const button = styled.div`
max-width: 20px;

`
const Usuarios = styled.div`
display: grid;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-size: large;
  width: 300px;
  height: 20px;
  margin-top: auto 0;
  margin: 10px auto 0 auto;
  padding: 7px;
color: black;
background-color: white;
border: solid 1px white;

`
const deletar = styled.div`
 display: grid;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-size: large;
  width: 5px;
  height: 5px;
  margin-top: auto 0;
  margin: 5px auto 0 auto;
  padding: 7px;
color: black;
background-color: red;
border: solid 1px white;
`




export default class TelaListaUsuarios extends React.Component {
    state = {
        usuarios: []
    }

    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = async() => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
         axios.get(url, {
             headers: {
                 Authorization: "joice-silva-molina"
             }
         }).then((res) => {
             this.setState({ usuarios: res.data })
         })
         .catch((err) => {
             alert("Ocorreu um problema, tente novamente")
         })

        try {
            const res = await axios.get(url, {
                headers: {
                    Authorization: "joice-silva-molina"
                }
            })

            this.setState({ usuarios: res.data })
        } catch (err) {
            alert("Ocorreu um problema, tente novamente")
        }
    }

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/`
        axios.delete(url, {
            headers: {
                Authorization: "joice-silva-molina"
            }
        })
            .then((res) => {
                alert("Usuário(a) deletado(a) com sucesso!")
                this.pegarUsuarios()
            })
            .catch((err) => {
                alert("Ocorreu um erro, tente novamente")
            })
    }

    render() {
        const listaUsuarios = this.state.usuarios.map((user) => {
            return (
                <CardUsuario key={user.id}>
                    {user.name}
                    <deletar><button onClick={() => this.deletarUsuario(user.id)}>X</button></deletar>
                </CardUsuario>
            )
        })

        return (
            <ContainerMain>
                <div1><button onClick={this.props.irParaCadastro}>Ir para Cadastro</button></div1>
                <TopCards>Lista</TopCards>
                <Usuarios>{'Joana'}</Usuarios>
                <Usuarios>{'Ana'}</Usuarios>
                <Usuarios>{'Eduarda'}</Usuarios>
                <Usuarios>{'Maria Eduarda'}</Usuarios>
                <Usuarios>{'João Lucas'}</Usuarios>
                <Usuarios>{'Enzo'}</Usuarios>
                <Usuarios>{'Bryan'}</Usuarios>
                <Usuarios>{'Maria Clara'}</Usuarios>
            
            </ContainerMain>
        )
    }
}