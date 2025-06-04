"use client";
import {
  Heart,
  LockIcon,
  LogOut,
  MapPin,
  ShoppingBag,
  User,
} from "lucide-react";
import { useState } from "react";

// Dynamic imports for better performance
const Address = dynamic(() => import("@/components/manage/address/Address"));
const Coupon = dynamic(() => import("@/components/manage/Coupon"));
const Orders = dynamic(() => import("@/components/manage/orders/Orders"));
const Password = dynamic(() => import("@/components/manage/Password"));
const Points = dynamic(() => import("@/components/manage/Points"));
const Profile = dynamic(() => import("@/components/manage/Profile"));
const Referral = dynamic(() => import("@/components/manage/Referral"));
const Review = dynamic(() => import("@/components/manage/Review"));
const Wishlist = dynamic(() => import("@/components/manage/wishlist/Wishlist"));

import NameAndImage from "@/components/manage/NameAndImage";
import dynamic from "next/dynamic";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  const navItems = [
    { name: "Profile", icon: <User className="w-5 h-5" /> },
    { name: "Password", icon: <LockIcon className="w-5 h-5" /> },
    { name: "Wish List", icon: <Heart className="w-5 h-5" /> },
    { name: "Orders", icon: <ShoppingBag className="w-5 h-5" /> },
    { name: "Address", icon: <MapPin className="w-5 h-5" /> },
    // { name: "Points", icon: <MapPin className="w-5 h-5" /> },
    // { name: "Coupon", icon: <Tag className="w-5 h-5" /> },
    // { name: "Review", icon: <Edit className="w-5 h-5" /> },
    // { name: "Referral", icon: <Share2 className="w-5 h-5" /> },
  ];

  return (
    <section>
      <div className="container mx-auto px-4 py-6 flex space-x-4 w-full h-full">
        {/* Fixed Sidebar */}
        <aside className="w-72 bg-white border text-black p-4  rounded-lg h-full">
          <NameAndImage />
          <nav className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`flex items-center w-full p-3 rounded-lg transition-all ${
                  activeTab === item.name
                    ? "bg-primary font-semibold text-white"
                    : "bg-white hover:bg-opacity-10"
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
          <p className="mt-24 flex items-center gap-1 cursor-pointer text-primary font-semibold">
            Log Out <LogOut className="w-4 h-4" />
          </p>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="bg-white border w-full h-full rounded-lg p-6">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">
                My {activeTab}
              </h1>
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
