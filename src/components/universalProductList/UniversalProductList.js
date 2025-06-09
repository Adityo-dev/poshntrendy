"use client";

import { Accordion } from "@/components/ui/accordion";
import { Products as products } from "@/data/Products";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FilterAccordion } from "./FilterAccordion";
import Pagination from "./Pagination";
import PriceRangeFilter from "./PriceRangeFilter";
import ProductsGrid from "./ProductsGrid";
import Show from "./Show";
import SortBy from "./SortBy";

export default function UniversalProductList({ params }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageName = params || "new"; // Fix pageName assignment

  // Memoize minPrice and maxPrice to ensure stability
  const minPrice = useMemo(
    () => Math.min(...products.map((p) => p.price)),
    [products]
  );
  const maxPrice = useMemo(
    () => Math.max(...products.map((p) => p.price)),
    [products]
  );

  // Filter states
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedAvailability, setSelectedAvailability] = useState([]);
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(12);
  const [sortBy, setSortBy] = useState("default");

  // Available options for products per page
  const productsPerPageOptions = [12, 18, 20, 25];

  // Dynamically extract filter options
  const categories = useMemo(
    () => [...new Set(products.map((p) => p.category).filter(Boolean))],
    [products]
  );
  const brands = useMemo(
    () => [...new Set(products.map((p) => p.brand).filter(Boolean))],
    [products]
  );
  const colors = useMemo(
    () => [...new Set(products.flatMap((p) => p.color || []).filter(Boolean))],
    [products]
  );
  const sizes = useMemo(
    () => [...new Set(products.flatMap((p) => p.size || []).filter(Boolean))],
    [products]
  );
  const availabilityOptions = ["In Stock", "Low Stock", "Out of Stock"];

  // Function to determine availability status
  const getAvailabilityStatus = useCallback((stock) => {
    if (stock === 0) return "Out of Stock";
    if (stock >= 1 && stock <= 5) return "Low Stock";
    return "In Stock";
  }, []);

  // Load filters from URL on mount
  useEffect(() => {
    const filter = searchParams.get("filter")?.split(",").filter(Boolean) || [];
    const price = searchParams.get("filter_price")?.split("-").map(Number) || [
      minPrice,
      maxPrice,
    ];
    const page = Number(searchParams.get("page")) || 1;
    const perPage = Number(searchParams.get("perPage")) || 12;
    const sort = searchParams.get("sort") || "default";

    setSelectedCategories(filter.filter((id) => categories.includes(id)));
    setSelectedBrands(filter.filter((id) => brands.includes(id)));
    setSelectedColors(filter.filter((id) => colors.includes(id)));
    setSelectedSizes(filter.filter((id) => sizes.includes(id)));
    setSelectedAvailability(
      filter.filter((id) => availabilityOptions.includes(id))
    );
    setPriceRange(
      price.length === 2 && !isNaN(price[0]) && !isNaN(price[1])
        ? [Math.max(minPrice, price[0]), Math.min(maxPrice, price[1])]
        : [minPrice, maxPrice]
    );
    setCurrentPage(
      Math.max(1, Math.min(page, Math.ceil(products.length / perPage)))
    );
    setProductsPerPage(productsPerPageOptions.includes(perPage) ? perPage : 12);
    setSortBy(
      ["default", "high-to-low", "low-to-high"].includes(sort)
        ? sort
        : "default"
    );
  }, [searchParams, minPrice, maxPrice, categories, brands, colors, sizes]);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    const allFilters = [
      ...selectedCategories,
      ...selectedBrands,
      ...selectedColors,
      ...selectedSizes,
      ...selectedAvailability,
    ];

    if (allFilters.length > 0) {
      params.set("filter", allFilters.join(","));
    }
    if (priceRange[0] !== minPrice || priceRange[1] !== maxPrice) {
      params.set(
        "filter_price",
        `${Math.round(priceRange[0])}-${Math.round(priceRange[1])}`
      );
    }
    if (currentPage !== 1) {
      params.set("page", currentPage);
    }
    if (productsPerPage !== 12) {
      params.set("perPage", productsPerPage);
    }
    if (sortBy !== "default") {
      params.set("sort", sortBy);
    }

    const newUrl = `/${pageName}?${params.toString()}`;
    if (window.location.pathname + window.location.search !== newUrl) {
      router.push(newUrl, { scroll: false });
    }
  }, [
    selectedCategories,
    selectedBrands,
    selectedColors,
    selectedSizes,
    selectedAvailability,
    priceRange,
    currentPage,
    productsPerPage,
    sortBy,
    router,
    pageName,
    minPrice,
    maxPrice,
  ]);

  // Handle filter changes
  const handleFilterChange = useCallback((value, setFilter) => {
    setFilter((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
    setCurrentPage(1);
  }, []);

  // Handle price range change
  const handlePriceChange = useCallback((value, index) => {
    setPriceRange((prev) => {
      const newRange = [...prev];
      newRange[index] = value;
      return newRange;
    });
    setCurrentPage(1);
  }, []);

  // Handle products per page change
  const handleProductsPerPageChange = useCallback((e) => {
    const newPerPage = Number(e.target.value);
    setProductsPerPage(newPerPage);
    setCurrentPage(1);
  }, []);

  // Handle sort change
  const handleSortChange = useCallback((e) => {
    setSortBy(e.target.value);
    setCurrentPage(1);
  }, []);

  // Handle page change
  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    }, 100);
  }, []);

  // Filter and sort products
  const filteredProducts = useMemo(
    () =>
      products
        .filter((product) => {
          const categoryMatch =
            selectedCategories.length === 0 ||
            selectedCategories.includes(product.category);
          const brandMatch =
            selectedBrands.length === 0 ||
            !product.brand ||
            selectedBrands.includes(product.brand);
          const colorMatch =
            selectedColors.length === 0 ||
            !product.color ||
            product.color.some((c) => selectedColors.includes(c));
          const sizeMatch =
            selectedSizes.length === 0 ||
            !product.size ||
            product.size.some((s) => selectedSizes.includes(s));
          const priceMatch =
            product.price >= priceRange[0] && product.price <= priceRange[1];
          const availabilityMatch =
            selectedAvailability.length === 0 ||
            selectedAvailability.includes(getAvailabilityStatus(product.stock));
          return (
            categoryMatch &&
            brandMatch &&
            colorMatch &&
            sizeMatch &&
            priceMatch &&
            availabilityMatch
          );
        })
        .sort((a, b) => {
          if (sortBy === "high-to-low") return b.price - a.price;
          if (sortBy === "low-to-high") return a.price - b.price;
          return 0;
        }),
    [
      selectedCategories,
      selectedBrands,
      selectedColors,
      selectedSizes,
      selectedAvailability,
      priceRange,
      sortBy,
      getAvailabilityStatus,
      products,
    ]
  );

  // Paginate filtered products
  const paginatedProducts = useMemo(
    () =>
      filteredProducts.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
      ),
    [filteredProducts, currentPage, productsPerPage]
  );
  const filteredTotalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  return (
    <div className="container mx-auto px-4 py-6 flex gap-6">
      {/* Sidebar Filters */}
      <div className="w-[325px] h-fit">
        <PriceRangeFilter
          minPrice={minPrice}
          maxPrice={maxPrice}
          priceRange={priceRange}
          handlePriceChange={handlePriceChange}
        />
        <Accordion
          defaultValue="availability"
          type="multiple"
          collapsible
          className="w-full space-y-2"
        >
          {products.some((p) => p.stock !== undefined) && (
            <FilterAccordion
              title="Availability"
              options={availabilityOptions}
              selectedOptions={selectedAvailability}
              onChange={(option) =>
                handleFilterChange(option, setSelectedAvailability)
              }
              valueKey="availability"
            />
          )}
          <FilterAccordion
            title="Category"
            options={categories}
            selectedOptions={selectedCategories}
            onChange={(option) =>
              handleFilterChange(option, setSelectedCategories)
            }
            valueKey="categories"
          />
          <FilterAccordion
            title="Brand"
            options={brands}
            selectedOptions={selectedBrands}
            onChange={(option) => handleFilterChange(option, setSelectedBrands)}
            valueKey="brands"
          />
          <FilterAccordion
            title="Color"
            options={colors}
            selectedOptions={selectedColors}
            onChange={(option) => handleFilterChange(option, setSelectedColors)}
            valueKey="colors"
          />
          <FilterAccordion
            title="Size"
            options={sizes}
            selectedOptions={selectedSizes}
            onChange={(option) => handleFilterChange(option, setSelectedSizes)}
            valueKey="sizes"
          />
        </Accordion>
      </div>

      {/* Right Section */}
      <div className="space-y-4 w-full h-fit">
        <div className="flex justify-between items-center border rounded-md p-2.5">
          <h1 className="text-xl font-semibold capitalize">{pageName}</h1>
          <div className="flex items-center gap-4">
            <Show
              productsPerPage={productsPerPage}
              handleProductsPerPageChange={handleProductsPerPageChange}
              productsPerPageOptions={productsPerPageOptions}
            />
            <SortBy sortBy={sortBy} handleSortChange={handleSortChange} />
          </div>
        </div>
        {/* Main Section */}
        <div className="w-full h-full">
          {paginatedProducts.length === 0 ? (
            <div className="text-center py-10">
              <h2 className="text-2xl font-semibold text-gray-600">
                No Products Found
              </h2>
              <p className="text-gray-500 mt-2">
                Try adjusting your filters to find more products.
              </p>
            </div>
          ) : (
            <>
              <ProductsGrid paginatedProducts={paginatedProducts} />
              <Pagination
                filteredTotalPages={filteredTotalPages}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
