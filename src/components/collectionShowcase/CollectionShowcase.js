import Link from "next/link";
import ProductCard from "../cardGroup/ProductCard";
import ArrowSlider from "./ArrowSlider";

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
          <div className="flex justify-between mb-12">
            <div className="w-1/2">
              {title && (
                <h3 className="text-[#0D0C0D] text-4xl font-semibold uppercase">
                  {title}
                </h3>
              )}
              {description && (
                <p className="text-[#605F5F] text-lg mt-3">{description}</p>
              )}
            </div>
            <Link
              href={viewBtnLink}
              className={`w-36 h-10 border-2 border-primary flex items-center justify-center rounded-full ${
                isGradient
                  ? "bg-primary text-primary-foreground"
                  : "text-[#A5A5A5]"
              } text-lg`}
            >
              {viewBtnText}
            </Link>
          </div>
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
