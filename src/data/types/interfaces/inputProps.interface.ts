import { ChangeEvent } from 'react';

export interface InputProps {
  id: number;
  name: string;
  labelName: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder: string;
  errorMessage: string;
}
