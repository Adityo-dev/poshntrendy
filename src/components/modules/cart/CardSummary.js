import GiftAndCoupon from "./GiftAndCoupon";
import PriceBreakdown from "./PriceBreakdown";
import TotalPayable from "./TotalPayable";

function CardSummary() {
  return (
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
  );
}

export default CardSummary;
