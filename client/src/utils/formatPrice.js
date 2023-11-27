export const formatPrice = num =>
  new Intl.NumberFormat('us-US', {
    style: 'currency',
    currency: 'USD',
  }).format(num);
