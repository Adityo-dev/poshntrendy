// import lucide icons
import { Heart, ShoppingCart, User } from "lucide-react";
// import components
import SearchBar from "./SearchBar";
import Image from "next/image";

function CenterNavigationBar() {
  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left Side Logo */}
        <div className="w-[110px] h-[60px] flex items-center">
          <Image
            src={"/logo/Logo.png"}
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
          <Heart size={22} />
          <ShoppingCart size={22} />
          <User size={22} />
        </div>
      </div>
    </header>
  );
}

export default CenterNavigationBar;
