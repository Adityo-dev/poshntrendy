import { ShoppingBasket } from "lucide-react";
import Link from "next/link";
import { ProductsDetailsAccordion } from "./ProductsDetailsAccordion";

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
        <div className="mb-4">
          <p className="text-base font-semibold mb-3 text-[#605F5F]">
            Select your size
            <span className="font-normal"> What’s my size?</span>
          </p>
          <div className="flex gap-3">
            {["STITCH", "UNSTITCH"].map((size) => (
              <button
                key={size}
                className="px-4 py-2 border border-[#605F5F] text-base font-bold rounded-[6px] cursor-pointer"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mb-2">
          <button className="flex-1 py-3 bg-[#E60CD9] text-[#FBF9FB] text-lg rounded-lg hover:opacity-90 transition cursor-pointer flex items-center justify-center gap-2">
            <ShoppingBasket /> Add To Cart
          </button>
          <button className="flex-1 py-3 border border-[#E60CD9] text-[#0D0C0D] text-lg rounded-lg hover:bg-[#E60CD9] hover:text-[#FBF9FB] transition duration-300 cursor-pointer">
            Buy Now
          </button>
        </div>
      </div>
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
