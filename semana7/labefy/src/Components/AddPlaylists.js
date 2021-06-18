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

export default class AddPlaylists extends React.Component {
  state = {
      nome: "",
      id: "",
      quantity: []
  }

  handleNome = (event) => {
      this.setState( {nome: event.target.value})
  }

  handleId = (event) => {
    this.setState( {id: event.target.value})
}

adicionarAddPlaylists = (event) => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {
        nome: this.state.nome,
        id:this.state.id
    }
    axios.post(url, body, {
        headers: {
            Authorization: "joice-silva-molina"
        }
    })
    .then((res)=> {
        alert("Lista cadastrada com sucesso!")
        this.setState( {nome: "", id: ""})
    })
    .catch((err)=> {
        alert(err.response.data.message)
        
    })
}

  render() {
    return (
        <Container>
        <div><button onClick={this.props.irParaListaPlaylists}>Ir para Lista de playlists</button> </div> 
        <Text>Cadastro de Play lists</Text>
        
        
        <input 
            placeholder={"nome"}
            value={this.state.nome}
            onChange={this.handleNome}
        />
        
        
        <input 
            placeholder={"id"}
            value={this.state.id}
            onChange={this.handleId}
        />
        
        
        <button onClick={this.adicionarAddPlaylists}>Adicionar</button>
        
        </Container>
    )}
}