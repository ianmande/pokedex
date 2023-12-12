import Image from 'next/image';

import { PillButton } from 'components/PillButton';

import { About } from './About';

import { PokemonDetails } from 'type/pokemon';
import { Stats } from './Stats';

type Props = {
  pokemon: PokemonDetails;
  pokeColor: string;
};

export const Body = ({ pokemon, pokeColor }: Props) => {
  const srcImage =
    pokemon.sprites.other['official-artwork'].front_default ||
    pokemon.sprites.front_default;

  const moves = `${pokemon.moves[0]?.move.name.replace('-', ' ') ?? ''}`;

  return (
    <div className="h-full bg-white grid gap-4 mx-auto w-full md:max-w-3xl rounded-lg">
      <div className="-mt-32">
        <Image
          src={srcImage}
          width={300}
          height={300}
          alt={pokemon.name}
          className="object-contain my-auto relative z-10 mx-auto"
        />

        <div className="flex justify-center gap-4 my-4">
          {pokemon.types.map(({ type }) => (
            <PillButton type={type.name} key={type.name} />
          ))}
        </div>

        <About
          pokeColor={pokeColor}
          weight={pokemon.weight}
          height={pokemon.height}
          moves={moves}
        />

        <Stats pokeColor={pokeColor} stats={pokemon.stats} />
      </div>
    </div>
  );
};
