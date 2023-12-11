import { PokeCard } from 'components/PokeCard';
import { PokePagination } from 'components/PokePagination';

import { getPokemos } from 'requests/pokeRequests';

export default async function PokeList() {
  const pokemons = await getPokemos();

  return (
    <div className="flex flex-wrap justify-between gap-5 mt-20">
      {pokemons.data.results?.map((pokemon) => (
        <PokeCard pokemon={pokemon} key={pokemon.name} />
      ))}
      <PokePagination count={pokemons.data.count} />
    </div>
  );
}
