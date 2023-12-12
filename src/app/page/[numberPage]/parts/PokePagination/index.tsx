'use client';

import { PaginationButton } from './PaginationButton';
import { Next } from './Next';
import { Previous } from './Previous';

import { usePagination } from 'hooks/usePagination';
import { useRouter } from 'next/navigation';

/**
 * Props for the PokePagination component.
 */
type Props = {
  count: number;
};

export const PokePagination = ({ count }: Props) => {
  const { currentPage, totalPages, handleNext, handlePrevious, pages } =
    usePagination(count);
  const router = useRouter();

  return (
    <div className="w-full my-4">
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="gap-3 flex sm:flex-1 items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Mostrando <span className="font-medium">{currentPage} </span> de{' '}
              <span className="font-medium">{totalPages} </span>
              resultados
            </p>
          </div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <Previous onPress={handlePrevious} />

              {pages.map((i) => (
                <PaginationButton
                  id={i.toString()}
                  key={i}
                  isCurrent={i === currentPage}
                  onPress={() => router.push(`/page/${i}`)}
                >
                  {i}
                </PaginationButton>
              ))}

              <Next onPress={handleNext} />
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
