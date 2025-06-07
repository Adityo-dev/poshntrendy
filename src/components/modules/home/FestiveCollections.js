import CollectionShowcase from "@/components/collectionShowcase/CollectionShowcase";
import { Products } from "@/data/Products";
import { filterProductsByKey } from "@/utils/filterProductsByKey";

function FestiveCollections() {
  const festiveCollection = filterProductsByKey(
    Products,
    "isFestiveCollection"
  );
  return (
    <CollectionShowcase
      title={"festive collections"}
      showProducts={6}
      products={festiveCollection}
    />
  );
}

export default FestiveCollections;
