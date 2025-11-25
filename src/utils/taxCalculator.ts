export function calculateTax(price: number, category: string): number {
  const defaultTax = 4.75;
  const groceryTax = 3;

  const taxRate = category.toLowerCase() === "groceries" ? groceryTax : defaultTax;

  return price * (taxRate / 100);
}