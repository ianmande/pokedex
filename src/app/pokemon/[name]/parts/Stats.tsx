import { ProgressBar } from 'components/ProgressBar';
import { PokemonDetails } from 'type/pokemon';

type Props = {
  pokeColor: string;
  stats: PokemonDetails['stats'];
};

export const Stats = ({ pokeColor, stats }: Props) => {
  return (
    <div className="mt-32 w-full px-16 ">
      <strong
        className="text-center text-xl mx-auto block w-full mb-4 mt-5"
        style={{ color: pokeColor }}
      >
        Stats Base
      </strong>

      {stats.map(({ base_stat, stat }) => (
        <ProgressBar
          pokeColor={pokeColor}
          abilityPoints={base_stat}
          ability={stat.name}
          key={stat.name}
        />
      ))}
    </div>
  );
};
