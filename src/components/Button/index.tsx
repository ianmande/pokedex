import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import PokeLoading from '../../../public/animations/poke-loading.json';
import Lottie from 'lottie-react';

type Props = {
  isLoading?: boolean;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = ({ children, isLoading = false, ...rest }: Props) => {
  return (
    <button
      type="submit"
      className="flex w-full justify-center items-center rounded-md bg-poke-fire px-3 py-3 text-md font-semibold leading-6 text-white shadow-sm hover:opacity-80 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-40"
      {...rest}
    >
      {isLoading && (
        <Lottie animationData={PokeLoading} loop={true} className="w-8" />
      )}
      {children}
    </button>
  );
};
