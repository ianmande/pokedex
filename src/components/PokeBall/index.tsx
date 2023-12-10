import { SVGProps } from 'react';

type Props = {
  size?: number;
} & SVGProps<SVGSVGElement>;

const PokeBall = ({
  fill = '#fff',
  size = 208,
  opacity = 0.1,
  ...rest
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    {...rest}
  >
    <g fill={fill} opacity={opacity}>
      <path d="M128.762 104c0 13.676-11.086 24.762-24.762 24.762S79.238 117.676 79.238 104 90.324 79.238 104 79.238 128.762 90.324 128.762 104Z" />
      <path
        fillRule="evenodd"
        d="M104 208c52.393 0 95.738-38.743 102.947-89.143h-60.912c-6.118 17.312-22.628 29.714-42.035 29.714-19.407 0-35.916-12.402-42.035-29.714H1.053C8.263 169.257 51.607 208 104 208ZM61.965 89.143H1.053C8.263 38.743 51.607 0 104 0s95.738 38.743 102.947 89.143h-60.912C139.917 71.83 123.407 59.429 104 59.429c-19.407 0-35.916 12.402-42.035 29.714ZM128.762 104c0 13.676-11.086 24.762-24.762 24.762S79.238 117.676 79.238 104 90.324 79.238 104 79.238 128.762 90.324 128.762 104Z"
        clipRule="evenodd"
      />
    </g>
  </svg>
);

export default PokeBall;
