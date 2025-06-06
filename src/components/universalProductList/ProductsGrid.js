import ProductCard from "../cardGroup/ProductCard";

function ProductsGrid({ paginatedProducts }) {
  return (
    <div className="grid grid-cols-3 gap-6">
      {paginatedProducts.map((product) => (
        <ProductCard product={product} key={product?.id} />
      ))}
    </div>
  );
}

export default ProductsGrid;
