import React, { useState } from "react";
import axios from "axios";


    

  
  const PokeCard = () => {
   
    const [pokeList, setpokeList] = useState(false);
    const [numberOfpokeLists, setnumberOfpokeLists ] = useState(0)
  }

  
  const onClickList = () => {
    
    if (pokeList) {
      setpokeList(false);
      setnumberOfpokeLists(0)
    } else {
      setpokeList(true);
      setnumberOfpokeLists(150)
    }
  };

  // função que bate na poke API com um nome específico de pokemon
  // Isso permite que consigamos pegar as infos dos pokemons.
  // Nos métodos de ciclo de vida, ela é chamada passando como
  // parâmetro o nome de pokemon que está chegando como props.
  pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        // guarda as infos do pokemon no estado
        setpokeName(response.data.name);
      })
      .catch(err => {
        console.log(err);
      });
  }, [pokeName]);

  const pokeName = (event) => {
    setpokeName(event.target.value);
  };

  return (
    <div>
      <p>{pokemon.name}</p>
      <p>{pokemon.weight} Kg</p>
      {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </div>
  );
}

export default PokeCard;

