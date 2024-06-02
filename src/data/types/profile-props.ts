import { ChangeEvent, FormEvent, SetStateAction } from 'react';
import { CustomerProfileResponse } from './interfaces/customer.interface';

export interface ProfileContentInputProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface ProfileUpdateProps extends CustomerProfileResponse {
  setUpdate: React.Dispatch<SetStateAction<boolean>>;
}
