import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { RegistrationFieldsType } from '../../../data/types/registration-type';

export interface InputProps {
  type: 'text' | 'number' | 'email' | 'password' | 'date';
  label: string;
  value: string | number;
  name: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: ChangeEvent<HTMLInputElement>) => void;
  classes: string;
  wrong: boolean;
  error: string | null;
  disabled: boolean;
}

export interface AddressFormProps {
  setName: string;
  selectedCountry: string;
  setSelectedCountry: Dispatch<SetStateAction<{ [key: string]: string }>>;
  setCountryError: Dispatch<SetStateAction<{ [key: string]: string }>>;
  setErrors: Dispatch<SetStateAction<{ [key: string]: string }>>;
  setNewCustomer: Dispatch<SetStateAction<RegistrationFieldsType>>;
  countryError: string;
  newCustomer: RegistrationFieldsType;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: ChangeEvent<HTMLInputElement>) => void;
  cityWrong: boolean;
  postalCodeWrong: boolean;
  streetWrong: boolean;
  validationErrors: { [key: string]: string };
  currentErrorCountry: { [key: string]: string };
  valuePostalCode: string;
  valueCity: string;
  valueStreet: string;
  cityError: string;
  postalCodeError: string;
  streetError: string;
}
