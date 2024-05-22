export const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  dateOfBirth: '',
  countryBilling: '',
  countryShipping: '',
  cityBilling: '',
  cityShipping: '',
  postalCodeBilling: '',
  postalCodeShipping: '',
  streetBilling: '',
  streetShipping: '',
  password: '',
  confirmPassword: ''
};
export const errorInitialState = {
  firstName: 'should not be a empty!',
  lastName: 'should not be a empty!',
  email: 'should not be a empty!',
  dateOfBirth: 'should not be a empty!',
  cityBilling: 'should not be a empty!',
  postalCodeBilling: 'should not be a empty!',
  streetBilling: 'should not be a empty!',
  cityShipping: 'should not be a empty!',
  postalCodeShipping: 'should not be a empty!',
  streetShipping: 'should not be a empty!',
  password: 'should not be a empty!'
};

export const initialStateCountry = {
  countryBilling: 'null country',
  countryShipping: 'null country'
};

export const initialErrorCountry = {
  countryBilling: 'should be select',
  countryShipping: 'should be select'
};
