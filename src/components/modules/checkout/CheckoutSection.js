"use client";
import AddressForm from "@/components/manage/address/AddressFrom";
import { useState } from "react";

const CheckoutSection = () => {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [onlineMethod, setOnlineMethod] = useState("bkash");
  const [deliveryMethod, setDeliveryMethod] = useState("pickup");
  const [address, setAddress] = useState("new");
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: "Home",
      fullName: "Aditto Dev Barmon Koushik",
      phoneNumber: "+8801770365981",
      email: "adittodev01770@example.com",
      district: "NY 10001",
      zone: "New York",
      addressLine: "Apt 4B",
      remark: "123 Main St",
      address: "123 Main St, Apt 4B, Chatmohar, Pabna",
    },
    {
      id: 2,
      type: "Work",
      fullName: "Koushik Barmon",
      phoneNumber: "+8801770365981",
      email: "adittodev01770@example.com",
      district: "456 Business Ave",
      zone: "Floor 12",
      addressLine: "New York",
      remark: "NY 10005",
      address: "456 Business Ave, Floor 12, Chatmohar, Pabna",
    },
  ]);

  return (
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-6 gap-4 py-6">
      {/* Customer Information */}
      <div className="md:col-span-2 border p-4 rounded">
        <h2 className="text-lg font-semibold mb-4">1. Customer Information</h2>
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => setAddress("exist")}
            className={`w-full py-2 rounded-md border  ${
              address === "exist" ? "bg-primary text-white" : ""
            }`}
          >
            Exist Address
          </button>
          <button
            onClick={() => setAddress("new")}
            className={`w-full py-2 rounded-md border ${
              address === "new" ? "bg-primary text-white" : ""
            }`}
          >
            New Address
          </button>
        </div>
        {address === "new" ? (
          <AddressForm />
        ) : (
          <div className="space-y-4">
            {addresses.map((address) => (
              <div
                key={address.id}
                className="border border-gray-200 rounded-lg p-4 transition-shadow bg-white"
              >
                <h3 className="font-medium text-gray-900">
                  {address.fullName}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {address.phoneNumber}
                </p>
                <p className="text-gray-700 mt-2">{address.address}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="md:col-span-2 border p-4 rounded space-y-4">
        {/* Payment Method */}
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

        {/* Delivery Method */}
        <div>
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
        </div>
      </div>

      {/* Order Summary */}
      <div className="md:col-span-2 border p-4 rounded">
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
      </div>
    </div>
  );
};

export default CheckoutSection;
