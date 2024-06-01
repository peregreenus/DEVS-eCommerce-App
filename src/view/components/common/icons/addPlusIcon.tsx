import React from 'react';
import { IconProps } from '../../../../data/types/interfaces/iconProps';

export default function AddPlusIcon({ width, height, fill = '#000' }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 12H18M12 6V18"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
