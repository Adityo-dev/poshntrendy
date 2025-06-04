import { useState } from "react";
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
      address: "123 Main St, Apt 4B, New York, NY 10001",
    },
    {
      id: 2,
      type: "Work",
      fullName: "John Doe",
      phoneNumber: "+8801770365981",
      email: "adittodev01770@example.com",
      district: "456 Business Ave",
      zone: "Floor 12",
      addressLine: "New York",
      remark: "NY 10005",
      address: "456 Business Ave, Floor 12, New York, NY 10005",
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
                address: `${newAddress.remark}, ${newAddress.addressLine}, ${newAddress.district}, ${newAddress.zone}`,
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
          address: `${newAddress.remark}, ${newAddress.addressLine}, ${newAddress.district}, ${newAddress.zone}`,
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
    <div>
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

      {isAddNew ? (
        <AddressForm
          onSubmit={handleNewAddress}
          initialData={editingAddress || undefined}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {addresses.map((address) => (
            <div
              key={address.id}
              className="border border-gray-200 rounded-lg p-4 transition-shadow bg-white"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full mb-2">
                    {address.type}
                  </span>
                  <h3 className="font-medium text-gray-900">
                    {address.fullName}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {address.phoneNumber}
                  </p>
                  <p className="text-gray-700 mt-2">{address.address}</p>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleEdit(address?.id)}
                    className="text-primary hover:text-primary-dark text-sm font-medium"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleRemoveAddress(address?.id)}
                    className="text-red-600 text-sm font-medium"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
