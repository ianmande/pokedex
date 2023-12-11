'use client';
import { AppLogo } from 'components/AppLogo';
import { SearchBar } from 'components/SearchBar';
import { AUTH_KEY_NAME } from 'config';
import { useRouter } from 'next/navigation';
import { removeItemLocal } from 'utils/storage';

export const Navbar = () => {
  const route = useRouter();

  const singOut = () => {
    route.push('/login');
    removeItemLocal(AUTH_KEY_NAME);
  };

  return (
    <nav className="border-gray-200 bg-poke-fire">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <AppLogo />

        <div
          className="flex items-center justify-center gap-5"
          id="navbar-default"
        >
          <button
            onClick={singOut}
            className="grid self-center justify-center py-2 px-3 text-white cursor-pointer text-lg rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
};
