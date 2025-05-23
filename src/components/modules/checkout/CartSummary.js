import GiftAndCoupon from "../cart/GiftAndCoupon";
import PriceBreakdown from "../cart/PriceBreakdown";
import TotalPayable from "../cart/TotalPayable";

function CartSummary() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <span className="w-10 h-10 flex items-center justify-center border border-primary rounded-full text-primary font-bold">
          3
        </span>
        Your order
      </h2>

      <div className="w-full border border-primary p-6 rounded-lg">
        {/* Cart Summary Header */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-2 mb-4">
            CART SUMMARY
          </h2>
          {/* Price Breakdown */}
          <PriceBreakdown />
        </div>
        {/* Gift Option & Coupon */}
        <GiftAndCoupon />
        {/* Total Payable And Action Buttons */}
        <TotalPayable />
      </div>
    </div>
  );
}

export default CartSummary;
