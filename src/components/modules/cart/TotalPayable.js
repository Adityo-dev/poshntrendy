function TotalPayable() {
  return (
    <>
      <div className="flex justify-between mt-6 text-[#0D0C0D] text-xl font-semibold border-t pt-4">
        <p>Total Payable</p>
        <p>$660</p>
      </div>

      <div className="mt-6 space-y-4">
        <button className="w-full bg-primary hover:bg-[#C50ABF] text-primary-foreground py-3 rounded-md text-lg font-medium cursor-pointer">
          Proceed To Checkout
        </button>
        <button className="w-full border border-primary text-primary hover:bg-[#FDF0FD] py-3 rounded-md text-lg font-medium cursor-pointer">
          Continue Shopping
        </button>
      </div>

      {/* Payment Security Note */}
      <div className="mt-4 text-xs text-[#0D0C0D] text-center">
        <p>100% secure payments. All major payment methods accepted.</p>
      </div>
    </>
  );
}

export default TotalPayable;
