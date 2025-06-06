import Link from "next/link";
import ProductActionBtn from "./ProductActionBtn";
import { ProductsDetailsAccordion } from "./ProductsDetailsAccordion";
import SizeSelection from "./SizeSelection";

function ProductDetails() {
  return (
    <div>
      {/* Title and subtitle */}
      <h3 className="text-[#000] text-[24px] font-black leading-8 mb-1">
        Kalighata
      </h3>
      <p className="text-[#605F5F] text-lg leading-[26px] mb-2">
        Peacock Red phulkari printed jumpsuit
      </p>
      <p className="text-[#E60CD9] text-3xl font-bold mb-4">$490</p>

      {/* Size selection And Action Buttons */}
      <div className="py-4 border-y border-[#605F5F]">
        <SizeSelection />
        <ProductActionBtn />
      </div>
      {/* Product details */}
      <ProductsDetailsAccordion />
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
