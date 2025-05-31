function GiftAndCoupon() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="giftItem"
          className="h-4 w-4 text-[#E60CD9] rounded border-[#E60CD9] focus:ring-[#E60CD9]"
        />
        <label htmlFor="giftItem" className="text-sm text-[#000]">
          This is a gift item
        </label>
        <button className="text-sm text-[#E60CD9] hover:underline cursor-pointer">
          (Know more)
        </button>
      </div>

      <div className="flex">
        <input
          type="text"
          placeholder="Enter Coupon Code"
          className="flex-1 border border-[#E60CD9] px-4 py-2 rounded-s-md outline-none"
        />
        <button className="bg-[#E60CD9] hover:bg-[#C50ABF] text-lg text-[#FBF9FB] px-6 py-2 rounded-r-md cursor-pointer">
          Apply
        </button>
      </div>
    </div>
  );
}

export default GiftAndCoupon;
