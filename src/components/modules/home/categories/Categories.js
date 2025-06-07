import Link from "next/link";
import CategoriesCart from "./CategoriesCart";

// Category Data
const categories = [
  {
    id: 1,
    image: "/image/realWomen.jpg",
    title: "WOMEN",
  },
  {
    id: 2,
    image: "/image/kids.jpg",
    title: "KIDS",
  },
  {
    id: 3,
    image: "/image/men8.jpg",
    title: "MEN",
  },
  {
    id: 4,
    image: "/image/menUpcoming.jpg",
    title: "UPCOMING",
  },
  {
    id: 5,
    image: "/image/product3.jpg",
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
          <CategoriesCart cate={cate} key={cate?.id} />
        ))}
      </div>
    </section>
  );
}

export default Categories;
