export function filterProductsByKey(products, key) {
  return products.filter((product) => product?.[key]);
}
