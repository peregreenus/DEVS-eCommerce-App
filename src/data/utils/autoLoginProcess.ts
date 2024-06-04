import { CustomerResponse } from '../types/interfaces/customer.interface';
import { setLSVersionProfileCustomer } from './setLS';
import getTokenForLogin from '../api/getTokenForLogin';
import { MainProps } from '../types/main-props';
import logInCustomer from '../api/logInCustomer';

async function AutoLoginProcess(
  pass: string,
  response: CustomerResponse,
  { state, setState }: MainProps
) {
  let autoLoginState: boolean = true;
  let errorMessage = { statusCode: 0, message: '' };

  if (response.message && response.statusCode && response.statusCode >= 400) {
    autoLoginState = false;
  } else if (response?.email && response?.version) {
    setLSVersionProfileCustomer(response?.version);
    await getTokenForLogin(response?.email, pass, { state, setState })
      .then((token) => {
        if (response?.email && pass) {
          logInCustomer(response?.email, pass, `${token}`, '', {
            state,
            setState
          }).catch((err) => {
            errorMessage = err;
          });
        }
        return token;
      })
      .catch((err) => {
        errorMessage = err;
      });
  }
  return { autoLoginState, errorMessage };
}

export default AutoLoginProcess;
