import Image from "next/image";

// data
const brandData = [
  { id: 1, name: "Brand 1", image: "/logo/brand1.png" },
  { id: 2, name: "Brand 1", image: "/logo/brand2.png" },
  { id: 3, name: "Brand 1", image: "/logo/brand3.png" },
  { id: 4, name: "Brand 1", image: "/logo/brand4.png" },
  { id: 5, name: "Brand 1", image: "/logo/brand5.png" },
];

function Brand() {
  return (
    <section className="w-full h-full bg-[#400A38]">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {brandData.map((brand) => (
          <div key={brand.id} className="py-8">
            <Image
              width={200}
              height={50}
              src={brand.image}
              alt={brand.name}
              className="w-36 h-8 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Brand;
