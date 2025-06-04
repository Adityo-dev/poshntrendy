import Empty from "../Empty";
import Tbody from "./Tbody";
import Thead from "./Thead";

const orders = [
  {
    id: "#ORD-1234",
    date: "Jun 12, 2025",
    status: "Delivered",
    total: "$149.97",
  },
  {
    id: "#ORD-1233",
    date: "May 28, 2025",
    status: "Shipped",
    total: "$89.98",
  },
  {
    id: "#ORD-1232",
    date: "May 15, 2025",
    status: "Completed",
    total: "$199.95",
  },
];

function Orders() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Order History</h2>
      <div className="overflow-x-auto">
        {orders.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-200">
            <Thead />
            <Tbody orders={orders} />
          </table>
        ) : (
          <Empty
            title={"You have no orders!"}
            description={
              "Congratulations! Your orders have taken a vacation, and they're all chilling on a sunny beach somewhere, sipping digital cocktails. Don't worry; they'll be back soon to join the party! 🏖️🍹😄"
            }
          />
        )}
      </div>
    </div>
  );
}

export default Orders;
