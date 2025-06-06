function OrderSummary() {
  return (
    <>
      <h2 className="text-lg font-semibold mb-4">4. Your Order</h2>
      <div className="space-y-2">
        <p>
          iPhone 12 Pro Max 256GB x 1{" "}
          <span className="float-right">৳55000</span>
        </p>
        <p>
          Items Price: <span className="float-right">৳55000</span>
        </p>
        <p>
          Delivery Charge: <span className="float-right">৳150</span>
        </p>
        <p>
          Subtotal: <span className="float-right">৳55150</span>
        </p>
        <p>
          Gateway Charge(GC): <span className="float-right">৳0</span>
        </p>
        <p>
          Total Item: <span className="float-right">1</span>
        </p>
        <p className="font-bold">
          Total: <span className="float-right">৳55150</span>
        </p>
      </div>
      <div className="my-4">
        <input type="checkbox" id="agree" className="mr-2" />
        <label htmlFor="agree" className="text-xs">
          I accept the specified including the
          <a href="#" className="text-primary">
            {" "}
            Privacy Policy
          </a>
          ,
          <a href="#" className="text-primary">
            {" "}
            Terms and Conditions
          </a>
          ,
          <a href="#" className="text-primary">
            {" "}
            Return Refund & Replacement Policy
          </a>{" "}
          and
          <a href="#" className="text-primary">
            {" "}
            Exchanges & Delivery Policy
          </a>
          .
        </label>
      </div>
      <button className="w-full bg-primary text-white py-2 rounded">
        Confirm Order
      </button>
    </>
  );
}

export default OrderSummary;
