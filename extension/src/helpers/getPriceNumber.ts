export default function getPriceNumber(price: string) {
  let priceNumber = price.includes('$') ? price.replace('$', '') : price;
  return Number(priceNumber);
}
