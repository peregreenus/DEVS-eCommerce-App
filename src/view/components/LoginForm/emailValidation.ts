function createEmailErrorMessage(value: string) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  let message = '';

  if (emailPattern.test(value)) message = ' ';

  return message;
}

export default createEmailErrorMessage;
