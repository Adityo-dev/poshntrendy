import Image from "next/image";
import Link from "next/link";

function CategoriesCart({ cate }) {
  return (
    <Link
      href={`/shop?filter=${(cate?.title).toLowerCase()}`}
      key={cate?.id}
      className="relative group overflow-hidden rounded-xl sm:rounded-2xl"
    >
      <Image
        src={cate?.image}
        width={400}
        height={400}
        alt={cate?.title}
        className="w-full h-full sm:h-[420px] object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-6 sm:py-10 text-white text-center">
        <p className="text-lg sm:text-xl font-semibold uppercase">
          {cate?.title}
        </p>
        <button className="sm:mt-2 text-sm font-medium uppercase">
          Shop now
        </button>
      </div>
    </Link>
  );
}

export default CategoriesCart;
