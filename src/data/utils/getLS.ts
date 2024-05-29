// eslint-disable-next-line import/prefer-default-export
export function getLSAnonToken() {
  return localStorage.getItem('bearerAnonToken');
}

export function getLSToken() {
  return localStorage.getItem('bearerToken');
}

export function getLSCastomer() {
  return localStorage.getItem('castomer');
}

export function getLSCart() {
  return localStorage.getItem('cart');
}
