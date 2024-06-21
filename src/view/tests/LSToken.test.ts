import { getLSToken, removeLSToken } from '../../data/utils/getLS';
import { setLSToken } from '../../data/utils/setLS';

describe('localStorageUtils', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('sets a token in local storage', () => {
    setLSToken('my-token');
    expect(localStorage.getItem('bearerToken')).toBe('my-token');
  });

  it('gets a token from local storage', () => {
    localStorage.setItem('bearerToken', 'my-token');
    expect(getLSToken()).toBe('my-token');
  });

  it('removes a token from local storage', () => {
    localStorage.setItem('bearerAnonToken', 'anon-token');
    removeLSToken();
    expect(localStorage.getItem('bearerAnonToken')).toBeNull();
  });
});
