import CollectionShowcaseHeader from "@/components/collectionShowcase/CollectionShowcaseHeader";
import Image from "next/image";
import Link from "next/link";

// brand Data
const brands = [
  {
    id: 1,
    image: "/image/brand1.jpg",
    title: "Ethnic Elegance",
  },
  {
    id: 2,
    image: "/image/men6.jpg",
    title: "Saree Studio",
  },
  {
    id: 3,
    image: "/image/kids8.jpg",
    title: "Urban Vibe",
  },
  {
    id: 4,
    image: "/image/menUpcoming.jpg",
    title: "Royal Threads",
  },
  {
    id: 5,
    image: "/image/men3.jpg",
    title: "Ethnic Charm",
  },
  {
    id: 6,
    image: "/image/brand2.jpg",
    title: "Daily Chic",
  },
];

function Brands() {
  return (
    <div className="container mx-auto px-4 py-16">
      <CollectionShowcaseHeader
        title="All Brands"
        viewBtnLink="#"
        viewBtnText="View All"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {brands.splice(0, 6).map((brand, index) => (
          <Link
            href={`/shop?filter=${brand?.title}`}
            key={brand?.id}
            className={`relative group overflow-hidden rounded-xl sm:rounded-2xl ${
              index === 0 || index === 5 ? "sm:col-span-2" : ""
            }`}
          >
            <Image
              src={brand?.image}
              width={600}
              height={800}
              alt={brand?.title}
              className="w-full h-full max-h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex flex-col justify-end p-4 sm:p-6">
              <p className="text-white text-lg sm:text-xl font-semibold uppercase">
                {brand?.title}
              </p>
              <span className="text-white text-sm mt-1 uppercase">
                Shop now
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Brands;
