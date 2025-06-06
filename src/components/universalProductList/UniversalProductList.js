"use client";

import { Accordion } from "@/components/ui/accordion";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FilterAccordion } from "./FilterAccordion";
import Pagination from "./Pagination";
import PriceRangeFilter from "./PriceRangeFilter";
import ProductsGrid from "./ProductsGrid";
import Show from "./Show";
import SortBy from "./SortBy";
// Sample product data (unchanged)
import { Products as products } from "@/data/Products";

export default function UniversalProductList({ params: pageName }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Filter states
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedAvailability, setSelectedAvailability] = useState([]);
  const minPrice = Math.min(...products.map((p) => p.price));
  const maxPrice = Math.max(...products.map((p) => p.price));
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(12); // Dynamic products per page
  const [sortBy, setSortBy] = useState("default"); // Sorting state

  // Available options for products per page
  const productsPerPageOptions = [12, 18, 20, 25];

  // Pagination settings
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Dynamically extract filter options from products
  const categories = [
    ...new Set(products.map((p) => p.category).filter(Boolean)),
  ];
  const brands = [...new Set(products.map((p) => p.brand).filter(Boolean))];
  const colors = [...new Set(products.flatMap((p) => p.color).filter(Boolean))];
  const sizes = [...new Set(products.flatMap((p) => p.size).filter(Boolean))];
  const availabilityOptions = ["In Stock", "Low Stock", "Out of Stock"];

  // Function to determine availability status based on stock
  const getAvailabilityStatus = (stock) => {
    if (stock === 0) return "Out of Stock";
    if (stock >= 1 && stock <= 5) return "Low Stock";
    return "In Stock";
  };

  // Load filters, page, products per page, and sort from URL on mount
  useEffect(() => {
    const filter = searchParams.get("filter")?.split(",").filter(Boolean) || [];
    const price = searchParams.get("price")?.split("-").map(Number) || [
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
    setPriceRange(price.length === 2 ? price : [minPrice, maxPrice]);
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    setProductsPerPage(productsPerPageOptions.includes(perPage) ? perPage : 12);
    setSortBy(
      ["default", "high-to-low", "low-to-high"].includes(sort)
        ? sort
        : "default"
    );
  }, [searchParams]);

  // Update URL when filters, page, products per page, or sort change
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
      params.set("price", `${priceRange[0]}-${priceRange[1]}`);
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

    router.push(`/${pageName}?${params.toString()}`, { scroll: false });
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
  ]);

  // Handle filter changes
  const handleFilterChange = (value, setFilter) => {
    setFilter((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
    setCurrentPage(1);
  };

  // Handle price range change
  const handlePriceChange = (e, index) => {
    const value = Number(e.target.value) || 0;
    setPriceRange((prev) => {
      const newRange = [...prev];
      newRange[index] = value;
      if (index === 0 && value > newRange[1]) {
        newRange[1] = value;
      } else if (index === 1 && value < newRange[0]) {
        newRange[0] = value;
      }
      return newRange;
    });
    setCurrentPage(1);
  };

  // Handle products per page change
  const handleProductsPerPageChange = (e) => {
    const newPerPage = Number(e.target.value);
    setProductsPerPage(newPerPage);
    setCurrentPage(1);
  };

  // Handle sort change
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setCurrentPage(1);
  };

  // Handle page change with delayed scroll
  const handlePageChange = (page) => {
    setCurrentPage(page);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  // Filter and sort products
  const filteredProducts = products
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
      if (sortBy === "high-to-low") {
        return b.price - a.price;
      } else if (sortBy === "low-to-high") {
        return a.price - b.price;
      }
      return 0; // Default: no sorting
    });

  // Paginate filtered products
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );
  const filteredTotalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  return (
    <div className="container mx-auto px-4 py-6 flex gap-6">
      {/* Sidebar Filters */}
      <div className="w-[325px] h-fit">
        {/* Price Range Filter */}
        <PriceRangeFilter
          products={products}
          minPrice={minPrice}
          maxPrice={maxPrice}
          priceRange={priceRange}
          handlePriceChange={handlePriceChange}
        />
        {/* Accordion for Filters */}
        <Accordion
          defaultValue="availability"
          type="multiple"
          collapsible
          className="w-full space-y-2"
        >
          {/* Availability Filter */}
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

          {/* Category Filter */}
          <FilterAccordion
            title="Category"
            options={categories}
            selectedOptions={selectedCategories}
            onChange={(option) =>
              handleFilterChange(option, setSelectedCategories)
            }
            valueKey="categories"
          />

          {/* Brand Filter */}
          <FilterAccordion
            title="Brand"
            options={brands}
            selectedOptions={selectedBrands}
            onChange={(option) => handleFilterChange(option, setSelectedBrands)}
            valueKey="brands"
          />

          {/* Color Filter */}
          <FilterAccordion
            title="Color"
            options={colors}
            selectedOptions={selectedColors}
            onChange={(option) => handleFilterChange(option, setSelectedColors)}
            valueKey="colors"
          />

          {/* Size Filter  */}
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
          {/* Product Grid */}
          <ProductsGrid paginatedProducts={paginatedProducts} />
          {/* Pagination */}
          <Pagination
            filteredTotalPages={filteredTotalPages}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}
