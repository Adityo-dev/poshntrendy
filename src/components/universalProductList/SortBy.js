function SortBy({ sortBy, handleSortChange }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600">Sort By:</span>
      <select
        value={sortBy}
        onChange={handleSortChange}
        className="p-1 border rounded-md text-sm"
      >
        <option value="default">Default</option>
        <option value="high-to-low">Price: High to Low</option>
        <option value="low-to-high">Price: Low to High</option>
      </select>
    </div>
  );
}

export default SortBy;
