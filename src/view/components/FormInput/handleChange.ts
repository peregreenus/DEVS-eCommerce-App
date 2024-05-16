import { ChangeEvent } from 'react';
import createEmailErrorMessage from '../LoginForm/emailValidation';
import createPasswordErrorMessage from '../LoginForm/passwordValidation';

function handleChange(e: ChangeEvent<HTMLInputElement>): string {
  const { target } = e;
  let message = '';

  if (target.name === 'email') {
    message = createEmailErrorMessage(target.value);
  } else {
    message = createPasswordErrorMessage(target.value);
  }

  return message;
}

export default handleChange;
