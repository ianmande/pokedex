import React from 'react';

type Props = {
  background: string;
  children: React.ReactNode;
};

export const PokeBackground = ({ background, children }: Props) => {
  return (
    <main className="min-h-screen relative p-2 grid" style={{ background }}>
      {children}
    </main>
  );
};
