import Image from "next/image";

const wishlistItems = [
  {
    id: 1,
    image: "/image/product2.jpg",
    name: "Floral Summer Dress",
    price: "$49.99",
  },
  {
    id: 2,
    image: "/image/product10.jpg",
    name: "Leather Crossbody Bag",
    price: "$39.99",
  },
  {
    id: 3,
    image: "/image/product3.jpg",
    name: "White Sneakers",
    price: "$59.99",
  },
];

function Wishlist({}) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        Your Wishlist ({wishlistItems.length})
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 hover:shadow-md transition"
          >
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
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
