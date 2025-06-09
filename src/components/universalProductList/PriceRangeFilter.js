import { useEffect, useState } from "react";

export default function PriceRangeFilter({
  minPrice,
  maxPrice,
  priceRange,
  handlePriceChange,
}) {
  const [minInput, setMinInput] = useState(priceRange[0].toString());
  const [maxInput, setMaxInput] = useState(priceRange[1].toString());

  // Sync input fields with priceRange prop
  useEffect(() => {
    setMinInput(priceRange[0].toString());
    setMaxInput(priceRange[1].toString());
  }, [priceRange]);

  const handleInputChange = (e, setInput) => {
    const value = e.target.value;
    // Allow empty string or valid numeric input
    if (value === "" || !isNaN(Number(value))) {
      setInput(value);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter") {
      const value = e.target.value;
      if (value !== "" && !isNaN(Number(value))) {
        let numValue = Number(value);
        // Clamp to minPrice and maxPrice
        numValue = Math.max(minPrice, Math.min(maxPrice, numValue));
        // Adjust based on min <= max requirement
        if (index === 0 && numValue > priceRange[1]) {
          numValue = priceRange[1]; // Set min to current max
        } else if (index === 1 && numValue < priceRange[0]) {
          numValue = priceRange[0]; // Set max to current min
        }
        handlePriceChange(numValue, index);
      } else if (value === "") {
        // Set to minPrice or maxPrice if empty
        handlePriceChange(index === 0 ? minPrice : maxPrice, index);
      }
    }
  };

  const handleSliderChange = (e, index) => {
    const value = Number(e.target.value);
    // Ensure min <= max for slider changes
    if (index === 0 && value <= priceRange[1]) {
      handlePriceChange(value, index);
    } else if (index === 1 && value >= priceRange[0]) {
      handlePriceChange(value, index);
    }
  };

  return (
    <div className="w-full relative space-y-4 mb-4 border rounded-md">
      <h3 className="text-[#000] font-semibold p-3 border-b">Price Range</h3>
      <div className="px-4 py-2 space-y-6">
        {/* Range Sliders */}
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
            onChange={(e) => handleSliderChange(e, 0)}
            className="absolute w-full h-2 appearance-none bg-transparent outline-none pointer-events-auto"
            style={{ zIndex: 2 }}
          />
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={priceRange[1]}
            onChange={(e) => handleSliderChange(e, 1)}
            className="absolute w-full h-2 appearance-none bg-transparent outline-none pointer-events-auto"
            style={{ zIndex: 2 }}
          />
        </div>
        {/* Text Inputs */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={minInput}
            onChange={(e) => handleInputChange(e, setMinInput)}
            onKeyDown={(e) => handleKeyDown(e, 0)}
            placeholder={minPrice.toString()}
            className="w-full p-1 border outline-none rounded-md text-center"
          />
          <span>-</span>
          <input
            type="text"
            value={maxInput}
            onChange={(e) => handleInputChange(e, setMaxInput)}
            onKeyDown={(e) => handleKeyDown(e, 1)}
            placeholder={maxPrice.toString()}
            className="w-full p-1 border outline-none rounded-md text-center"
          />
        </div>
      </div>
    </div>
  );
}
