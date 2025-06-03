"use client";
import {
  Heart as FiHeart,
  MapPin as FiMapPin,
  ShoppingBag as FiShoppingBag,
  Lock,
  User,
} from "lucide-react";
import { useState } from "react";

// Dynamic imports for better performance
const Address = dynamic(() => import("@/components/manage/Address"));
const Coupon = dynamic(() => import("@/components/manage/Coupon"));
const Orders = dynamic(() => import("@/components/manage/Orders"));
const Password = dynamic(() => import("@/components/manage/Password"));
const Points = dynamic(() => import("@/components/manage/Points"));
const Profile = dynamic(() => import("@/components/manage/Profile"));
const Referral = dynamic(() => import("@/components/manage/Referral"));
const Review = dynamic(() => import("@/components/manage/Review"));
const Wishlist = dynamic(() => import("@/components/manage/Wishlist"));

import NameAndImage from "@/components/manage/NameAndImage";
import dynamic from "next/dynamic";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  const navItems = [
    { name: "Profile", icon: <User className="w-5 h-5" /> },
    { name: "Password", icon: <Lock className="w-5 h-5" /> },
    { name: "Wish List", icon: <FiHeart className="w-5 h-5" /> },
    { name: "Orders", icon: <FiShoppingBag className="w-5 h-5" /> },
    { name: "Address", icon: <FiMapPin className="w-5 h-5" /> },
    // { name: "Points", icon: <FiStar className="w-5 h-5" /> },
    // { name: "Coupon", icon: <FiTag className="w-5 h-5" /> },
    // { name: "Review", icon: <FiEdit className="w-5 h-5" /> },
    // { name: "Referral", icon: <FiShare2 className="w-5 h-5" /> },
  ];

  return (
    <section className="bg-[#ffe5ec]">
      <div className="container mx-auto px-4 py-12 flex space-x-4 w-full h-full">
        {/* Fixed Sidebar */}
        <aside className="w-72 bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 shadow-xl rounded-lg h-full">
          <NameAndImage />
          <nav className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`flex items-center w-full p-3 rounded-lg transition-all ${
                  activeTab === item.name
                    ? "bg-primary font-semibold shadow-md"
                    : "hover:bg-white hover:bg-opacity-10"
                }`}
                aria-current={activeTab === item.name ? "page" : undefined}
              >
                <span className="text-xl mr-3" aria-hidden="true">
                  {item.icon}
                </span>
                {item.name}
              </button>
            ))}
          </nav>

          {/* Points Display */}
          <div className="mt-12 p-4 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
            <div className="text-secondary font-medium">Your Points</div>
            <div className="text-4xl font-bold text-accent">200</div>
            <p className="text-xs mt-1 text-gray-300">
              Redeemable for discounts
            </p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="bg-white w-full h-full rounded-lg shadow-md p-6">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">{activeTab}</h1>
              <p className="text-gray-600 mt-2">
                {getTabDescription(activeTab)}
              </p>
            </header>

            {/* Dynamic content with loading state */}
            <div className="animate-fadeIn">{renderActiveTab(activeTab)}</div>
          </div>
        </main>
      </div>
    </section>
  );
};

// Helper function to get tab descriptions
function getTabDescription(tabName) {
  const descriptions = {
    Profile: "Manage your personal information and account settings",
    Password: "Update your password for enhanced security",
    "Wish List": "Your saved items for future purchase",
    Points: "View and redeem your loyalty points",
    Orders: "Track and manage your order history",
    Coupon: "Your available discounts and promo codes",
    Review: "Manage your product reviews and ratings",
    Address: "Your saved shipping addresses",
    Referral: "Invite friends and earn rewards",
  };
  return descriptions[tabName] || "";
}

// Component renderer with loading states
function renderActiveTab(activeTab) {
  const TabComponent = {
    Profile,
    Password,
    "Wish List": Wishlist,
    Points,
    Orders,
    Coupon,
    Review,
    Address,
    Referral: Referral,
  }[activeTab];

  return TabComponent ? (
    <TabComponent />
  ) : (
    <div className="flex justify-center items-center h-64">
      <div className="animate-pulse text-gray-500">Loading content...</div>
    </div>
  );
}

export default Dashboard;
