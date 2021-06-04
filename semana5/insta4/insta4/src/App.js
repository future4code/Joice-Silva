import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';



const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        
        <Post
          nomeUsuario={'Maria Júlia'}
          fotoUsuario={'https://thumbs.dreamstime.com/z/menina-do-avatar-em-red-hat-88372191.jpg'}
          fotoPost={'https://img.elo7.com.br/product/zoom/3249FFD/quadro-decorativo-natureza-paisagem-mar-sol-coqueiro-ponte-quadro-belezas-naturais.jpg'}
        />

        <Post
          nomeUsuario={'Maria Eduarda'}
          fotoUsuario={'https://thumbs.dreamstime.com/z/menina-do-avatar-com-curva-amarela-94306280.jpg'}
          fotoPost={'https://static.escolakids.uol.com.br/2019/07/paisagem-natural.jpg'}
        />
        
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        

      </MainContainer>
    );
  }
}

export default App;
