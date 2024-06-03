// eslint-disable-next-line import/prefer-default-export
export function getLSAnonToken() {
  return localStorage.getItem('bearerAnonToken');
}

export function getLSToken() {
  return localStorage.getItem('bearerToken');
}

export function getLSCustomer() {
  return localStorage.getItem('customer');
}

export function getLSCart() {
  return localStorage.getItem('cart');
}

export function getLSVersionProfileCustomer() {
  return localStorage.getItem('versionProfileCustomer');
}
