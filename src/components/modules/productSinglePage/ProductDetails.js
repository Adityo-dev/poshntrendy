import Link from "next/link";

const infoGrid = [
  {
    id: 1,
    title: "Components",
    subTitle: "3 (Lehenga, Blouse, Dupatta)",
  },
  {
    id: 2,
    title: "FIT",
    subTitle: "Fitted at bust and waist",
  },
  {
    id: 3,
    title: "COMPOSITION",
    subTitle: "Brocade, Tulle",
  },
  {
    id: 4,
    title: "CARE",
    subTitle: "Dry clean only",
  },
];

function ProductDetails() {
  return (
    <div>
      {/* Title and subtitle */}
      <h3 className="text-[#000] text-[24px] font-black leading-8 mb-1">
        Kalighata
      </h3>
      <p className="text-[#605F5F] text-lg leading-[26px] mb-2">
        Peacock Red phulkari printed jumpsuit
      </p>
      <p className="text-[#E60CD9] text-3xl font-bold mb-4">$490</p>

      {/* Size selection And Action Buttons */}
      <div className="py-4 border-y border-[#605F5F]">
        <div className="mb-4">
          <p className="text-base font-semibold mb-3 text-[#605F5F]">
            Select your size
            <span className="font-normal"> What’s my size?</span>
          </p>
          <div className="flex gap-3">
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className="w-12 h-12 border border-[#605F5F] text-base font-bold rounded-[6px] cursor-pointer"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mb-2">
          <button className="flex-1 py-3 bg-[#E60CD9] text-[#FBF9FB] text-lg rounded-full hover:opacity-90 transition cursor-pointer">
            Shop now
          </button>
          <button className="flex-1 py-3 border border-[#E60CD9] text-[#0D0C0D] text-lg rounded-full hover:bg-[#E60CD9] hover:text-[#FBF9FB] transition duration-300 cursor-pointer">
            Add To Cart
          </button>
        </div>
      </div>

      {/* CASHACK10 */}
      <div className="py-4 border-b border-[#605F5F]">
        <div className="text-[#000]">
          <strong>CASHACK10</strong>
          <div className="flex items-center justify-between mt-1">
            <p className="text-[#605F5F]">
              <span>
                Purchase this product and receive 10% in loyalty points!
              </span>{" "}
              <span className="text-[#E94F58] underline cursor-pointer">
                (T&C Applied)
              </span>
            </p>
            <p className="text-[#E94F58] float-right cursor-pointer font-semibold">
              COPY CODE
            </p>
          </div>
        </div>
      </div>

      {/* PRICE MATCH PROMISE */}
      <div className="py-4 border-b border-[#605F5F]">
        <div className="text-[#000]">
          <strong>PRICE MATCH PROMISE</strong>
          <div className="flex items-center justify-between mt-1">
            <p className="text-[#605F5F]">
              <span>If you find the product for less we’ll match it!</span>{" "}
              <span className="text-[#E94F58] underline cursor-pointer">
                (T&C Applied)
              </span>
            </p>
            <p className="text-[#E94F58] float-right cursor-pointer font-semibold">
              KNOW MORE
            </p>
          </div>
        </div>
      </div>

      {/* Description and Code */}
      <div className="py-4 border-b border-[#605F5F]">
        <strong>PRICE DESCRIPTION</strong>
        <p className="text-[#605F5F] mb-2 mt-1">
          Tarun Tahiliani features red lehenga in brocade base with dabka,
          sitara and kundan embroidery, including gata detailing. It is paired
          wirth a blouse having crystal frines detail and a tulle dupatta. Style
          it with statement jewellery and heels for a perfect bridal look.
        </p>
        <p className="text-[#000] text-sm">
          <strong>PRICE CODE:</strong>{" "}
          <span className="text-[#605F5F]">TATC0523165</span>{" "}
          <span className="text-[#E82323] underline cursor-pointer">
            View Supplier Information
          </span>
        </p>
      </div>

      {/* Info Grid */}
      <div className="py-4 border-b border-[#605F5F] grid grid-cols-3 gap-4">
        {infoGrid.map((info) => (
          <div key={info?.id}>
            <strong>{info?.title}</strong>
            <p>{info?.subTitle}</p>
          </div>
        ))}
      </div>

      {/* Shipping Info */}
      <div className="py-4 border-b border-[#605F5F]">
        <strong>SHIPPING INFORMATION</strong>
        <p className="text-[#605F5F] mb-2 mt-1">
          This product will be shipped to you after 1–2 weeks from the date of
          order placed. All custom made orders are not returnable.
        </p>
      </div>

      {/* Disclaimer */}
      <div className="py-4 border-b border-[#605F5F]">
        <strong>DISCLAIMER</strong>
        <p className="text-[#605F5F] mb-2 mt-1">
          This product will be exclusively handcrafted for you, making the
          color/texture/pattern slightly vary from the image shown, due to
          multiple artisan-led techniques and processes involved.
        </p>
      </div>

      {/* Footer Links */}
      <div className="mt-6 text-base text-[#E82323] underline flex gap-4">
        <Link href="#">SHIPPING POLICY</Link>
        <Link href="#">HELP</Link>
        <Link href="#">CONTACT US</Link>
      </div>
    </div>
  );
}

export default ProductDetails;
