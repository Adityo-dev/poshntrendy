import { ShoppingBasket } from "lucide-react";

function ProductActionBtn() {
  return (
    <div className="flex gap-4 mb-2">
      <button className="flex-1 py-3 bg-[#E60CD9] text-[#FBF9FB] text-lg rounded-lg hover:opacity-90 transition cursor-pointer flex items-center justify-center gap-2">
        <ShoppingBasket /> Add To Cart
      </button>
      <button className="flex-1 py-3 border border-[#E60CD9] text-[#0D0C0D] text-lg rounded-lg hover:bg-[#E60CD9] hover:text-[#FBF9FB] transition duration-300 cursor-pointer">
        Buy Now
      </button>
    </div>
  );
}

export default ProductActionBtn;
