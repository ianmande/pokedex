'use client';
import { useEffect, useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import { PokeLoading } from 'components/PokeLoading';
import { getPokemonByName } from 'requests/pokeRequests';
import { PokeCard } from 'components/PokeCard';
import { PokemonDetails } from 'type/pokemon';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

type Props = {
  search: string;
};

export const PokeSearch = ({ search }: Props) => {
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const { replace } = useRouter();

  const getSearch = useCallback(async () => {
    try {
      const pokemon = await getPokemonByName(search.toLocaleLowerCase());
      setPokemon(pokemon.data);
    } catch (e) {
      params.set('search', '');
      replace(`${pathname}?${params.toString()}`);

      toast.error('No se encontró el pokémon');
    }
  }, [search]);

  useEffect(() => {
    getSearch();
  }, [search]);

  return (
    <div className="flex flex-wrap justify-between gap-5 mt-20 px-5">
      {pokemon ? <PokeCard pokemon={pokemon} /> : <PokeLoading />}
    </div>
  );
};
