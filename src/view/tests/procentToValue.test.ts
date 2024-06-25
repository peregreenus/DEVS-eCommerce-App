import { procentToValue } from '../../data/utils/priceRangeConv';

describe('procentToValue', () => {
  it('converts 0% to the minimum value', () => {
    expect(procentToValue(0, 10, 100)).toBe(10);
  });

  it('converts 100% to the maximum value', () => {
    expect(procentToValue(100, 10, 100)).toBe(100);
  });

  it('converts 50% to the correct value in the range', () => {
    const result = procentToValue(50, 10, 100);
    const expectedValue = Math.floor(10 + (100 - 10) * 0.5 ** 2);
    expect(result).toBe(expectedValue);
  });
});
