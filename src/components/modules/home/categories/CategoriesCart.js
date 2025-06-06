import Image from "next/image";
import Link from "next/link";

function CategoriesCart({ cate }) {
  return (
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
  );
}

export default CategoriesCart;
