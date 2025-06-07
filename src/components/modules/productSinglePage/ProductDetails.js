import Link from "next/link";
import ProductActionBtn from "./ProductActionBtn";
import { ProductsDetailsAccordion } from "./ProductsDetailsAccordion";
import SizeSelection from "./SizeSelection";

function ProductDetails({ productData }) {
  return (
    <div>
      {/* Title and subtitle */}
      <h3 className="text-[#000] text-3xl font-semibold leading-8 mb-2">
        {productData?.title}
      </h3>

      <p className="text-[#E60CD9] text-3xl font-bold mb-4">
        ${productData?.price}
      </p>

      {/* Size selection And Action Buttons */}
      <div className="py-4 border-y border-[#605F5F]">
        <SizeSelection />
        <ProductActionBtn />
      </div>
      {/* Product details */}
      <ProductsDetailsAccordion productData={productData} />
      {/* Footer Links */}
      <div className="mt-6 text-base text-[#E82323] underline flex gap-4">
        <Link href="#">SHIPPING POLICY</Link>
        <Link href="#">HELP</Link>
        <Link href="#">CONTACT US</Link>
      </div>
    </div>
  );
}

export default ProductDetails;
