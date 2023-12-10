import Image from 'next/image';

import pokePicture from '../../../../public/images/pokeball.png';

function AppName() {
  return (
    <div className="origin-bottom rotate-90 absolute top-16 -left-20">
      <h1 className="flex items-center text-white text-2xl md:text-3xl font-source tracking-widest ">
        <Image src={pokePicture} alt="pokeball white" width={45} height={45} />
        POKEDEX
      </h1>
    </div>
  );
}

export default AppName;
