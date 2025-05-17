function PriceBreakdown() {
  return (
    <div className="space-y-3">
      <div className="flex justify-between text-xl">
        <span className="text-[#605F5F]">Cart Total</span>
        <span className="text-[#0D0C0D] font-medium">$500</span>
      </div>
      <div className="flex justify-between text-xl">
        <span className="text-[#605F5F]">Total Discount</span>
        <span className="text-green-600">$0</span>
      </div>
      <div className="flex justify-between text-xl">
        <span className="text-[#605F5F]">Shipping</span>
        <span className="text-[#0D0C0D] font-medium">$160</span>
      </div>
      <p className="text-base text-[#605F5F] italic">
        Shipping charges to be calculated at checkout
      </p>
    </div>
  );
}

export default PriceBreakdown;
