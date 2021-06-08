import React from 'react';
import styled from 'styled-components'




const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export default class App extends React.Component {
  render() {
    return (
      <MainContainer>
        
        <Post
          nomeUsuario={'Labenu Forms'}
          fotoUsuario={'https://m.facebook.com/388131481831991/photos/a.388131531831986/575260359785768/?type=3'}
          
        />

        

      </MainContainer>
    );
  }
}