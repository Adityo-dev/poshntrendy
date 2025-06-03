const coupons = [
  {
    code: "SUMMER20",
    discount: "20% off",
    valid: "Valid until Aug 31, 2023",
  },
  {
    code: "NEWUSER10",
    discount: "$10 off",
    valid: "Valid for first purchase",
  },
];

function Coupon() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Your Coupons</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {coupons.map((coupon, index) => (
          <div
            key={index}
            className="border-2 border-dashed border-primary rounded-lg p-4"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-primary">
                  {coupon.code}
                </h3>
                <p className="text-gray-700">{coupon.discount}</p>
                <p className="text-sm text-gray-500">{coupon.valid}</p>
              </div>
              <button className="bg-primary text-white px-4 py-1 rounded hover:bg-opacity-90">
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Add Coupon Code</h3>
        <div className="flex">
          <input
            type="text"
            className="flex-1 p-3 border rounded-l-lg focus:ring-2 focus:ring-primary"
            placeholder="Enter coupon code"
          />
          <button className="bg-primary text-white px-6 py-3 rounded-r-lg hover:bg-opacity-90">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default Coupon;
