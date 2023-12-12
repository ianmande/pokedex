import Image from 'next/image';
import Link from 'next/link';

import PokeLogo from '@public/images/poke-logo.svg';

export const AppLogo = () => {
  return (
    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <Image
        src={PokeLogo}
        className="object-cover"
        alt="Pokedex Logo"
        width={160}
      />
    </Link>
  );
};
