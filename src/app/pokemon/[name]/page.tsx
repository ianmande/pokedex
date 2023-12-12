import { Suspense } from 'react';

import PokemonsDetails from './parts/PokemonsDetails';
import { Loading } from './parts/Loading';

export default function Page({ params }: { params: { name: string } }) {
  return (
    <Suspense fallback={<Loading />}>
      <PokemonsDetails name={params.name} />
    </Suspense>
  );
}
