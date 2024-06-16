import formatPrice from '../../data/utils/formatPrice';

describe('formatPrice', () => {
  it('formats the price correctly for whole numbers', () => {
    expect(formatPrice(12345)).toBe('$123.45');
  });

  it('formats the price correctly for decimal numbers', () => {
    expect(formatPrice(123456)).toBe('$1,234.56');
  });
});
