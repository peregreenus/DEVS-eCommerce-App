/* eslint-disable import/prefer-default-export */
export function procentToValue(x: number, min: number, max: number): number {
  const normalizedX = x / 100;
  const expValue = normalizedX ** 2;
  return Math.floor(min + (max - min) * expValue);
}
