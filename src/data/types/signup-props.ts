import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { RegistrationFieldsType } from './registration-type';

export interface SignupState {
  showSignupSuccess: boolean;
  showSignupError: boolean;
}

export interface SignupProps {
  showSignupState: SignupState;
  setShowSignupState: React.Dispatch<React.SetStateAction<SignupState>>;
}

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

export interface CustomerAddressesOptionsProps {
  billingAddresses: number[];
  shippingAddresses?: number[];
  defaultShipping?: number;
  defaultBilling?: number;
}
