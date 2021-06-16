import React from 'react'
import './App.css';
import axios from 'axios';
import Button from '../src/Components/Button'
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    
    
  }

  Container {
  display: flex;

  align-items: center;

  margin: 20px;
  font-size: large;
  
 
  }

  container2{
    align-items: center;
    
    margin: 100px;
  }
  
  
`;

const AppContainer = styled.div`
  display: flex;
  background-color: white;
  
  border: solid 3px;
  max-width: 300px;
  padding: 40px;
  
  margin: 120px auto 0 ;
`;




const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
const headers = {
  Authorization: "joice-silva-molina"
};

export default class App extends React.Component {
  state = {
    nome: "",
    email: "",
    Button: "", 
  }
  render() {
    return (
      <AppContainer>
        
        <GlobalStyle/>

        <form>
          <div1>
          
            <container>Nome: 
            <input for ="" type="text" value=""/>
            </container>

          
            <container>E-mail: 
            <input for="" type="text" value=""/>
            </container>
          
          

         
            <container2>
            <input type="submit" value="Salvar" />
            </container2>

          </div1>
            
        </form>

      </AppContainer>

        
    );
  }
} 
  

