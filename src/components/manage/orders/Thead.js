function Thead() {
  return (
    <thead className="bg-gray-50">
      <tr>
        <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase">
          Order ID
        </th>
        <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase">
          Date
        </th>
        <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase">
          Status
        </th>
        <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase">
          Total
        </th>
        <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase">
          Action
        </th>
      </tr>
    </thead>
  );
}

export default Thead;
