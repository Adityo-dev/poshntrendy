import { useState } from "react";

function DeliveryMethod() {
  const [deliveryMethod, setDeliveryMethod] = useState("pickup");
  return (
    <>
      <h2 className="text-lg font-semibold mb-4">3. Delivery Method</h2>
      <div className="space-y-2">
        <button
          onClick={() => setDeliveryMethod("pickup")}
          className={`w-full border p-4 rounded text-left ${
            deliveryMethod === "pickup" ? "border-primary" : ""
          }`}
        >
          Shop Pickup
        </button>
        <button
          onClick={() => setDeliveryMethod("sundarban")}
          className={`w-full border p-4 rounded text-left ${
            deliveryMethod === "sundarban" ? "border-primary" : ""
          }`}
        >
          Sundarban Courier Service
        </button>
        <button
          onClick={() => setDeliveryMethod("pathao")}
          className={`w-full border p-4 rounded text-left ${
            deliveryMethod === "pathao" ? "border-primary" : ""
          }`}
        >
          Pathao Courier Service
        </button>
      </div>
    </>
  );
}

export default DeliveryMethod;
