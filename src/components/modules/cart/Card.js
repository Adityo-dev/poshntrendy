import { Heart, X } from "lucide-react";
import Image from "next/image";

function Card({ cartData }) {
  return (
    <div className="space-y-4">
      {cartData.map((item) => (
        <div
          className="border border-[#E60CD9] rounded-lg p-6 flex gap-6"
          key={item?.id}
        >
          <Image
            src="/image/product1.png"
            width={400}
            height={400}
            alt="product"
            className="w-36 h-[172px] object-cover rounded-sm"
          />

          <div className="flex justify-between w-full">
            {/* Left part */}
            <div className="flex flex-col gap-2">
              <h5 className="text-lg font-bold">Kalighata</h5>
              <p className="text-[#605F5F] text-base leading-4">
                Red Brocade Kundan & Dabka Emabroidered Lehenga Set
              </p>
              <div className="space-y-3">
                <p className="text-[#000] font-semibold">
                  Code : <span>TATC0359884</span>
                </p>
                <button className="text-[#000] border border-[#605F5F] py-1 px-3 font-semibold w-fit text-sm">
                  Size: <span>S</span>
                </button>
                <p className="text-[#000] font-semibold text-sm">
                  ESTIMATED SHIPPING DATE : <u>16TH OF MAY</u>
                </p>
              </div>
            </div>

            {/* Right part (Price + Icons) */}
            <div className="flex flex-col justify-between items-end h-full">
              <p className="text-xl font-bold">$500</p>
              <div className="flex gap-3">
                <Heart size={22} strokeWidth={1.3} className="cursor-pointer" />
                <X size={22} strokeWidth={1.3} className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
