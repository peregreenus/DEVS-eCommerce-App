export default function formatNumber(num: number) {
  if (num >= 1e6) {
    return `${(num / 1e6).toFixed(1).replace(/\.0$/, '')}M`;
  }
  if (num >= 1e3) {
    return `${(num / 1e3).toFixed(1).replace(/\.0$/, '')}k`;
  }
  return num.toString();
}
