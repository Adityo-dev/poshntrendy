"use client";
import { useState } from "react";

function SizeSelection() {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedPantType, setSelectedPantType] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedSleeve, setSelectedSleeve] = useState(null);
  const [selectedPant, setSelectedPant] = useState(null);
  const [selectedPantStyle, setSelectedPantStyle] = useState(null);

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setSelectedPantType(null);
    setSelectedSize(null);
    setSelectedSleeve(null);
    setSelectedPant(null);
    setSelectedPantStyle(null);
  };

  const handlePantTypeSelect = (pantType) => {
    setSelectedPantType(pantType);
    setSelectedSize(null);
    setSelectedSleeve(null);
    setSelectedPant(null);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setSelectedSleeve(null);
    // Set pant value based on size and type
    const pantOptions = getPantOptions(size);
    setSelectedPant(pantOptions[0].value);
  };

  const handleSleeveSelect = (sleeve, e) => {
    e.stopPropagation();
    setSelectedSleeve(sleeve);
  };

  const handlePantStyleSelect = (style, e) => {
    e.stopPropagation();
    setSelectedPantStyle(style);
  };

  const unstitchedSizes = [
    "32",
    "34",
    "36",
    "38",
    "40",
    "42",
    "44",
    "46",
    "48",
  ];

  const stitchedSizes = ["36", "38", "40", "42", "44", "46", "48"];

  const getSleeveOptions = (size) => {
    if (selectedType === "UNSTITCH") {
      if (size === "32") return ["15.5", "18.5"];
      if (size === "34") return ["16", "19"];
      if (size === "36") return ["17", "20"];
      if (size === "38") return ["18", "21"];
      if (size === "40") return ["18", "21"];
      if (size === "42") return ["18.5", "22"];
      if (size === "44") return ["19", "22"];
      return ["19", "22.5"];
    } else {
      if (size === "36") return ["17", "20"];
      if (size === "38") return ["18", "21"];
      if (size === "40") return ["18", "21"];
      if (size === "42") return ["18.5", "22"];
      return ["19", "22"];
    }
  };

  const getPantOptions = (size) => {
    if (selectedType === "UNSTITCH") {
      // For UNSTITCH, return single option with same value for both styles
      if (size === "32" || size === "34")
        return [{ label: "PANT", value: "34" }];
      if (size === "36") return [{ label: "PANT", value: "35" }];
      if (size === "38") return [{ label: "PANT", value: "36" }];
      return [{ label: "PANT", value: "37" }];
    } else {
      // For STITCH, return based on selectedPantType
      if (selectedPantType === "NORMAL") {
        if (size === "36") return [{ label: "NORMAL", value: "37" }];
        if (size === "38") return [{ label: "NORMAL", value: "38" }];
        if (size === "40") return [{ label: "NORMAL", value: "38" }];
        if (size === "42") return [{ label: "NORMAL", value: "38" }];
        return [{ label: "NORMAL", value: "40" }];
      } else {
        if (size === "36") return [{ label: "SALWAR", value: "38" }];
        if (size === "38") return [{ label: "SALWAR", value: "39" }];
        if (size === "40") return [{ label: "SALWAR", value: "39" }];
        if (size === "42") return [{ label: "SALWAR", value: "39" }];
        return [{ label: "SALWAR", value: "41" }];
      }
    }
  };

  const filteredSizes =
    selectedType === "UNSTITCH" ? unstitchedSizes : stitchedSizes;

  return (
    <div className="mb-4">
      <p className="text-base font-semibold mb-3 text-[#605F5F]">
        Select your size
        <span className="font-normal"> What's my size?</span>
      </p>

      {/* STITCH/UNSTITCH selection */}
      <div className="flex gap-3 mb-4">
        {["STITCH", "UNSTITCH"].map((type) => (
          <button
            key={type}
            className={`px-6 py-2 border border-[#605F5F] text-base font-bold rounded-[6px] cursor-pointer ${
              selectedType === type ? "bg-[#E60CD9] text-white" : ""
            }`}
            onClick={() => handleTypeSelect(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {/* NORMAL/SALWAR selection (shown only if STITCH is selected) */}
      {selectedType === "STITCH" && (
        <>
          <div className="flex gap-3 mb-4">
            {["NORMAL", "SALWAR"].map((pantType) => (
              <button
                key={pantType}
                className={`px-4 py-2 border border-[#605F5F] text-base font-bold rounded-[6px] cursor-pointer ${
                  selectedPantType === pantType ? "bg-[#E60CD9] text-white" : ""
                }`}
                onClick={() => handlePantTypeSelect(pantType)}
              >
                {pantType}
              </button>
            ))}
          </div>

          {/* Size table (shown when pant type is selected) */}
          {selectedPantType && (
            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-xs">
                    <th className="p-1.5 border">SIZE (INCHES)</th>
                    <th className="p-1.5 border">CHEST (✔️)</th>
                    <th className="p-1.5 border">LENGTH (✔️/✔️)</th>
                    <th className="p-1.5 border">SLEEVE (3 QUARTER/FULL)</th>
                    <th className="p-1.5 border">
                      PANT (PANT/NORMAL-SALWAR) / PANT
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSizes.map((size) => {
                    const pantOptions = getPantOptions(size);
                    const sleeveOptions = getSleeveOptions(size);

                    return (
                      <tr
                        key={size}
                        className={`cursor-pointer ${
                          selectedSize === size ? "bg-[#E60CD9] text-white" : ""
                        }`}
                        onClick={() => handleSizeSelect(size)}
                      >
                        <td className="border text-center">{size}</td>
                        <td className="border text-center">{size}</td>
                        <td className="border text-center">
                          {size === "36" ? "44" : "45"}
                        </td>
                        <td className="border text-center">
                          {selectedSize === size ? (
                            <div className="flex justify-center gap-1">
                              {sleeveOptions.map((sleeve) => (
                                <button
                                  key={sleeve}
                                  className={`px-2 border rounded ${
                                    selectedSleeve === sleeve
                                      ? "bg-white text-[#E60CD9]"
                                      : ""
                                  }`}
                                  onClick={(e) => handleSleeveSelect(sleeve, e)}
                                >
                                  {sleeve}
                                </button>
                              ))}
                            </div>
                          ) : (
                            <span>{sleeveOptions.join("/")}</span>
                          )}
                        </td>
                        <td className="border text-center">
                          {selectedSize === size ? (
                            <div className="flex justify-center gap-1">
                              <button
                                className={`px-2 border rounded ${
                                  selectedPantStyle === "PANT"
                                    ? "bg-white text-[#E60CD9]"
                                    : ""
                                }`}
                                onClick={(e) =>
                                  handlePantStyleSelect("PANT", e)
                                }
                              >
                                PANT
                              </button>
                              <button
                                className={`px-2 border rounded ${
                                  selectedPantStyle === "NORMAL-SALWAR"
                                    ? "bg-white text-[#E60CD9]"
                                    : ""
                                }`}
                                onClick={(e) =>
                                  handlePantStyleSelect("NORMAL-SALWAR", e)
                                }
                              >
                                NORMAL-SALWAR
                              </button>
                            </div>
                          ) : (
                            <span>{pantOptions[0].value}</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}

      {/* Selected options summary */}
      {(selectedSize || selectedSleeve || selectedPant) && (
        <div className="mt-4 p-3 bg-gray-100 rounded">
          <h4 className="mb-2">Selected Options:</h4>
          {selectedSize && <p>Size: {selectedSize}</p>}
          {selectedSleeve && <p>Sleeve: {selectedSleeve} inches</p>}
          {selectedPant && (
            <p>
              {selectedType === "STITCH" ? (
                <>
                  Pant: {selectedPantStyle} ({selectedPant} inches)
                </>
              ) : (
                ""
              )}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default SizeSelection;
