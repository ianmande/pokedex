import { PokemonContext } from 'context/PokeContext';
import { useContext } from 'react';

export const usePokemon = () => {
  const { pokemonData, setPokemonData } = useContext(PokemonContext);

  return { pokemonData, setPokemonData };
};
