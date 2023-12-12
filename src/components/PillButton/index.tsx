import { PokeColors } from 'styles/pokeColors';

export const PillButton = ({ type }: { type: keyof typeof PokeColors }) => {
  const background = PokeColors[type];

  return (
    <div
      className="px-3 py-1  rounded-2xl w-24 text-center"
      style={{ background }}
    >
      <span className="capitalize text-white mx-auto">{type}</span>
    </div>
  );
};
