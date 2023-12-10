import Image from 'next/image';

import pokedex from '../../../../public/images/pokedex.png';
import linkeding from '../../../../public/images/icon-linkeding.svg';
import github from '../../../../public/images/icons-github.svg';

function Footer() {
  return (
    <div className="self-center place-items-center grid md:block ">
      <div className="flex gap-2 items-center m-5">
        <Image src={pokedex} alt="icon de pokedex" width={40} height={40} />
        <h2 className="font-source text-md text-white">
          Hecho con poke cariño -
        </h2>

        <Image
          src={linkeding}
          width={20}
          alt="icon de la red social linkeding"
        />
        <Image src={github} width={20} alt="icon de la red social github" />
      </div>
    </div>
  );
}

export default Footer;
