// eslint-disable-next-line import/prefer-default-export
export function setLSToken(token: string) {
  localStorage.setItem('bearerToken', token);
}
export function setLSVersionProfileCustomer(version: string) {
  localStorage.setItem('versionProfileCustomer', version);
}
