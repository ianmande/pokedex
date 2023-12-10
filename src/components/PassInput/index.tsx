'use client';

import Image from 'next/image';
import { useCallback, useState } from 'react';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import eyeOpen from '../../../public/images/eye-open.png';
import eyeClose from '../../../public/images/eye-close.png';

type Props = {
  label: string;
  placeholder: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

function PassInput({ label, placeholder, ...rest }: Props) {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const handleEyeClick = useCallback(() => {
    setIsPasswordHidden(!isPasswordHidden);
  }, [isPasswordHidden]);

  return (
    <div className="mt-5 ">
      <label
        htmlFor={label}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={label}
          type={isPasswordHidden ? 'password' : 'text'}
          className="bg-green-50 border text-sm rounded-lg block w-full p-2.5"
          placeholder={placeholder}
          {...rest}
        />

        <Image
          onClick={handleEyeClick}
          src={isPasswordHidden ? eyeClose : eyeOpen}
          alt="toggle visibility"
          className="absolute inset-y-2.5 right-0 pr-3 flex items-center cursor-pointer"
          width={35}
          height={35}
        />
      </div>
    </div>
  );
}

export default PassInput;
