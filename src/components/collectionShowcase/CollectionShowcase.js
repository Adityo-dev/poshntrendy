import Link from "next/link";
import ProductCard from "../cardGroup/ProductCard";
import ArrowSlider from "./ArrowSlider";

function CollectionShowcase({
  bgColor,
  title,
  viewAllLink = "/",
  viewAllText = "View All",
  products,
  showProducts = 3,
  isSimpleSlider,
  isOverlaySlider,
  compoName,
}) {
  return (
    products && (
      <section className={`bg-[${bgColor}]`}>
        <div className="container mx-auto px-4 py-24">
          {/* <div className="flex justify-between items-center mb-12">
            <h3 className="text-[#0D0C0D] text-[54px] leading-[62px]">
              {title}
            </h3>
            <Link
              href={viewAllLink}
              className="w-36 h-10 border-2 border-[#E60CD9] flex items-center justify-center rounded-full text-[#A5A5A5] text-lg"
            >
              {viewAllText}
            </Link>
          </div> */}
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-[#0D0C0D] text-4xl font-semibold">{title}</h3>
            <Link
              href={"viewAllLink"}
              className="text-[#A5A5A5] text-lg flex items-center gap-2"
            >
              VIEW ALL
            </Link>
          </div>
          {isSimpleSlider ? (
            <ArrowSlider sliderData={products} compoName={compoName} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
