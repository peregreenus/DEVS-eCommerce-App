function createPasswordErrorMessage(value: string) {
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])\S{8,}$/;

  let message = '';

  if (passwordPattern.test(value)) message = ' ';

  return message;
}

export default createPasswordErrorMessage;
