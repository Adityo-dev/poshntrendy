import CollectionShowcase from "@/components/collectionShowcase/CollectionShowcase";
import Categories from "@/components/modules/home/Categories";
import Hero from "@/components/modules/home/hero/Hero";

const designerOnDiscount = [
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
    image: "/image/product5.jpg",
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
  {
    id: 7,
    image: "/image/product7.jpg",
    title: "Navy Blue Mirror Work",
    price: 495,
    discount: 10,
    rating: 4.7,
    url: "navy-blue-mirror-work",
  },
  {
    id: 8,
    image: "/image/product8.jpg",
    title: "Silver Zari Embroidered Set",
    price: 427,
    discount: 10,
    rating: 4.6,
    url: "silver-zari-embroidered-set",
  },
  {
    id: 9,
    image: "/image/product9.jpg",
    title: "Mustard Silk Festive Wear",
    price: 396,
    discount: 10,
    rating: 4.5,
    url: "mustard-silk-festive-wear",
  },
  {
    id: 10,
    image: "/image/product10.jpg",
    title: "Emerald Green Luxury Look",
    price: 477,
    discount: 10,
    rating: 4.9,
    url: "emerald-green-luxury-look",
  },
  {
    id: 11,
    image: "/image/product11.jpg",
    title: "Velvet Red Wedding Wear",
    price: 540,
    discount: 10,
    rating: 4.8,
    url: "velvet-red-wedding-wear",
  },
  {
    id: 12,
    image: "/image/product1.png",
    title: "Pastel Peach Bridal Set",
    price: 405,
    discount: 10,
    rating: 4.7,
    url: "pastel-peach-bridal-set",
  },
  {
    id: 13,
    image: "/image/product2.png",
    title: "Champagne Designer Lehenga",
    price: 459,
    discount: 10,
    rating: 4.6,
    url: "champagne-designer-lehenga",
  },
  {
    id: 14,
    image: "/image/product3.png",
    title: "Satin Rose Embroidered Dress",
    price: 477,
    discount: 10,
    rating: 4.9,
    url: "satin-rose-embroidered-dress",
  },
  {
    id: 15,
    image: "/image/product4.png",
    title: "Designer Net Bridal Lehenga",
    price: 495,
    discount: 10,
    rating: 5.0,
    url: "designer-net-bridal-lehenga",
  },
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

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Categories /> */}
      <CollectionShowcase
        bgColor={"#ffd7ad"}
        title={"new arrivals"}
        description={
          "Blending the richness of tradition with the innovation of modernity creates a unique tapestry where the past and present coexist in perfect harmony. In every corner of design, culture, fashion, and architecture."
        }
        products={designerOnDiscount}
        isSimpleSlider={true}
        compoName={"newArrivals"}
      />
      {/* BEST SELLERS */}
      <CollectionShowcase
        bgColor="#FBF9FB"
        title={"festive collections"}
        showProducts={6}
        products={weddingTales}
      />
      {/* <ClientStories /> */}
      <CollectionShowcase
        title={"sales ongoing"}
        showProducts={6}
        products={weddingTales}
      />
      {/* BRANDS */}
    </main>
  );
}
