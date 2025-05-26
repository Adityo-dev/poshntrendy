import CollectionShowcase from "@/components/collectionShowcase/CollectionShowcase";
import ProductDetails from "@/components/modules/productSinglePage/ProductDetails";
import ProductImages from "@/components/modules/productSinglePage/ProductImages";

const images = [
  "/image/product11.jpg",
  "/image/product2.jpg",
  "/image/product3.jpg",
];
const weddingTales = [
  {
    id: 1,
    image: "/image/product11.jpg",
    title: "AWIGNA by Warsha & Rittu",
    price: 471,
    discount: 0,
    rating: 5,
    url: "awigna-by-warsha-ritt",
  },
  {
    id: 2,
    image: "/image/product10.jpg",
    title: "Golden Glam Lehenga",
    price: 432,
    discount: 0,
    rating: 4.9,
    url: "golden-glam-lehenga",
  },
  {
    id: 3,
    image: "/image/product9.jpg",
    title: "Royal Red Bridal Set",
    price: 468,
    discount: 10,
    rating: 4.8,
    url: "royal-red-bridal-set",
  },
  {
    id: 4,
    image: "/image/product3.jpg",
    title: "Peach Elegance Embroidery",
    price: 414,
    discount: 10,
    rating: 4.7,
    url: "peach-elegance-embroidery",
  },
  {
    id: 5,
    image: "/image/product7.jpg",
    title: "Maroon Net Bridal Wear",
    price: 468,
    discount: 10,
    rating: 4.9,
    url: "maroon-net-bridal-wear",
  },
  {
    id: 6,
    image: "/image/product6.jpg",
    title: "Ivory Dream Lehenga",
    price: 441,
    discount: 10,
    rating: 4.8,
    url: "ivory-dream-lehenga",
  },
];
const similarProducts = [
  {
    id: 1,
    image: "/image/product2.jpg",
    title: "AWIGNA by Warsha & Rittu",
    price: 471,
    discount: 0,
    rating: 5,
    url: "awigna-by-warsha-ritt",
  },
  {
    id: 2,
    image: "/image/product3.jpg",
    title: "Golden Glam Lehenga",
    price: 432,
    discount: 0,
    rating: 4.9,
    url: "golden-glam-lehenga",
  },
  {
    id: 3,
    image: "/image/product11.jpg",
    title: "Royal Red Bridal Set",
    price: 468,
    discount: 10,
    rating: 4.8,
    url: "royal-red-bridal-set",
  },
  {
    id: 4,
    image: "/image/product3.jpg",
    title: "Peach Elegance Embroidery",
    price: 414,
    discount: 10,
    rating: 4.7,
    url: "peach-elegance-embroidery",
  },
  {
    id: 5,
    image: "/image/product7.jpg",
    title: "Maroon Net Bridal Wear",
    price: 468,
    discount: 10,
    rating: 4.9,
    url: "maroon-net-bridal-wear",
  },
  {
    id: 6,
    image: "/image/product6.jpg",
    title: "Ivory Dream Lehenga",
    price: 441,
    discount: 10,
    rating: 4.8,
    url: "ivory-dream-lehenga",
  },
];

function ProductSinglePage() {
  return (
    <>
      <section className="bg-[#FFE5EC] min-h-screen pb-16">
        <div className="container mx-auto px-4 py-12 grid grid-cols-12 gap-10 items-start">
          <div className="col-span-7">
            <ProductImages images={images} />
          </div>
          <div className="col-span-5">
            <ProductDetails />
          </div>
        </div>
      </section>

      <CollectionShowcase
        bgColor="#FBF9FB"
        title={"More From Kalighata"}
        products={weddingTales}
      />

      <CollectionShowcase
        title={"Similar Products"}
        products={similarProducts}
        isSimpleSlider={true}
        compoName={"ShopByCategories"}
      />
    </>
  );
}

export default ProductSinglePage;
