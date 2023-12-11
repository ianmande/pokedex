import React from 'react';

type Props = {
  name: string;
  score?: number | string;
};

export const PokeSkill = ({ name, score = 0 }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className="flex justify-center items-center w-10 h-10 rounded-full border-4
       border-black"
      >
        {score}
      </div>
      <p className="block mt-1 text-sm">{name}</p>
    </div>
  );
};
