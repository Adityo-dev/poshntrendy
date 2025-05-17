import Link from "next/link";

function PolicyNotice() {
  return (
    <div className="w-full space-y-4 mt-16">
      <ul className="text-[#000] list-disc pl-5 space-y-2">
        <li>
          Once your order has been placed no subsequent changes can be made in
          it.
        </li>
        <li>Shipping cost may vary depending on the delivery destination.</li>
        <li>
          Please check the final amount on the order summary page before
          completing the payment.
        </li>
        <li>An items price may vary according to the size selected.</li>
      </ul>

      <div className="flex flex-wrap gap-5 pt-2 text-sm font-semibold">
        <Link href={"#"} className="cursor-pointer hover:underline">
          SHIPPING POLICY
        </Link>
        <Link href={"#"} className="cursor-pointer hover:underline">
          HELP
        </Link>
        <Link href={"#"} className="cursor-pointer hover:underline">
          CONTACT US
        </Link>
      </div>
    </div>
  );
}

export default PolicyNotice;
