// import lucide icons
import { Heart, ShoppingCart, User } from "lucide-react";
// import components
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";

const rightSide = [
  {
    id: 1,
    icon: <Heart size={24} />,
    url: "/wishlist",
  },
  {
    id: 2,
    icon: <ShoppingCart size={24} />,
    url: "/cart",
  },
  {
    id: 3,
    icon: <User size={24} />,
    url: "/user",
  },
];

function CenterNavigationBar() {
  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left Side Logo */}
        <div className="w-[160px] h-[65px]">
          <Image
            src={"/logo/Posh_N_Trendy___Logo.png"}
            width={400}
            height={400}
            alt=""
            className="w-full h-full "
          />
        </div>

        {/* Center Search bar */}
        <div className="flex-1 max-w-2xl">
          <SearchBar />
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4 text-[#3C0A39]">
          {rightSide.map((data) => (
            <Link href={data?.url} key={data?.id}>
              {data?.icon}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export default CenterNavigationBar;
