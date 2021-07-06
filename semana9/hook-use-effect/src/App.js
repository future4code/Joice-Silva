import React, { useState } from "react";
import "./index.css";
import axios from "axios";
import PokeCard from "./Components/PokeCard/index"


const App = () => {
  
  
  

  
  const pegaPokemon = () => {
    
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        
        setpokeList(response.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const pokeList = (event) => {
    setpokeName(event.target.value);
  };

  
  return (
    <div className="Poke-List">
      <select value={pokeName} onChange={pegaPokemon}>
          <option value={""}>Nenhum</option>
        
          {pokemons.map((pokemon) => 
            
          <div key={`${pokemon.name}-${pokemon.name}`}>
            <p>{pokemon.name}</p>
          </div>)}
        </select>
    </div>
  );

}

export default App;

