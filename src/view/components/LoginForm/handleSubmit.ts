/* eslint-disable no-console */
import { FormEvent } from 'react';
import getTokenForLogin from '../../../data/api/getTokenForLogin';
import createCart from '../../../data/api/createCart';
import logInCustomer from '../../../data/api/logInCustomer';
import { ErrorProps } from '../../../data/types/errorProps';

function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<string | ErrorProps | void> {
  e.preventDefault();

  const form = e.currentTarget;
  const data = new FormData(form);

  // console.log(Object.fromEntries(data.entries()));
  form.reset();

  const [email, password] = [data.get('email'), data.get('password')];

  return getTokenForLogin(email!, password!)
    .then((token) => {
      if (email && password && token === 'string') {
        createCart(token).then(({ cartId }) =>
          logInCustomer(email, password, token, cartId).catch((err) => {
            throw new Error(err);
          })
        );
      }
      return token;
    })
    .catch((err) => console.error(err));
}

export default handleSubmit;
