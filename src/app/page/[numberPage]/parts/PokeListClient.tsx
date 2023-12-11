'use client';
import { useState, useEffect } from 'react';
import { PokeCard } from 'components/PokeCard';
import { PokePagination } from 'app/page/[numberPage]/parts/PokePagination';

import { LIMIT_POKEMONS } from 'config';

import { getPokemos } from 'requests/pokeRequests';
import { PokeLoading } from 'components/PokeLoading';
import { PaginationResponse } from 'type/pokemon';

export default function PokeList({
  currentPage = '1',
}: {
  currentPage?: string;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemons, setPokemons] = useState<PaginationResponse | null>(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      setIsLoading(true);
      const offset = (Number(currentPage) - 1) * LIMIT_POKEMONS;
      const data = await getPokemos(offset, LIMIT_POKEMONS);
      setPokemons(data);
      setIsLoading(false);
    };

    fetchPokemons();
  }, [currentPage]);

  if (isLoading || !pokemons) {
    return (
      <div className="flex justify-center mt-20 px-3">
        <PokeLoading />
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center md:justify-between gap-5 mt-20 px-3">
      {pokemons.data.results?.map((pokemon) => (
        <PokeCard pokemon={pokemon} key={pokemon.name} />
      ))}
      <PokePagination count={pokemons.data.count} />
    </div>
  );
}
