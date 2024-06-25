import { ChangeEvent } from 'react';

export interface SortBarProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}
