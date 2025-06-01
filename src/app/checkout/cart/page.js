import CollectionShowcase from "@/components/collectionShowcase/CollectionShowcase";
import CartSection from "@/components/modules/cart/CartSection";
const data = [
  {
    id: 1,
    image: "/image/product1.jpg",
    title: "AWIGNA by Warsha & Rittu",
    price: 471,
    discount: 0,
    rating: 5,
    url: "awigna-by-warsha-ritt",
  },
  {
    id: 2,
    image: "/image/product2.jpg",
    title: "Golden Glam Lehenga",
    price: 432,
    discount: 0,
    rating: 4.9,
    url: "golden-glam-lehenga",
  },
  {
    id: 3,
    image: "/image/product3.jpg",
    title: "Royal Red Bridal Set",
    price: 468,
    discount: 10,
    rating: 4.8,
    url: "royal-red-bridal-set",
  },
  {
    id: 4,
    image: "/image/product4.jpg",
    title: "Peach Elegance Embroidery",
    price: 414,
    discount: 10,
    rating: 4.7,
    url: "peach-elegance-embroidery",
  },
  {
    id: 5,
    image: "/image/product1.jpg",
    title: "Maroon Net Bridal Wear",
    price: 468,
    discount: 10,
    rating: 4.9,
    url: "maroon-net-bridal-wear",
  },
  {
    id: 6,
    image: "/image/product1.jpg",
    title: "Ivory Dream Lehenga",
    price: 441,
    discount: 10,
    rating: 4.8,
    url: "ivory-dream-lehenga",
  },
];
function Cart() {
  return (
    <section>
      <CartSection />
      <CollectionShowcase
        bgColor="#FBF9FB"
        title={"Best selling"}
        products={data}
      />
      <CollectionShowcase
        title={"Trending Products"}
        products={data}
        isSimpleSlider={true}
        compoName={"ShopByCategories"}
      />
    </section>
  );
}

export default Cart;
