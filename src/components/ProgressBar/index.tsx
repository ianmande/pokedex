type Props = {
  pokeColor: string;
  abilityPoints: number;
  ability: string;
};

export const ProgressBar = ({ pokeColor, ability, abilityPoints }: Props) => {
  const population = (abilityPoints * 100) / 100;

  return (
    <div className="flex w-full items-center justify-between mb-2">
      <span className="uppercase" style={{ color: pokeColor }}>
        {ability.replace('-', ' ')}
      </span>

      <div className="flex gap-3 items-center justify-center">
        <span className="uppercase">{abilityPoints}</span>
        <div className="w-96 bg-gray-200 rounded-full h-2.5">
          <div
            className="h-2.5 rounded-full"
            style={{ backgroundColor: pokeColor, width: population + '%' }}
          />
        </div>
      </div>
    </div>
  );
};
