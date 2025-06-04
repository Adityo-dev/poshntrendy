import Image from "next/image";

function WishlistCard({ item }) {
  return (
    <div className="border rounded-lg p-4  transition">
      <div className="bg-gray-100 rounded-lg mb-3 overflow-hidden">
        <Image
          src={item?.image}
          width={500}
          height={500}
          alt=""
          className="w-full h-full"
        />
      </div>
      <h3 className="font-medium">{item.name}</h3>
      <p className="text-primary font-semibold">{item.price}</p>
      <div className="flex justify-between mt-3">
        <button className="text-sm bg-primary text-white px-3 py-1 rounded hover:bg-opacity-90">
          Add to Cart
        </button>
        <button className="text-sm text-red-500 hover:text-red-700">
          Remove
        </button>
      </div>
    </div>
  );
}

export default WishlistCard;
