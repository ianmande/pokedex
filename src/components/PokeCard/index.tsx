import PokeBall from 'components/PokeBall';
import { PokeSkill } from 'components/PokeSkill';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { KarlFont } from 'styles/fonts';
import { PokeColors } from 'styles/pokeColors';

import { PokemonDetails } from 'type/pokemon';

type Props = {
  pokemon: PokemonDetails;
};

export const PokeCard = ({ pokemon }: Props) => {
  const type = pokemon.types[0].type.name;
  const bgColor = PokeColors[type];

  const attack = pokemon.stats.find((stat) => stat.stat.name === 'attack');
  const defense = pokemon.stats.find((stat) => stat.stat.name === 'defense');

  const srcImage =
    pokemon.sprites.other['official-artwork'].front_default ||
    pokemon.sprites.front_default;

  return (
    <Link
      href={`/pokemon/${pokemon.name}`}
      className="w-full grid grid-cols-3 max-w-md md:max-w-sm h-44 overflow-hidden rounded-lg shadow-lg my-2 bg-[#F6F7F9] "
    >
      <div className="px-1 py-3 grid">
        <h1
          className={`capitalize text-lg font-bold tracking-wide mb-2 ${KarlFont.className}`}
        >
          {pokemon.name}
        </h1>
        <div className="flex gap-3 ">
          <PokeSkill name={'Ataque'} score={attack?.base_stat} />
          <PokeSkill name={'Defensa'} score={defense?.base_stat} />
        </div>

        <div className="text-xs text-poke-fire">
          {pokemon.moves[0]?.move.name && <p>#{pokemon.moves[0]?.move.name}</p>}
          {pokemon.moves[1]?.move.name && (
            <p> #{pokemon.moves[1]?.move.name}</p>
          )}
        </div>
      </div>

      <div
        className="relative col-span-2 grid items-center-center h-full justify-end overflow-hidden px-4"
        style={{ backgroundColor: bgColor }}
      >
        <PokeBall
          opacity={0.15}
          className="absolute rotate-12 top-0 right-20 scale-75 z-0"
        />
        <Image
          src={srcImage}
          width={160}
          height={120}
          alt={pokemon.name}
          className="w-100 object-contain my-auto relative z-10"
        />
      </div>
    </Link>
  );
};
