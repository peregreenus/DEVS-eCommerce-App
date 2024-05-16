function createEmailErrorMessage(value: string) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  let message = '';

  if (emailPattern.test(value)) {
    message = ' ';
  } else if (/^\s+|\s+$/.test(value)) {
    message = 'Must not contain leading or trailing whitespace.';
  } else {
    message =
      'Must contain an "@" symbol separating local part and domain name (e.g., user@example.com).';
  }

  return message;
}

export default createEmailErrorMessage;
