import React from 'react'
import AddPlaylists from './Components/AddPlaylists';
import ListaPlaylists from './Components/ListaPlaylists';



export default class App extends React.Component {
  state = {
     telaAtual:"AddPlaylists"
  }

  escolheTela = () => {
    switch (this.state.telaAtual){
      case "AddPlaylists":
        return <AddPlaylists irParaListaPlaylists={this.irParaListaPlaylists}/>
      case "ListaPlaylists":
        return <ListaPlaylists irParaAddPlaylists={this.irParaAddPlaylists}/>
      default:
        return <div>Erro! Página não encontrada :(</div>
    }
  }

  irParaAddPlaylists = () => {
    this.setState( {telaAtual: "AddPlaylists"})

  }

  irParaListaPlaylists = () => {
    this.setState( {telaAtual: "ListaPlaylists"})

  }

  render() {
    return (
      <div>
        {this.escolheTela()}
        
      </div>

        
    )
  }
} 
