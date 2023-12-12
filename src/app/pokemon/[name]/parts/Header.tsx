'use client';
import { useRouter } from 'next/navigation';

import { ArrowBack } from 'components/ArrowBack';
import PokeBall from 'components/PokeBall';

type Props = {
  name: string;
  id: number;
};

export const Header = ({ name, id }: Props) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div className="p-5 md:max-w-3xl mx-auto w-full relative">
      <PokeBall
        opacity={0.2}
        className="absolute top-6 right-14 scale-125 z-0"
      />
      <div className="flex items-center">
        <nav>
          <button onClick={goBack}>
            <ArrowBack className="scale-125" />
          </button>
        </nav>

        <div className="flex justify-between w-full items-center text-white tracking-wider">
          <h1 className="capitalize ml-3 text-3xl font-bold">{name}</h1>
          <strong className="text-xl">#{id.toString().padStart(3, '0')}</strong>
        </div>
      </div>
    </div>
  );
};
