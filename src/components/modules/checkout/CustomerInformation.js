import AddressForm from "@/components/manage/address/AddressFrom";
import { useState } from "react";

function CustomerInformation() {
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
    <>
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
              <h3 className="font-medium text-gray-900">{address.fullName}</h3>
              <p className="text-gray-600 text-sm mt-1">
                {address.phoneNumber}
              </p>
              <p className="text-gray-700 mt-2">{address.address}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default CustomerInformation;
