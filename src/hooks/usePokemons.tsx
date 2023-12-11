import { PokeContext } from 'context/pokeContext';
import { useContext } from 'react';
import { getAllPokemon } from 'requests/pokeRequests';

export const usePokemon = () => {
  const { addPokemon, pokemons } = useContext(PokeContext);

  const getPokemons = async () => {
    const newListPokemons = await getAllPokemon();

    addPokemon(newListPokemons);
  };

  return { getPokemons, addPokemon, pokemons };
};
