function GiftAndCoupon() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="giftItem"
          className="h-4 w-4 text-primary rounded border-primary focus:ring-primary"
        />
        <label htmlFor="giftItem" className="text-sm text-[#000]">
          This is a gift item
        </label>
        <button className="text-sm text-primary hover:underline cursor-pointer">
          (Know more)
        </button>
      </div>

      <div className="flex">
        <input
          type="text"
          placeholder="Enter Coupon Code"
          className="flex-1 border border-primary px-4 py-2 rounded-s-md outline-none"
        />
        <button className="bg-primary hover:bg-[#C50ABF] text-lg text-primary-foreground px-6 py-2 rounded-r-md cursor-pointer">
          Apply
        </button>
      </div>
    </div>
  );
}

export default GiftAndCoupon;
