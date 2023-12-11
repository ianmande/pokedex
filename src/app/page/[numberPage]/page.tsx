import { Suspense } from 'react';
import dynamic from 'next/dynamic';

import { Navbar } from 'components/NavBar';
import { SearchBar } from 'components/SearchBar';

import { PokeSearch } from 'components/PokeSearch';
import { PokeLoading } from 'components/PokeLoading';
import PokeList from 'app/page/[numberPage]/parts/PokeList';

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
          <PokeList currentPage={params.numberPage} />
        )}
      </div>
      <WithoutAuth />
    </main>
  );
}
