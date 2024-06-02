import { ChangeEvent, FormEvent } from 'react';

export interface ProfileContentInputProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
