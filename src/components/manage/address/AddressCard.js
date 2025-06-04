function AddressCard({ addresses, onHandleEdit, onHandleRemoveAddress }) {
  return (
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
              <h3 className="font-medium text-gray-900">{address.fullName}</h3>
              <p className="text-gray-600 text-sm mt-1">
                {address.phoneNumber}
              </p>
              <p className="text-gray-700 mt-2">{address.address}</p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => onHandleEdit(address?.id)}
                className="text-primary hover:text-primary-dark text-sm font-medium"
              >
                Edit
              </button>
              <button
                onClick={() => onHandleRemoveAddress(address?.id)}
                className="text-red-600 text-sm font-medium"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AddressCard;
