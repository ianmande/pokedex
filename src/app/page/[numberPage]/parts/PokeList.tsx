import { PokeCard } from 'components/PokeCard';
import { PokePagination } from 'app/page/[numberPage]/parts/PokePagination';

import { LIMIT_POKEMONS } from 'config';

import { getPokemos } from 'requests/pokeRequests';

export default async function PokeList({
  currentPage = '1',
}: {
  currentPage?: string;
}) {
  const offset = (Number(currentPage) - 1) * LIMIT_POKEMONS;
  const pokemons = await getPokemos(offset, LIMIT_POKEMONS);

  return (
    <div className="flex flex-wrap justify-center md:justify-between gap-5 mt-20 px-3">
      {pokemons.data.results?.map((pokemon) => (
        <PokeCard pokemon={pokemon} key={pokemon.name} />
      ))}
      <PokePagination count={pokemons.data.count} />
    </div>
  );
}
