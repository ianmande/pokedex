type Props = {
  children: React.ReactNode;
  isCurrent?: boolean;
  onPress: () => void;
};

export const PaginationButton = ({
  children,
  isCurrent = false,
  onPress,
}: Props) => {
  const baseClasses =
    'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:opacity-50 focus:z-20 focus:outline-offset-0';
  const currentClasses =
    'z-10 bg-poke-fire text-white focus:z-20 focus-visible:outline focus-visible:outline-2 hover:opacity-70 focus-visible:outline-offset-2 focus-visible:outline-indigo-600';

  return (
    <button
      onClick={onPress}
      className={`${baseClasses} ${isCurrent ? currentClasses : ''}`}
    >
      {children}
    </button>
  );
};
