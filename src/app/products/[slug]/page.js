import ProductDetails from "@/components/productSinglePage/ProductDetails";
import ProductImages from "@/components/productSinglePage/ProductImages";

const images = [
  "/image/product1.png",
  "/image/product2.png",
  "/image/product3.png",
];

function ProductSinglePage() {
  return (
    <main className="bg-[#FFE5EC] min-h-screen">
      <section className="container mx-auto px-4 py-12 grid grid-cols-12 gap-10 items-start">
        <div className="col-span-7">
          <ProductImages images={images} />
        </div>

        <div className="col-span-5">
          <ProductDetails />
        </div>
      </section>
    </main>
  );
}

export default ProductSinglePage;
