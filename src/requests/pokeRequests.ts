import { PaginationResponse, PokemonDetails } from 'type/pokemon';
import { pokeService } from 'utils/api';

export const getPokemos = async (offset = 0, limit = 12) =>
  await pokeService.get<PaginationResponse>(
    `list?offset=${offset}&limit=${limit}`
  );

export const getPokemonByName = async (name: string) =>
  await pokeService.get<{ data: PokemonDetails }>(`by-name?name=${name}`);
