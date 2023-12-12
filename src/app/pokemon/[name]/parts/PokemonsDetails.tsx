import { getPokemonByName } from 'requests/pokeRequests';
import { PokeColors } from 'styles/pokeColors';

import { PokeBackground } from './PokeBackground';
import { Header } from './Header';
import { Body } from './Body';

export default async function PokemonsDetails({ name }: { name: string }) {
  const response = await getPokemonByName(name);

  const pokemon = response.data;

  const pokeBg = PokeColors[pokemon.types[0].type.name];

  return (
    <PokeBackground background={pokeBg}>
      <Header name={pokemon.name} id={pokemon.id} />
      <Body pokemon={pokemon} pokeColor={pokeBg} />
    </PokeBackground>
  );
}
