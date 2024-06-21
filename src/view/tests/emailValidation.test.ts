import createEmailErrorMessage from '../components/LoginForm/emailValidation';

describe('createEmailErrorMessage', () => {
  it('returns a space for a valid email', () => {
    const validEmail = 'user@example.com';
    const result = createEmailErrorMessage(validEmail);
    expect(result).toBe(' ');
  });

  it('handles leading or trailing whitespace', () => {
    const invalidEmail = '  user@example.com  ';
    const result = createEmailErrorMessage(invalidEmail);
    expect(result).toBe('Must not contain leading or trailing whitespace.');
  });

  it('handles invalid email format', () => {
    const invalidEmail = 'invalid-email';
    const result = createEmailErrorMessage(invalidEmail);
    expect(result).toBe(
      'Must contain an "@" symbol separating local part and domain name (e.g., user@example.com).'
    );
  });
});
