export function convertPrice(price: number): string {
  return new Intl.NumberFormat().format(price);
}
