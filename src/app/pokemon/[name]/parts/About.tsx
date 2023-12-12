import { formatterNumber } from 'utils/number';

type Props = {
  pokeColor: string;
  weight: number;
  height: number;
  moves: string;
};

const Details = ({
  characteristic,
  value,
}: {
  characteristic: string;
  value: string | number;
}) => (
  <div className="flex flex-col gap-3 items-center bg-red capitalize">
    <strong className="text-md tracking-wide">{value}</strong>
    <p className="text-gray-600 text-sm">{characteristic}</p>
  </div>
);

export const About = ({ pokeColor, weight, height, moves }: Props) => {
  const weightFormat = `${formatterNumber(weight)} kg`;
  const heightFormat = `${formatterNumber(height)} m`;

  return (
    <div className="w-full px-6 max-w-[300px] mx-auto mt-10">
      <strong
        className="text-center text-xl mx-auto block w-full mb-4 mt-5"
        style={{ color: pokeColor }}
      >
        Detalles
      </strong>

      <div className="flex justify-between">
        <Details characteristic="Peso" value={weightFormat} />
        <div className="w-[2px] bg-gray-300 h-14" />
        <Details characteristic="Altura" value={heightFormat} />
        <div className="w-[2px] bg-gray-300 h-14" />
        {moves.length > 1 && (
          <Details characteristic="Movimientos" value={moves} />
        )}
      </div>
    </div>
  );
};
