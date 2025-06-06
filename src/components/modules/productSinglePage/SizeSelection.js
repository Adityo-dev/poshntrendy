"use client";
import { useEffect, useState } from "react";

function SizeSelection() {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedPantType, setSelectedPantType] = useState(null); // For NORMAL/SALWAR under STITCH
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedSleeve, setSelectedSleeve] = useState(null);
  const [selectedPant, setSelectedPant] = useState(null);
  console.log(
    selectedType,
    selectedPantType,
    selectedSize,
    selectedSleeve,
    selectedPant
  );

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setSelectedPantType(null);
    setSelectedSize(null);
    setSelectedSleeve(null);
    setSelectedPant(null);
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
    setSelectedPant(null);
  };

  const handleSleeveSelect = (sleeve) => {
    setSelectedSleeve(sleeve);
  };

  const handlePantSelect = (pant) => {
    setSelectedPant(pant);
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
      if (size === "32" || size === "34")
        return [
          { label: "NORMAL", value: "34" },
          { label: "SALWAR", value: "35" },
        ];
      if (size === "36")
        return [
          { label: "NORMAL", value: "35" },
          { label: "SALWAR", value: "36" },
        ];
      if (size === "38")
        return [
          { label: "NORMAL", value: "36" },
          { label: "SALWAR", value: "37" },
        ];
      return [
        { label: "NORMAL", value: "37" },
        { label: "SALWAR", value: "38" },
      ];
    } else {
      if (size === "36")
        return [
          { label: "NORMAL", value: "37" },
          { label: "SALWAR", value: "38" },
        ];
      if (size === "38")
        return [
          { label: "NORMAL", value: "38" },
          { label: "SALWAR", value: "39" },
        ];
      if (size === "40")
        return [
          { label: "NORMAL", value: "38" },
          { label: "SALWAR", value: "39" },
        ];
      if (size === "42")
        return [
          { label: "NORMAL", value: "38" },
          { label: "SALWAR", value: "39" },
        ];
      return [
        { label: "NORMAL", value: "40" },
        { label: "SALWAR", value: "41" },
      ];
    }
  };

  // Filter sizes based on selectedPantType
  const filteredSizes =
    selectedType === "UNSTITCH" ? unstitchedSizes : stitchedSizes;

  // Debugging: Log state changes
  useEffect(() => {
    console.log("Selected Type:", selectedType);
    console.log("Selected Pant Type:", selectedPantType);
  }, [selectedType, selectedPantType]);

  return (
    <div className="mb-4">
      <p className="text-base font-semibold mb-3 text-[#605F5F]">
        Select your size
        <span className="font-normal"> What's my size?</span>
      </p>

      {/* STITCH/UNSTITCH selection */}
      <div className="flex gap-3 mb-4">
        {["STITCH", "UNSTITCH"].map((size) => (
          <button
            key={size}
            className={`px-4 py-2 border border-[#605F5F] text-base font-bold rounded-[6px] cursor-pointer ${
              selectedType === size ? "bg-[#E60CD9] text-white" : ""
            }`}
            onClick={() => handleTypeSelect(size)}
          >
            {size}
          </button>
        ))}
      </div>

      {/* NORMAL/SALWAR selection (shown only if STITCH is selected) */}
      {selectedType === "STITCH" && (
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
      )}

      {/* Size table (shown only if STITCH and NORMAL/SALWAR is selected) */}
      {selectedType === "STITCH" && selectedPantType && (
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-sm">
                <th className="p-2 border">SIZE (INCHES)</th>
                <th className="p-2 border">CHEST (✔️)</th>
                <th className="p-2 border">LENGTH (✔️/✔️)</th>
                <th className="p-2 border">SLEEVE (3 QUARTER/FULL)</th>
                <th className="p-2 border">PANT (NORMAL/SALWAR)</th>
              </tr>
            </thead>
            <tbody>
              {filteredSizes.map((size) => (
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
                    <div>
                      {selectedSize === size ? (
                        getSleeveOptions(size).map((sleeve) => (
                          <button
                            key={sleeve}
                            className={`px-2 border rounded m-1 ${
                              selectedSleeve === sleeve
                                ? "bg-[#E60CD9] text-white"
                                : ""
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSleeveSelect(sleeve);
                            }}
                          >
                            {sleeve}
                          </button>
                        ))
                      ) : (
                        <span>{getSleeveOptions(size).join("/")}</span>
                      )}
                    </div>
                  </td>
                  <td className="border text-center">
                    <div>
                      {selectedSize === size ? (
                        getPantOptions(size)
                          .filter((pant) => pant.label === selectedPantType)
                          .map((pant) => (
                            <button
                              key={pant.value}
                              className={`px-2 border rounded m-1 ${
                                selectedPant === pant.value
                                  ? "bg-[#E60CD9] text-white"
                                  : ""
                              }`}
                              onClick={(e) => {
                                e.stopPropagation();
                                handlePantSelect(pant.value);
                              }}
                            >
                              {pant.label}
                            </button>
                          ))
                      ) : (
                        <span>
                          {getPantOptions(size)
                            .filter((pant) => pant.label === selectedPantType)
                            .map((pant) => pant.value)
                            .join("/")}
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Selected options summary */}
      {(selectedSize || selectedSleeve || selectedPant) && (
        <div className="mt-4 p-3 bg-gray-100 rounded">
          <h4 className="mb-2">Selected Options:</h4>
          {selectedSize && <p>Size: {selectedSize}</p>}
          {selectedSleeve && <p>Sleeve: {selectedSleeve} inches</p>}
          {selectedPant && (
            <p>
              Pant:{" "}
              {
                getPantOptions(selectedSize).find(
                  (pant) => pant.value === selectedPant
                )?.label
              }{" "}
              ({selectedPant} inches)
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default SizeSelection;
