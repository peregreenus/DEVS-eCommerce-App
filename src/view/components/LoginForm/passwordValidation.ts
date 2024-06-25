function createPasswordErrorMessage(value: string) {
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])\S{8,}$/;

  let message = '';

  if (passwordPattern.test(value)) message = ' ';
  else if (/^\s+|\s+$/.test(value)) message = 'Must not contain leading or trailing whitespace.';
  else if (value.length < 8) message = 'Must be at least 8 characters long.';
  else if (!/[A-Z]+/g.test(value)) message = 'Must contain at least one uppercase letter.';
  else if (!/[a-z]+/g.test(value)) message = 'Must contain at least one lowercase letter.';
  else if (!/[0-9]/g.test(value)) message = 'Must contain at least one digit.';
  else if (!/[!@#$%^&*]+/g.test(value))
    message = 'Must contain at least one special character (e.g., !@#$%^&*).';

  return message;
}

export default createPasswordErrorMessage;
