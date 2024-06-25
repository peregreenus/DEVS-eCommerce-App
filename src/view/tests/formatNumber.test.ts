import formatNumber from '../../data/utils/formatNumber';

describe('formatNumber', () => {
  it('should format large numbers with "M" suffix', () => {
    expect(formatNumber(1500000)).toBe('1.5M');
    expect(formatNumber(5000000)).toBe('5M');
  });

  it('should format thousands with "k" suffix', () => {
    expect(formatNumber(3500)).toBe('3.5k');
    expect(formatNumber(8000)).toBe('8k');
  });

  it('should leave small numbers unchanged', () => {
    expect(formatNumber(42)).toBe('42');
    expect(formatNumber(123)).toBe('123');
  });
});
