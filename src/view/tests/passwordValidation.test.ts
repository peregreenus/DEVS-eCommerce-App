import createPasswordErrorMessage from '../components/LoginForm/passwordValidation';

describe('createPasswordErrorMessage', () => {
  it('returns a space for a valid password', () => {
    const validPassword = 'SecureP@ssw0rd';
    const result = createPasswordErrorMessage(validPassword);
    expect(result).toBe(' ');
  });

  it('handles leading or trailing whitespace', () => {
    const invalidPassword = '  MySecret123  ';
    const result = createPasswordErrorMessage(invalidPassword);
    expect(result).toBe('Must not contain leading or trailing whitespace.');
  });

  it('handles password length less than 8 characters', () => {
    const shortPassword = 'Abc12';
    const result = createPasswordErrorMessage(shortPassword);
    expect(result).toBe('Must be at least 8 characters long.');
  });

  it('handles missing uppercase letter', () => {
    const noUppercase = 'lower123!@';
    const result = createPasswordErrorMessage(noUppercase);
    expect(result).toBe('Must contain at least one uppercase letter.');
  });

  it('handles missing lowercase letter', () => {
    const noLowercase = 'UPPER123!@';
    const result = createPasswordErrorMessage(noLowercase);
    expect(result).toBe('Must contain at least one lowercase letter.');
  });

  it('handles missing digit', () => {
    const noDigit = 'UpperLower!@';
    const result = createPasswordErrorMessage(noDigit);
    expect(result).toBe('Must contain at least one digit.');
  });

  it('handles missing special character', () => {
    const noSpecialChar = 'UpperLower123';
    const result = createPasswordErrorMessage(noSpecialChar);
    expect(result).toBe('Must contain at least one special character (e.g., !@#$%^&*).');
  });
});
