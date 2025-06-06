import { useState } from "react";

function PaymentMethod() {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [onlineMethod, setOnlineMethod] = useState("bkash");
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">2. Payment Method</h2>
      <div className="flex gap-2">
        <button
          onClick={() => setPaymentMethod("cod")}
          className={`flex-1 border p-4 rounded ${
            paymentMethod === "cod" ? "border-primary" : ""
          }`}
        >
          Cash On Delivery
        </button>
        <button
          onClick={() => setPaymentMethod("online")}
          className={`flex-1 border p-4 rounded ${
            paymentMethod === "online" ? "border-primary" : ""
          }`}
        >
          Online Payment
        </button>
      </div>

      {paymentMethod === "online" && (
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => setOnlineMethod("bkash")}
            className={`flex-1 border p-3 rounded ${
              onlineMethod === "bkash" ? "border-primary" : ""
            }`}
          >
            bKash
          </button>
          <button
            onClick={() => setOnlineMethod("nagad")}
            className={`flex-1 border p-3 rounded ${
              onlineMethod === "nagad" ? "border-primary" : ""
            }`}
          >
            Nagad
          </button>
          <button
            onClick={() => setOnlineMethod("rocket")}
            className={`flex-1 border p-3 rounded ${
              onlineMethod === "rocket" ? "border-primary" : ""
            }`}
          >
            Rocket
          </button>
        </div>
      )}
    </div>
  );
}

export default PaymentMethod;
