import CollectionShowcase from "@/components/collectionShowcase/CollectionShowcase";
import { Products } from "@/data/Products";
import { filterProductsByKey } from "@/utils/filterProductsByKey";

function BestSellers() {
  const bestSellers = filterProductsByKey(Products, "isBestSellers");

  return (
    <CollectionShowcase
      title={"Best Sellers"}
      showProducts={3}
      products={bestSellers}
    />
  );
}

export default BestSellers;
