export type RegistrationFieldsType = {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  countryBilling: string;
  cityBilling: string;
  postalCodeBilling: string;
  streetBilling: string;
  countryShipping?: string;
  cityShipping?: string;
  postalCodeShipping?: string;
  streetShipping?: string;
  password: string;
  confirmPassword: string;
};
