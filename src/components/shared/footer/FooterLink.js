"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const footerLinkData = [
  {
    id: 1,
    image: "/image/footer1.png",
    title: "Who We Are",
    linkMenu: [
      { id: 1, name: "About Us", url: "/about" },
      { id: 2, name: "News & Offers", url: "/news-offers" },
      { id: 3, name: "Our People", url: "/our-people" },
      { id: 4, name: "Stories", url: "/stories" },
      { id: 5, name: "Our Artisans", url: "/our-artisans" },
      { id: 6, name: "Photos & Videos", url: "/media" },
      { id: 7, name: "Careers", url: "/careers" },
      { id: 8, name: "Lookbook", url: "/lookbook" },
    ],
  },
  {
    id: 2,
    image: "/image/footer2.png",
    title: "Categories",
    linkMenu: [
      { id: 1, name: "Women", url: "/categories/women" },
      { id: 2, name: "Men", url: "/categories/men" },
      { id: 3, name: "Kids", url: "/categories/kids" },
      { id: 4, name: "Home Décor", url: "/categories/home-decor" },
      { id: 5, name: "Wedding", url: "/categories/wedding" },
      { id: 6, name: "Jewellery", url: "/categories/jewellery" },
      { id: 7, name: "Skin & Hair", url: "/categories/skin-hair" },
      { id: 8, name: "Gifts & Crafts", url: "/categories/gifts-crafts" },
      { id: 9, name: "EID 25", url: "/categories/eid-25" },
    ],
  },
  {
    id: 3,
    image: "/image/footer3.png",
    title: "Customer Service",
    linkMenu: [
      { id: 1, name: "Contact Us", url: "/contact" },
      { id: 2, name: "Return & Exchanges", url: "/returns" },
      { id: 3, name: "How to Order", url: "/how-to-order" },
      { id: 4, name: "Fabric Care", url: "/fabric-care" },
      { id: 5, name: "Billing & Payments", url: "/billing-payments" },
      { id: 6, name: "My Aarong Rewards", url: "/aarong-rewards" },
      { id: 7, name: "Shipping & Delivery", url: "/shipping" },
      { id: 8, name: "Club Taaga", url: "/club-taaga" },
      { id: 9, name: "Track Your Orders", url: "/track-order" },
      { id: 10, name: "FAQs", url: "/faqs" },
    ],
  },
  {
    id: 4,
    image: "/image/footer4.png",
    title: "More",
    linkMenu: [
      { id: 1, name: "Terms & Conditions", url: "/terms" },
      { id: 2, name: "Digital Business Identity", url: "/digital-identity" },
      { id: 3, name: "Privacy Policy", url: "/privacy" },
      { id: 4, name: "Find a Store", url: "/store-locator" },
      { id: 5, name: "Customs Duty", url: "/customs-duty" },
      { id: 6, name: "Become a Producer", url: "/producer" },
      { id: 7, name: "VAT Registration", url: "/vat-registration" },
      { id: 8, name: "Site Map", url: "/sitemap" },
      { id: 9, name: "BSTI Licence", url: "/bsti-licence" },
    ],
  },
];

function FooterLink() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex w-full h-72 bg-black overflow-hidden">
      {footerLinkData.map((data) => {
        const isHovered = hoveredIndex === data?.id;
        const isOther = hoveredIndex !== null && hoveredIndex !== data?.id;

        return (
          <div
            key={data?.id}
            className={`flex h-full cursor-pointer ${
              isHovered ? "w-2/4" : isOther ? "w-1/6" : "w-1/4"
            }`}
            onMouseEnter={() => setHoveredIndex(data?.id)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`${
                isHovered ? "w-1/2" : "w-full"
              } relative overflow-hidden flex items-center justify-center`}
            >
              <Image
                src={data?.image}
                alt={data?.title}
                fill
                className="object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t  ${
                  isHovered
                    ? "from-[#E60CD9]/90 via-[#E60CD9]/40"
                    : "from-black/90 via-black/40"
                } to-transparent flex items-center justify-center text-white text-center`}
              >
                <h2 className="text-white text-lg font-bold uppercase z-10">
                  {data?.title}
                </h2>
              </div>
            </div>

            {isHovered && (
              <div className="w-1/2 bg-black text-white px-8 transition-all duration-300 grid grid-cols-2 content-center">
                {data?.linkMenu.map((menu) => (
                  <div key={menu?.id} className="py-1.5">
                    <Link
                      href={menu?.url}
                      className="text-sm font-medium hover:text-primary hover:underline transition-colors duration-200"
                    >
                      {menu?.name}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default FooterLink;
