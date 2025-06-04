function Tbody({ orders }) {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {orders.map((order) => (
        <tr key={order.id}>
          <td className="py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {order.id}
          </td>
          <td className="py-4 whitespace-nowrap text-sm text-gray-500">
            {order.date}
          </td>
          <td className="py-4 whitespace-nowrap text-sm">
            <span
              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                              ${
                                order.status === "Delivered"
                                  ? "bg-green-100 text-green-800"
                                  : order.status === "Shipped"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-gray-100 text-gray-800"
                              }`}
            >
              {order.status}
            </span>
          </td>
          <td className="py-4 whitespace-nowrap text-sm text-gray-500">
            {order.total}
          </td>
          <td className="py-4 whitespace-nowrap text-sm text-gray-500">
            <button className="text-primary hover:text-primary-dark">
              View Details
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default Tbody;
