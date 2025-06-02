import Image from "next/image";
import Link from "next/link";

// data
const categories = [
  {
    id: 1,
    image: "/image/product1.avif",
    title: "WOMEN",
  },
  {
    id: 2,
    image: "/image/kids.jpg",
    title: "KIDS",
  },
  {
    id: 3,
    image: "/image/product2.jpg",
    title: "MEN",
  },
  {
    id: 4,
    image: "/image/product11.jpg",
    title: "UPCOMING",
  },
  {
    id: 5,
    image: "/image/product7.jpg",
    title: "SALE",
  },
];

function Categories() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-12">
        <h3 className="text-[#0D0C0D] text-4xl font-semibold">
          SHOP BY CATEGORIES
        </h3>
        <Link
          href={"viewAllLink"}
          className="text-[#A5A5A5] text-lg flex items-center gap-2"
        >
          VIEW ALL
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((cate) => (
          <Link
            href={`/shop?filter=WoMen`}
            key={cate?.id}
            className="relative group overflow-hidden rounded-2xl"
          >
            <Image
              src={cate?.image}
              width={400}
              height={400}
              alt={cate?.title}
              className="w-full h-[420px] object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-10 text-white text-center">
              <p className="text-xl font-semibold">{cate?.title}</p>
              <button className="mt-2 text-sm font-medium uppercase  ">
                Shop now
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Categories;
