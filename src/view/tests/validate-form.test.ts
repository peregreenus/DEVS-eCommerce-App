import { validationField } from '../../data/utils/validate-form';

describe('validationField function', () => {
  it('validates email address', () => {
    expect(validationField('email', 'test@example.com')).toBe('empty');
    expect(validationField('email', 'invalid-email')).toBe('should be a valid email address');
  });

  it('validates first name', () => {
    expect(validationField('firstName', 'John')).toBe('empty');
    expect(validationField('firstName', 'John123')).toBe(
      'first name should be 3-16 characters and should not include any special character'
    );
  });

  it('validates last name', () => {
    expect(validationField('lastName', 'Doe')).toBe('empty');
    expect(validationField('lastName', 'Doe@')).toBe(
      'last name should be 3-16 characters and should not include any special character'
    );
  });

  // it('validates postal codes for United States', () => {
  //   expect(validationField('postalCodeShipping', '')).toBe('empty');
  //   expect(validationField('postalCodeShipping', '')).toBe(
  //     'postal code not valid for this country'
  //   );
  // });

  it('validates date of birth', () => {
    expect(validationField('dateOfBirth', '2000-01-01')).toBe('empty');
    expect(validationField('dateOfBirth', '2015-12-31')).toBe('you must be > 13 y.o');
  });

  it('validates city names', () => {
    expect(validationField('cityShipping', 'New York')).toBe('empty');
    expect(validationField('cityShipping', 'hj')).toBe(
      'should be 3-16 characters and should not include any special character'
    );
  });

  it('validates street names', () => {
    expect(validationField('streetShipping', '123 Main St')).toBe('empty');
    expect(validationField('streetShipping', 'Elm Street@')).toBe(
      'should be 3-16 characters and should not include any special character'
    );
  });

  it('validates passwords', () => {
    expect(validationField('password', 'P@ssw0rd')).toBe('empty');
    expect(validationField('password', 'weakpassword')).toBe(
      '8-25 characters, at least 1 uppercase letter, 1 lowercase letter, and 1 number. (allowed char: latin char and !@#$%^&*)'
    );
  });
});
