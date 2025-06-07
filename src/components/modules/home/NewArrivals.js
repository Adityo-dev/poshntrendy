import CollectionShowcase from "@/components/collectionShowcase/CollectionShowcase";
import { Products } from "@/data/Products";
import { filterProductsByKey } from "@/utils/filterProductsByKey";

function NewArrivals() {
  const newArrivals = filterProductsByKey(Products, "isNewArrivals");

  return (
    <CollectionShowcase
      isGradient={"bg-peach-pink-gradient"}
      title={"new arrivals"}
      viewBtnText="Explore all"
      description={
        "Blending the richness of tradition with the innovation of modernity creates a unique tapestry where the past and present coexist in perfect harmony. In every corner of design, culture, fashion, and architecture."
      }
      products={newArrivals}
      isSimpleSlider={true}
      compoName={"newArrivals"}
    />
  );
}

export default NewArrivals;
