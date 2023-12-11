import { Suspense } from 'react';
import dynamic from 'next/dynamic';

import { Navbar } from 'components/NavBar';
import { SearchBar } from 'components/SearchBar';

import PokeList from './parts/PokeList';

const WithoutAuth = dynamic(() => import('../components/WithoutAuth'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <div className="max-w-screen-xl w-full mx-auto">
        <SearchBar />

        <Suspense fallback={<h1>Cargando...</h1>}>
          <PokeList />
        </Suspense>
      </div>

      <WithoutAuth />
    </main>
  );
}
