import { Suspense } from 'react';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

import { Navbar } from 'components/NavBar';
import { SearchBar } from 'components/SearchBar';

import PokeList from 'app/page/[numberPage]/parts/PokeList';

import { PokeSearch } from 'components/PokeSearch';
import { LoadingSpinner } from './parts/LoadingSpinner';

const WithoutAuth = dynamic(() => import('../../../components/WithoutAuth'), {
  ssr: false,
});

export default async function Page({
  searchParams,
  params,
}: {
  searchParams: { search: string; page: string };
  params: { numberPage: string };
}) {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <div className="max-w-screen-xl w-full mx-auto">
        <SearchBar />

        {searchParams.search ? (
          <PokeSearch search={searchParams.search} />
        ) : (
          <Suspense fallback={<LoadingSpinner />}>
            <PokeList currentPage={params.numberPage} />
          </Suspense>
        )}
      </div>
      <WithoutAuth />
    </main>
  );
}
