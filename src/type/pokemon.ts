import { PokeColors } from 'styles/pokeColors';

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: {
    ability: {
      name: string;
    };
  }[];
  types: {
    type: {
      name: keyof typeof PokeColors;
    };
  }[];
  sprites: {
    front_default: string;
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  moves: {
    move: {
      name: string;
      url: string;
    };
  }[];
  stats: {
    base_stat: number;
    effort: number;
    stat: Pokemon;
  }[];
}

export interface PaginationResponse {
  data: {
    count: number;

    results: PokemonDetails[];
  };
}
