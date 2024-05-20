/* eslint-disable no-console */
import { FormEvent } from 'react';
import getTokenForLogin from '../../../data/api/getTokenForLogin';
import createCart from '../../../data/api/createCart';
import logInCustomer from '../../../data/api/logInCustomer';

function handleSubmit(e: FormEvent<HTMLFormElement>): void {
  e.preventDefault();

  const form = e.currentTarget;
  const data = new FormData(form);

  // console.log(Object.fromEntries(data.entries()));
  form.reset();

  const [email, password] = [data.get('email'), data.get('password')];

  getTokenForLogin(email!, password!)
    .then((token) => {
      if (email && password && token) {
        createCart(token).then(({ cartId }) =>
          logInCustomer(email, password, token, cartId).catch((err) => {
            throw new Error(err);
          })
        );
      }
    })
    .catch((err) => console.error(err));
}

export default handleSubmit;
