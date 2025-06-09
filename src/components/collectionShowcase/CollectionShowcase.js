import ProductCard from "../cardGroup/ProductCard";
import ArrowSlider from "./ArrowSlider";
import CollectionShowcaseHeader from "./CollectionShowcaseHeader";

function CollectionShowcase({
  bgColor,
  isGradient,
  title,
  description,
  viewBtnLink = "/",
  viewBtnText = "View All",
  products,
  showProducts = 3,
  isSimpleSlider,
  isOverlaySlider,
  compoName,
}) {
  return (
    products && (
      <section
        style={{
          backgroundColor: bgColor,
        }}
        className={isGradient}
      >
        <div className="container mx-auto px-4 py-16">
          <CollectionShowcaseHeader
            title={title}
            description={description}
            viewBtnLink={viewBtnLink}
            viewBtnText={viewBtnText}
            isGradient={isGradient}
          />
          {isSimpleSlider ? (
            <ArrowSlider sliderData={products} compoName={compoName} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.slice(0, showProducts).map((item, ind) => (
                <ProductCard product={item} key={ind} />
              ))}
            </div>
          )}
        </div>
      </section>
    )
  );
}

export default CollectionShowcase;
