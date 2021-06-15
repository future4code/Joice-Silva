import React from 'react'
import './App.css';
import axios from 'axios';



const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
const headers = {
  Authorization: "joice-silva-molina"
};

export default class App extends React.Component {
  state = {
    nome: "",
    email: "",
    login: []
  }
  render() {
    return(
      <div></div>
    )
  }
} 
  

