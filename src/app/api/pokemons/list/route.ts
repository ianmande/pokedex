import { POKE_API } from 'config';
import { NextRequest } from 'next/server';
import { PokemonDetails } from 'type/pokemon';
import { response } from 'utils/response';

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  let offset = Number(searchParams.get('offset'));
  let limit = Number(searchParams.get('limit'));

  if (isNaN(offset) || isNaN(limit)) {
    return response({ message: 'Invalid request' }, 400);
  }

  let pokemonsDetails: PokemonDetails[] = [];

  const data = await fetch(
    `${POKE_API}/pokemon?offset=${offset}&limit=${limit}`,
    { next: { revalidate: 3600 } }
  );

  const pokemons = await data.json();

  for (let pokemon of pokemons.results) {
    const pokemonData = await fetch(`${pokemon.url}`, {
      next: { revalidate: 3600 },
    });

    const pokemonDetails = await pokemonData.json();
    pokemonsDetails.push(pokemonDetails);
  }

  return response(
    {
      message: 'success',
      data: {
        count: pokemons.count,
        results: pokemonsDetails,
      },
    },
    200
  );
}
