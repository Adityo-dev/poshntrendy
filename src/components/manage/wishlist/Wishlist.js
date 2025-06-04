import Empty from "../Empty";
import WishlistCard from "./WishlistCard";

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
      {wishlistItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {wishlistItems.map((item) => (
            <WishlistCard item={item} key={item?.id} />
          ))}
        </div>
      ) : (
        <Empty
          title={"🧥 Your Wishlist is Empty!"}
          description={
            "Fashion is calling, but your wishlist isn’t answering! Start adding the styles you love — your next favorite outfit is just a click away. 💃🛍️"
          }
        />
      )}
    </div>
  );
}

export default Wishlist;
