function formatPrice(amount: number) {
  const formattedAmount: string = (amount / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return formattedAmount;
}

export default formatPrice;
