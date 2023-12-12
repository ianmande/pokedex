import { useCallback } from 'react';
import {
  usePathname,
  useSearchParams,
  useRouter,
  useParams,
} from 'next/navigation';

import { LIMIT_POKEMONS, PAGES_TO_SHOW } from 'config';

/**
 * The number of pages to show in the pagination component.
 */
const pagesToShow = PAGES_TO_SHOW;

const limit = LIMIT_POKEMONS;

/**
 * Calculates the initial page based on the total number of pages and the current page.
 * @param totalPages - The total number of pages.
 * @param currentPage - The current page.
 * @returns The initial page.
 */
const calculateInitialPage = (totalPages: number, currentPage: number) => {
  if (totalPages <= pagesToShow || currentPage <= 2) {
    return 1;
  } else if (totalPages - currentPage < pagesToShow - 1) {
    return totalPages - pagesToShow + 1;
  } else {
    return currentPage - 1;
  }
};

export const usePagination = (count: number) => {
  const routeParams = useParams();
  const { push } = useRouter();

  const currentPage = Number(routeParams?.numberPage) || 1;

  const setCurrentPage = (currentPage: number) => {
    const page = String(currentPage);

    push(`${page}`);
  };

  const totalPages = Math.ceil(count / limit);

  const handlePrevious = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [currentPage, setCurrentPage]);

  const handleNext = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }, [currentPage, totalPages]);

  const initialPage = calculateInitialPage(totalPages, currentPage);

  const pages = Array.from(
    { length: Math.min(totalPages, pagesToShow) },
    (_, i) => i + initialPage
  );

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    handlePrevious,
    handleNext,
    pages,
  };
};
