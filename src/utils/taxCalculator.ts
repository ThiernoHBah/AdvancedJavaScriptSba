// This function calculates how much TAX is added to the product.
// The rules given:
// - Normal products: 4.75% tax
// - Groceries only: 3% tax

export function calculateTax(price: number, category: string): number {
  let taxRate = 4.75; // default tax

  // groceries get lower tax
  if (category.toLowerCase() === "groceries") {
    taxRate = 3;
  }

  // percentage formula
  const taxAmount = price * (taxRate / 100);
  return taxAmount;
}