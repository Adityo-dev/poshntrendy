import { useState } from "react";
import Empty from "../Empty";
import AddressCard from "./AddressCard";
import AddressForm from "./AddressFrom";

export default function Address() {
  const [isAddNew, setIsAddNew] = useState(false);
  const [editingId, setEditingId] = useState(false);
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

  const handleAddNew = () => setIsAddNew(!isAddNew);

  const handleEdit = (id) => {
    setEditingId(id);
    setIsAddNew(true);
  };

  const handleNewAddress = (newAddress) => {
    if (editingId) {
      // Update existing address
      setAddresses((prev) =>
        prev.map((addr) =>
          addr?.id === editingId
            ? {
                ...addr,
                ...newAddress,
                address: `${newAddress.remark}, ${newAddress.addressLine}, ${newAddress.zone}, ${newAddress.district}`,
              }
            : addr
        )
      );
      setEditingId(null);
      setIsAddNew(false);
    } else {
      // Create new address
      setAddresses((prev) => [
        ...prev,
        {
          ...newAddress,
          id: Date.now(),
          address: `${newAddress.remark}, ${newAddress.addressLine}, ${newAddress.zone}, ${newAddress.district}`,
        },
      ]);
      setIsAddNew(false);
      setEditingId(null);
    }
  };

  const handleRemoveAddress = (id) => {
    setAddresses((prev) => prev.filter((address) => address.id !== id));
  };

  const editingAddress = editingId
    ? addresses.find((addr) => addr.id === editingId)
    : null;

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          {isAddNew
            ? editingId
              ? "Update Address"
              : "Create New Address"
            : "Address Book"}
        </h2>
        {isAddNew ? (
          <button
            onClick={handleAddNew}
            className="text-primary hover:text-primary-dark font-medium"
          >
            ← Back to Address Book
          </button>
        ) : (
          <button
            onClick={handleAddNew}
            className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors"
          >
            Add New Address
          </button>
        )}
      </div>

      {addresses.length > 0 ? (
        <div>
          {isAddNew ? (
            <AddressForm
              onSubmit={handleNewAddress}
              initialData={editingAddress || undefined}
            />
          ) : (
            <AddressCard
              addresses={addresses}
              onHandleEdit={handleEdit}
              onHandleRemoveAddress={handleRemoveAddress}
            />
          )}
        </div>
      ) : (
        <Empty
          title={"No address found!"}
          description={
            "Looks like your address is still deciding where it wants to live — maybe it's traveling the world or chilling in the cloud! 🌍☁️🏡"
          }
        />
      )}
    </>
  );
}
