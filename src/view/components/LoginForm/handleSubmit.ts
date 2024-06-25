import { FormEvent } from 'react';
import getTokenForLogin from '../../../data/api/getTokenForLogin';
import logInCustomer from '../../../data/api/logInCustomer';
import { ErrorProps } from '../../../data/types/errorProps';
import { MainProps } from '../../../data/types/main-props';

function handleSubmit(
  e: FormEvent<HTMLFormElement>,
  { state, setState }: MainProps
): Promise<string | ErrorProps | void> {
  e.preventDefault();

  const form = e.currentTarget;
  const data = new FormData(form);

  form.reset();

  const [email, password] = [data.get('email'), data.get('password')];

  return getTokenForLogin(email!, password!, { state, setState })
    .then((token) => {
      if (email && password) {
        logInCustomer(email, password, `${token}`, `${localStorage.getItem('cart')}`, {
          state,
          setState
        }).catch((err) => {
          throw new Error(err);
        });
      }
      return token;
    })
    .catch((err) => console.error(err));
}

export default handleSubmit;
