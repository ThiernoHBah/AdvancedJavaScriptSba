// This function calculates the DISCOUNT AMOUNT in dollars.
// Example: price = 100, discount = 10% → returns 10.

export function calculateDiscount(price: number, discountPercent: number): number {
  // percentage formula
  const discount = price * (discountPercent / 100);
  return discount;
}