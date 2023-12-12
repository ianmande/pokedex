import { PokeColors } from 'styles/pokeColors';

/**
 * Represents a Pokemon with its name and URL.
 * @interface
 * @property {string} name - The name of the Pokemon.
 * @property {string} url - The URL of the Pokemon.
 */
export interface Pokemon {
  name: string;
  url: string;
}

/**
 * Represents the details of a Pokemon, including its ID, name, height, weight, abilities, types, sprites, moves, and stats.
 * @interface
 * @property {number} id - The ID of the Pokemon.
 * @property {string} name - The name of the Pokemon.
 * @property {number} height - The height of the Pokemon.
 * @property {number} weight - The weight of the Pokemon.
 * @property {Object[]} abilities - The abilities of the Pokemon.
 * @property {Object[]} types - The types of the Pokemon.
 * @property {Object} sprites - The sprites of the Pokemon.
 * @property {Object[]} moves - The moves of the Pokemon.
 * @property {Object[]} stats - The stats of the Pokemon.
 */
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

/**
 * Represents a pagination response, including the count and results.
 * @interface
 * @property {Object} data - The data of the response.
 * @property {number} data.count - The count of the response.
 * @property {PokemonDetails[]} data.results - The results of the response.
 */
export interface PaginationResponse {
  data: {
    count: number;
    results: PokemonDetails[];
  };
}
