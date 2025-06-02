import Card from "./Card";
import CardSummary from "./CardSummary";
import PaymentMethods from "./PaymentMethods";
import PolicyNotice from "./PolicyNotice";

function CartSection({ cartData }) {
  return (
    <div className="container mx-auto px-4 grid grid-cols-12 gap-8 mt-12 pb-24">
      <div className="col-span-7">
        <Card cartData={cartData} />
        <PaymentMethods />
        <PolicyNotice />
      </div>
      <div className="col-span-5">
        <CardSummary />
      </div>
    </div>
  );
}

export default CartSection;
