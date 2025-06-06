"use client";
import CustomerInformation from "./CustomerInformation";
import DeliveryMethod from "./DeliveryMethod";
import OrderSummary from "./OrderSummary";
import PaymentMethod from "./PaymentMethod";

const CheckoutSection = () => {
  return (
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-6 gap-4 py-6">
      <div className="md:col-span-2 border p-4 rounded">
        <CustomerInformation />
      </div>
      <div className="md:col-span-2 border p-4 rounded space-y-4">
        <PaymentMethod />
        <DeliveryMethod />
      </div>
      <div className="md:col-span-2 border p-4 rounded">
        <OrderSummary />
      </div>
    </div>
  );
};

export default CheckoutSection;
