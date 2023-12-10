import PokeBall from 'components/PokeBall';
import { PokeColors } from 'styles/pokeColors';

export default function LoginBackground() {
  return (
    <div className="grid md:grid-cols-2 -z-10 absolute w-full h-full">
      <div className="bg-poke-bug-dark"></div>
      <div className="hidden md:block md:bg-poke-bug-smoke">
        <PokeBall
          fill={PokeColors['bug-dark']}
          opacity={0.45}
          className="absolute -right-8 -rotate-12 top-32"
        />
      </div>

      <PokeBall
        opacity={0.3}
        className="md:hidden absolute -right-16 rotate-12 bottom-32 scale-80"
      />
    </div>
  );
}
