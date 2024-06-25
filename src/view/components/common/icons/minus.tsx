/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unknown-property */
import React from 'react';
import { IconProps } from '../../../../data/types/interfaces/iconProps';

export default function MinusIcon({ width = '24px', height = '24px', fill = '#000' }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
      fill={fill}>
      <path d="M200-440v-80h560v80H200Z" data-testid="minus-icon" />
    </svg>
  );
}
