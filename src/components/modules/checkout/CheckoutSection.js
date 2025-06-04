import CartSummary from "./CartSummary";
import CustomerInfo from "./CustomerInfo";
import PaymentMethod from "./PaymentMethod";

function CheckoutSection() {
  return (
    <div className="container mx-auto px-4 pt-6 pb-24 grid grid-cols-12 gap-10">
      <div className="col-span-7 space-y-12">
        <CustomerInfo />
        <PaymentMethod />
      </div>
      <div className="col-span-5">
        <CartSummary />
      </div>
    </div>
  );
}

export default CheckoutSection;
