function PriceRangeFilter({
  products,
  minPrice,
  maxPrice,
  priceRange,
  handlePriceChange,
}) {
  return (
    <div className="w-full relative space-y-4 mb-4 border rounded-md">
      <h3 className="text-[#000] font-semibold p-3 border-b">Price Range</h3>
      <div className="px-4 py-2 space-y-6">
        <div className="relative w-full h-2">
          <div className="absolute w-full h-2 bg-gray-200 rounded"></div>
          <div
            className="absolute h-2 bg-[#E60CD9] rounded"
            style={{
              left: `${
                ((priceRange[0] - minPrice) / (maxPrice - minPrice)) * 100
              }%`,
              width: `${
                ((priceRange[1] - priceRange[0]) / (maxPrice - minPrice)) * 100
              }%`,
            }}
          />
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={priceRange[0]}
            onChange={(e) => handlePriceChange(e, 0)}
            className="absolute w-full h-2 appearance-none bg-transparent outline-none pointer-events-auto"
            style={{ zIndex: 2 }}
          />
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(e, 1)}
            className="absolute w-full h-2 appearance-none bg-transparent outline-none pointer-events-auto"
            style={{ zIndex: 2 }}
          />
        </div>
        {products.some((p) => p.price) && (
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={priceRange[0]}
              onChange={(e) => handlePriceChange(e, 0)}
              placeholder={minPrice.toString()}
              className="w-full p-1 border outline-none rounded-md text-center"
            />
            <span>-</span>
            <input
              type="text"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(e, 1)}
              placeholder={maxPrice.toString()}
              className="w-full p-1 border outline-none rounded-md text-center"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default PriceRangeFilter;
