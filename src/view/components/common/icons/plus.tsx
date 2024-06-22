/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unknown-property */
import React from 'react';
import { IconProps } from '../../../../data/types/interfaces/iconProps';

export default function PlusIcon({ width = '24px', height = '24px', fill = '#000' }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
      fill={fill}>
      <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" data-testid="plus-icon" />
    </svg>
  );
}
