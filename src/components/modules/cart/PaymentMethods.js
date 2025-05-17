import Image from "next/image";

const paymentMethodsData = [
  {
    id: 1,
    icon: "/icons/visa.png",
    name: "VISA",
  },
  {
    id: 2,
    icon: "/icons/paypal.png",
    name: "PayPal",
  },
  {
    id: 3,
    icon: "/icons/google-pay.png",
    name: "Pay",
  },
  {
    id: 4,
    icon: "/icons/apple-pay.png",
    name: "Pay",
  },
];

function PaymentMethods() {
  return (
    <div className="w-full flex items-center justify-end mt-6">
      {/* <h3 className="text-lg font-bold mb-3">Payment Methods</h3> */}
      <div className="flex flex-wrap gap-4">
        {paymentMethodsData.map((method) => (
          <div
            key={method?.id}
            className="bg-[#fff] border rounded-sm py-1 px-2 min-w-20 flex flex-col items-center justify-center"
          >
            {method?.icon && (
              <Image
                src={method?.icon}
                alt={method?.name}
                width={50}
                height={50}
                className="w-12 h-8 object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PaymentMethods;
