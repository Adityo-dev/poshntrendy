const addresses = [
  { type: "Home", address: "123 Main St, Apt 4B, New York, NY 10001" },
  { type: "Work", address: "456 Business Ave, Floor 12, New York, NY 10005" },
];

function Address() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold mb-4">Saved Addresses</h2>
        <button className="bg-primary text-xs text-white px-2 py-1.5 rounded-lg hover:bg-opacity-90 transition">
          Add New Address
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {addresses.map((address, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 hover:shadow-md transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded mb-2">
                  {address.type}
                </span>
                <p className="text-gray-700">{address.address}</p>
              </div>
              <div className="flex space-x-2">
                <button className="text-primary hover:text-primary-dark text-sm">
                  Edit
                </button>
                <button className="text-red-500 hover:text-red-700 text-sm">
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Address;
