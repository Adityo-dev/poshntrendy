import Image from "next/image";
import Link from "next/link";

function ProductCard({ product }) {
  return (
    <div className="group w-full max-h-[680px] bg-[#FEFEFE] border-2 hover:border-[#E60CD9] rounded-[12px] transition-all duration-300 overflow-hidden">
      <Link href={`/products/${product?.title}`}>
        <Image
          src={product?.image}
          width={600}
          height={600}
          alt=""
          className="w-full h-[560px] object-fill"
        />
      </Link>
      <div className=" relative p-4">
        <p className="flex items-center space-x-1 text-yellow-500">
          {Array.from({ length: 5 }, (_, i) => {
            const ratingValue = product?.rating || 0;
            if (i + 1 <= Math.floor(ratingValue)) {
              return <span key={i}>★</span>;
            } else if (i < ratingValue) {
              return <span key={i}>✬</span>;
            } else {
              return <span key={i}>☆</span>;
            }
          })}
        </p>

        <p className="text-[#0D0C0D] text-lg font-semibold leading-7">
          {product?.title}
        </p>
        <div className="flex items-center gap-2">
          {product.discount > 0 && (
            <p className="text-[#CAC8CA] text-2xl leading-9 line-through">
              ${Math.round(product.price / (1 - product.discount / 100))}
            </p>
          )}
          <p className="text-[#E60CD9] text-2xl leading-9">${product.price}</p>
          {product.discount > 0 && (
            <p className="text-[#E60CD9] text-lg leading-7">
              {product.discount}% off
            </p>
          )}
        </div>
        <Link
          href={`/products/${product?.title}?=ss`}
          style={{ borderRadius: "32px 0px 12px 0px" }}
          className="absolute right-0 bottom-0 w-44 h-11 flex items-center justify-center group-hover:bg-[#E60CD9] bg-[#F0D4EC] group-hover:text-[#FBF9FB] text-[#605F5F] text-lg transition-all duration-300"
        >
          Shop now
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
