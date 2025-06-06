function Show({
  productsPerPage,
  handleProductsPerPageChange,
  productsPerPageOptions,
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600">Show:</span>
      <select
        value={productsPerPage}
        onChange={handleProductsPerPageChange}
        className="p-1 border rounded-md text-sm"
      >
        {productsPerPageOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Show;
