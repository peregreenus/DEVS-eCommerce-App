/* eslint-disable import/prefer-default-export */
/* eslint-disable import/export */

export function procentToValue(x: number, min: number, max: number): number {
  const normalizedX = x / 100;
  const expValue = normalizedX ** 2;
  return Math.floor(min + (max - min) * expValue);
}

// export function procentToValue(x: number, min: number, max: number) {
//   const logMin = 1;
//   const logMax = 10;
//   const logX = logMin + (logMax - logMin) * (x / 100);
//   const logValue = Math.log10(logX);
//   return Math.floor(min + (max - min) * (logValue / Math.log10(logMax)));
// }

// export function procentToValue(procent: number, minLim: number, maxLim: number) {
//   return Math.floor(minLim + (procent / 100) * (maxLim - minLim));
// }

// export function valueToProcent(value: number, minLim: number, maxLim: number) {
//   return Math.floor(((value - minLim) * 100) / (maxLim - minLim));
// }
