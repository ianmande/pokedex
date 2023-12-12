import React, { createContext, useState } from 'react';
import { PokemonDetails } from 'type/pokemon';

const initialPokemonData: PokemonDetails | undefined = undefined;

export const PokemonContext = createContext<{
  pokemonData: PokemonDetails | undefined;
  setPokemonData: React.Dispatch<
    React.SetStateAction<PokemonDetails | undefined>
  >;
}>({
  pokemonData: initialPokemonData,
  setPokemonData: () => {},
});

export const PokemonProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [pokemonData, setPokemonData] = useState<PokemonDetails | undefined>(
    initialPokemonData
  );

  return (
    <PokemonContext.Provider value={{ pokemonData, setPokemonData }}>
      {children}
    </PokemonContext.Provider>
  );
};
