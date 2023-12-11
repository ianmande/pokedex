'use client';
import Image from 'next/image';

import MagnifyingGlass from '../../../public/magnifying-glass.svg';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export const SearchBar = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const { replace } = useRouter();

  const search = params.get('search') ?? '';

  const handleSearch = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const terms = e.target.value;

      if (terms) {
        params.set('search', terms);
      } else {
        params.delete('search');
      }

      replace(`${pathname}?${params.toString()}`);
    },
    300
  );

  return (
    <div className="w-full mt-24">
      <div className="flex w-full gap-1 justify-between p-5 rounded-3xl shadow-xl bg-[#F2F2F2]">
        <label htmlFor="default-search">
          <div className="inset-y-0 start-0 flex items-center ps-3 pointer-events-none ml-1 left-8">
            <Image src={MagnifyingGlass} alt="icon glass" width={25} />
          </div>
        </label>
        <input
          type="search"
          id="default-search"
          className="block w-full px-3 text-base text-gray-95 bg-[#F2F2F2] focus:outline-none"
          placeholder="Encuentra tu pokémon..."
          onChange={handleSearch}
          defaultValue={String(search)}
        />
      </div>
    </div>
  );
};
