import { SVGProps } from 'react';

export const ArrowBack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <path
        fill="#fff"
        d="M14.9 25.967 5.633 16.7a1.016 1.016 0 0 1-.233-.333.978.978 0 0 1-.067-.367c0-.133.022-.256.067-.367.044-.11.122-.222.233-.333l9.3-9.3a.904.904 0 0 1 .667-.267c.267 0 .5.1.7.3.2.2.3.434.3.7 0 .267-.1.5-.3.7L8.733 15h16.534c.288 0 .527.094.716.283a.972.972 0 0 1 .284.717.972.972 0 0 1-.284.717.971.971 0 0 1-.716.283H8.733l7.6 7.6c.178.178.267.4.267.667 0 .266-.1.5-.3.7-.2.2-.433.3-.7.3a.96.96 0 0 1-.7-.3Z"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={28.933}
        height={28.533}
        x={1.333}
        y={2.733}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={1}
          result="effect1_dropShadow_1138_107"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1138_107"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1138_107"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
