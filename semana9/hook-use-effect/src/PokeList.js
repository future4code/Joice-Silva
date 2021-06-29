import React, { useState } from "react";
import "./index.css";
import axios from "axios";
import PokeCard from "./components/PokeCard";

const App = () => {
  
  const [pokeList] = useState([])
  

  // método que roda após a montagem do componente
  const pokeList = () => {
    // função axios que está batendo na API e buscando 151 pokemons
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        // função que está setando no estado os 151 pokemons
        setpokeList(response.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const pegaPokemon = (event) => {
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

