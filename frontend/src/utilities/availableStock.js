export function getAvailableStock(product, cartItems) {
  const item = cartItems.find((item) => item.id === product.id);
  return product.stock - (item?.quantity || 0);
}
