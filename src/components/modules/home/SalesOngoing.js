import CollectionShowcase from "@/components/collectionShowcase/CollectionShowcase";
import { Products } from "@/data/Products";
import { filterProductsByKey } from "@/utils/filterProductsByKey";

function SalesOngoing() {
  const ongoingSale = filterProductsByKey(Products, "isOngoingSale");

  return (
    <CollectionShowcase
      bgColor="#FBF9FB"
      title={"sales ongoing"}
      showProducts={6}
      products={ongoingSale}
    />
  );
}

export default SalesOngoing;
