import GiftAndCoupon from "./GiftAndCoupon";
import PriceBreakdown from "./PriceBreakdown";
import TotalPayable from "./TotalPayable";

function CardSummary() {
  return (
    <div className="w-full border border-[#E60CD9] p-6 rounded-lg">
      <div className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-2 mb-4">
          CART SUMMARY
        </h2>
        <PriceBreakdown />
      </div>
      <GiftAndCoupon />
      <TotalPayable />
    </div>
  );
}

export default CardSummary;
