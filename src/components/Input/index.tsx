import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type Props = {
  label: string;
  placeholder: string;
  type: string;
  error?: boolean;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Input = ({ label, placeholder, type, error, ...rest }: Props) => {
  return (
    <div className="mt-5">
      <label
        htmlFor="success"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        type={type}
        className="bg-green-50 border text-sm rounded-lg block w-full p-2.5"
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};
