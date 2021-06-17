import React from 'react'
import axios from 'axios'
import styled from "styled-components"

const Container = styled.div`
display: grid;
max-width: 700px;
margin: 0 auto;
height: 300px;
background-color: black;
color: white; 
    
`
const Text = styled.h2`
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: large;
    width: 300px;
    height: 40px;
    margin: 0 auto;
    background-color: blue;
    border: solid 2px blue;
    color: white;
    
    
    
    
`
const Email = styled.div`
display: grid;

flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: large;
  width: 695px;
  height: 20px;
  
    
    
`
const button = styled.button`
max-width: 20px;
`

export default class TelaCadastro extends React.Component {
  state = {
      nome: "",
      email: ""
  }

  handleNome = (event) => {
      this.setState( {nome: event.target.value})
  }

  handleEmail = (event) => {
    this.setState( {email: event.target.value})
}

fazerCadastro = (event) => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
        nome: this.state.nome,
        email:this.state.email
    }
    axios.post(url, body, {
        headers: {
            Authorization: "joice-silva-molina"
        }
    })
    .then((res)=> {
        alert("Usuário(a) cadastrado(a) com sucesso!")
        this.setState( {nome: "", email: ""})
    })
    .catch((err)=> {
        alert(err.response.data.message)
        
    })
}

  render() {
    return (
        <Container>
        <div><button onClick={this.props.irParaLista}>Ir para Lista de Usuários</button> </div> 
        <Text>Cadastro de Usuários</Text>
        
        <Email>
        <input 
            placeholder={"nome"}
            value={this.state.nome}
            onChange={this.handleNome}
        />
        </Email>
        <Email>
        <input 
            placeholder={"E-mail"}
            value={this.state.email}
            onChange={this.handleEmail}
        />
        </Email>
        <Email>
        <button onClick={this.fazerCadastro}>Cadastrar</button>
        </Email>
        </Container>
        
      

        
    );
  }
}

