'use client';
import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { PokemonDetails } from 'type/pokemon';

interface PokeContextProps {
  pokemons: PokemonDetails[];
  addPokemon: Dispatch<SetStateAction<PokemonDetails[]>>;
}

export const PokeContext = createContext<PokeContextProps>({
  pokemons: [],
  addPokemon: () => {},
});

export const PokeProvider = ({ children }: { children: React.ReactNode }) => {
  const [pokemons, setPokemons] = useState<PokemonDetails[]>([]);

  return (
    <PokeContext.Provider value={{ pokemons, addPokemon: setPokemons }}>
      {children}
    </PokeContext.Provider>
  );
};
