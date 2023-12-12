import Image from 'next/image';

import { PillButton } from 'components/PillButton';

import { Header } from './Header';
import { PokeBackground } from './PokeBackground';
import { About } from './About';

import { PokeColors } from 'styles/pokeColors';

import PokeLoading from '@public/images/bulbassor.png';

export const Loading = () => {
  const pokeColor = PokeColors.normal;

  return (
    <PokeBackground background={'#b6b6b6'}>
      <Header name={'cargando...'} id={0} />
      <div className="h-full bg-white grid gap-4 mx-auto w-full md:max-w-3xl rounded-lg">
        <div className="-mt-32">
          <Image
            src={PokeLoading}
            width={300}
            height={300}
            alt={'image loading'}
            className="object-contain my-auto relative z-10 mx-auto"
          />

          <div className="flex justify-center gap-4 my-4">
            <PillButton type="normal" />
            <PillButton type="normal" />
          </div>

          <About pokeColor={pokeColor} weight={0} height={0} moves={''} />
        </div>
      </div>
    </PokeBackground>
  );
};
